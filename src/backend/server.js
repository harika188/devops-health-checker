const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data - simulating real DevOps services
const services = [
  { 
    id: 1, 
    name: 'Jenkins', 
    status: 'healthy', 
    uptime: '99.9%', 
    lastCheck: new Date(),
    description: 'CI/CD Pipeline Server'
  },
  { 
    id: 2, 
    name: 'Docker', 
    status: 'healthy', 
    uptime: '99.8%', 
    lastCheck: new Date(),
    description: 'Container Runtime'
  },
  { 
    id: 3, 
    name: 'AWS EC2', 
    status: 'healthy', 
    uptime: '99.95%', 
    lastCheck: new Date(),
    description: 'Cloud Compute'
  },
  { 
    id: 4, 
    name: 'PostgreSQL', 
    status: 'healthy', 
    uptime: '99.7%', 
    lastCheck: new Date(),
    description: 'Database Server'
  },
  { 
    id: 5, 
    name: 'Terraform', 
    status: 'healthy', 
    uptime: '100%', 
    lastCheck: new Date(),
    description: 'Infrastructure as Code'
  }
];

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'DevOps Health Checker API - Welcome!',
    version: '1.0.0',
    status: 'running',
    endpoints: ['/health', '/api/services', '/api/metrics']
  });
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime() + ' seconds'
  });
});

app.get('/api/services', (req, res) => {
  // Update last check time to current time
  const updatedServices = services.map(service => ({
    ...service,
    lastCheck: new Date()
  }));
  res.json(updatedServices);
});

app.get('/api/metrics', (req, res) => {
  const healthyCount = services.filter(s => s.status === 'healthy').length;
  const totalUptime = services.reduce((sum, s) => sum + parseFloat(s.uptime), 0);
  const avgUptime = (totalUptime / services.length).toFixed(2);
  
  res.json({
    totalServices: services.length,
    healthyServices: healthyCount,
    unhealthyServices: services.length - healthyCount,
    averageUptime: `${avgUptime}%`,
    lastCheck: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 DevOps Health Checker API is running!`);
  console.log(`📍 Server: http://localhost:${PORT}`);
  console.log(`\n📊 Available Endpoints:`);
  console.log(`   GET  /              - API Info`);
  console.log(`   GET  /health        - Server Health`);
  console.log(`   GET  /api/services  - All Services Status`);
  console.log(`   GET  /api/metrics   - Dashboard Metrics`);
  console.log(`\n✨ Ready to receive requests!\n`);
});

module.exports = app;