# 🚀 DevOps Health Checker

A real-time monitoring dashboard for DevOps infrastructure, built as part of an end-to-end CI/CD pipeline project.

![Dashboard](screenshots/dashboard-screenshot.png)

## 📋 Project Overview

This project demonstrates modern DevOps practices by implementing a complete CI/CD pipeline with:
- Automated testing and deployment
- Containerization with Docker
- Infrastructure as Code with Terraform
- Cloud deployment on AWS
- Monitoring and logging
- Security scanning

## ✨ Features

- **Real-time Monitoring**: Live updates every 5 seconds
- **Service Health Tracking**: Monitor Jenkins, Docker, AWS, PostgreSQL, and Terraform
- **RESTful API**: Well-structured backend with multiple endpoints
- **Modern UI**: Responsive design with smooth animations
- **Auto-refresh Dashboard**: Automatic data updates without page reload

## 🛠️ Tech Stack

### Frontend
- HTML5, CSS3, JavaScript (Vanilla)
- Modern UI with gradient design and animations
- Responsive layout (mobile-friendly)

### Backend
- Node.js with Express
- RESTful API architecture
- CORS enabled for cross-origin requests

### DevOps Tools (Coming Soon)
- **CI/CD**: Jenkins
- **Containerization**: Docker, Docker Compose
- **Cloud**: AWS (EC2, RDS, VPC, ALB)
- **IaC**: Terraform
- **Artifact Management**: JFrog Artifactory
- **Monitoring**: Prometheus, Grafana
- **Logging**: CloudWatch

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Python 3 (for local web server)
- Git

### Installation & Setup

1. **Clone the repository**
  ```bash
   git clone https://github.com/harika188/devops-health-checker.git
   cd devops-health-checker

 2. **Install backend dependencies**
  ```cd src/backend
     npm install

 3. **Start the backend server**
  ```npm start
     Backend will run on http://localhost:3000

4. **Start the frontend in new terminal**
  ```cd src/frontend
    python3 -m http.server 8000
    Frontend will run on http://localhost:8000

5. **Open your browser**
   ```Navigate to http://localhost:8000 to see the dashboard!


**Replace with:** (add proper code block formatting)
```markdown
### Example API Response

**GET `/api/services`**
```json
[
  {
    "id": 1,
    "name": "Jenkins",
    "status": "healthy",
    "uptime": "99.9%",
    "description": "CI/CD Pipeline Server",
    "lastCheck": "2024-10-11T14:30:00.000Z"
  }
]

 ## 🎯 Learning Outcomes

 Through this project, I've gained hands-on experience with:

- Building RESTful APIs with Node.js/Express
- Modern frontend development with vanilla JavaScript
- Git version control and GitHub workflows
- Project structure and organization
- API design and documentation

**Coming soon:**

- Docker containerization and orchestration
- Infrastructure as Code with Terraform
- CI/CD pipeline implementation with Jenkins
- Cloud deployment on AWS
- Monitoring and observability
- Security best practices in DevOps

### 🤝 Contributing
This is a personal learning project, but feedback and suggestions are welcome!

## 👤 Author

**Sai Harika Vempati**

- 🎓 MS in Information Technology @ Florida State University
- 💼 Former Systems Engineer @ Infosys
- 📧 Email: saiharikachowdary00@gmail.com
- 💼 LinkedIn: [linkedin.com/in/saiharikavempati](www.linkedin.com/in/sai-harika-vempati-5a3748193)
- 🌐 GitHub: [@harika188](https://github.com/harika188)

📄 License
This project is licensed under the MIT License.

⭐ Star this repo if you find it helpful!
📝 Follow along as I build this project week by week!

