# Docker Configuration

This directory contains Docker configurations for the DevOps Health Checker application.

## Files

- `Dockerfile.backend` - Backend API container
- `Dockerfile.frontend` - Frontend web container
- `docker-compose.yml` - Orchestration configuration

## Quick Start

### Build and Run
```bash
cd docker
docker-compose up
```

Access the application:
- Frontend: http://localhost:8080
- Backend API: http://localhost:3000

### Run in Background
```bash
docker-compose up -d
```

### Stop Containers
```bash
docker-compose down
```

### View Logs
```bash
docker-compose logs -f
```

### Rebuild After Changes
```bash
docker-compose up --build
```

## Container Details

### Backend
- **Base Image:** node:18-alpine
- **Port:** 3000
- **Size:** ~180MB

### Frontend
- **Base Image:** nginx:alpine
- **Port:** 80 (mapped to 8080 on host)
- **Size:** ~43MB

## Useful Commands
```bash
# List running containers
docker-compose ps

# View logs for specific service
docker-compose logs backend
docker-compose logs frontend

# Restart a service
docker-compose restart backend

# Remove all containers and networks
docker-compose down -v
```