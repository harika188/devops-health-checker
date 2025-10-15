// Use environment variable or default to localhost
   const API_URL = window.location.hostname === 'localhost' 
       ? 'http://localhost:3000'
       : `http://${window.location.hostname}:3000`;

// Service icons mapping
const serviceIcons = {
    'Jenkins': '🔧',
    'Docker': '🐳',
    'AWS EC2': '☁️',
    'PostgreSQL': '🗄️',
    'Terraform': '🏗️'
};

// Fetch and display metrics
async function fetchMetrics() {
    try {
        const response = await fetch(`${API_URL}/api/metrics`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        document.getElementById('totalServices').textContent = data.totalServices;
        document.getElementById('healthyServices').textContent = data.healthyServices;
        document.getElementById('unhealthyServices').textContent = data.unhealthyServices;
        document.getElementById('avgUptime').textContent = data.averageUptime;
        document.getElementById('lastUpdated').textContent = new Date(data.lastCheck).toLocaleTimeString();
        
    } catch (error) {
        console.error('Error fetching metrics:', error);
        showError('metrics');
    }
}

// Fetch and display services
async function fetchServices() {
    try {
        const response = await fetch(`${API_URL}/api/services`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const services = await response.json();
        
        const servicesList = document.getElementById('servicesList');
        
        if (services.length === 0) {
            servicesList.innerHTML = '<div class="loading"><p>No services found</p></div>';
            return;
        }
        
        servicesList.innerHTML = services.map((service, index) => `
            <div class="service-item" style="animation-delay: ${index * 0.1}s">
                <div class="service-info">
                    <span class="service-icon">${serviceIcons[service.name] || '⚙️'}</span>
                    <div class="service-details">
                        <span class="service-name">${service.name}</span>
                        <span class="service-description">${service.description || ''}</span>
                    </div>
                </div>
                <div class="service-status">
                    <span class="status-badge">${service.status}</span>
                    <div class="uptime">
                        <span class="uptime-value">${service.uptime}</span>
                        <span class="uptime-label">Uptime</span>
                    </div>
                </div>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error fetching services:', error);
        showError('services');
    }
}

function showError(section) {
    if (section === 'services') {
        const servicesList = document.getElementById('servicesList');
        servicesList.innerHTML = `
            <div class="loading" style="color: #ef4444;">
                <p style="font-size: 1.2em; margin-bottom: 10px;">❌ Unable to load services</p>
                <p>Make sure the backend server is running on <strong>http://localhost:3000</strong></p>
                <p style="margin-top: 10px; font-size: 0.9em;">Check Terminal for backend status</p>
            </div>
        `;
    }
}

// Auto-refresh data every 5 seconds
function startAutoRefresh() {
    setInterval(() => {
        fetchMetrics();
        fetchServices();
    }, 5000);
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DevOps Health Checker Dashboard Loading...');
    fetchMetrics();
    fetchServices();
    startAutoRefresh();
    console.log('✅ Dashboard loaded! Auto-refresh every 5 seconds.');
});