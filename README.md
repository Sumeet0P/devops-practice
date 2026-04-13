# devops-practice

 command for grafana password: 
- kubectl get secret monitoring-grafana -n monitoring -o jsonpath="{.data.admin-password}" | base64 --decode

# 🚀 DevOps CI/CD Monitoring Project

A production-style full-stack application deployed on Kubernetes with CI/CD, observability, and clean architecture.

---

## 📌 Overview

This project demonstrates a complete DevOps workflow:

* Containerized full-stack application (Frontend + Backend)
* Kubernetes-based deployment
* Ingress-based routing (no port-forward hacks)
* CI/CD pipeline (GitLab)
* Monitoring with Prometheus & Grafana

---

## 🧱 Architecture

```
Browser
   ↓
Ingress (NGINX)
   ├── /       → Frontend Service (client)
   └── /api    → Backend Service (server)
                 ↓
               Pods
```

---

## ⚙️ Tech Stack

### Application

* Frontend: React (Vite) + Nginx
* Backend: Node.js (Express)

### DevOps

* Docker
* Kubernetes (Docker Desktop)
* Ingress (NGINX)

### CI/CD

* GitLab CI/CD
* Docker Hub (image registry)

### Monitoring

* Prometheus
* Grafana

---

## 📁 Project Structure

```
cicd-monitoring/
│
├── app/
│   ├── client/        # Frontend (React + Nginx)
│   └── server/        # Backend (Node.js API)
│
├── k8s/
│   ├── client-k8s/
│   ├── server-k8s/
│   └── ingress/
│
├── .gitlab-ci.yml     # CI/CD pipeline
├── docker-compose.yml # Local development
├── RUNBOOK.md         # Operational guide
└── README.md
```

---

## 🚀 Features

* 🔄 Automated Docker build & push via CI/CD
* ☸️ Kubernetes Deployments & Services
* 🌐 Ingress-based routing (clean URLs)
* 📊 Monitoring with Prometheus & Grafana
* 📦 Multi-stage Docker builds
* 🔐 Environment separation (dev vs cluster)

---

## 🐳 Running Locally (Docker)

```bash
docker-compose up --build
```

Access:

```
http://localhost:5173
```

---

## ☸️ Kubernetes Deployment

Apply resources:

```bash
kubectl apply -f k8s/
```

---

## 🌐 Access via Ingress

```
http://localhost
```

Routes:

* `/` → Frontend
* `/api` → Backend

---

## 🔄 CI/CD Pipeline

Pipeline stages:

1. Build Docker images
2. Push to Docker Hub
3. Deploy to Kubernetes

Trigger:

```bash
git push
```

---

## 📊 Monitoring

### Access Grafana

```bash
kubectl port-forward svc/monitoring-grafana 3000:80 -n monitoring
```

```
http://localhost:3000
```

## For Password Run This Command:
```
kubectl get secret monitoring-grafana -n monitoring -o jsonpath="{.data.admin-password}" | base64 --decode
```

### Metrics

* Pod CPU & Memory
* Request count
* Request latency
* System health

---

## 🧠 Key Learnings

* Kubernetes networking (Service, DNS, Ingress)
* Difference between container, pod, and service
* CI/CD pipeline design
* Observability (metrics vs logs)
* Reverse proxy vs ingress routing
* Debugging CrashLoopBackOff

---

## ⚠️ Common Issues

* **CrashLoopBackOff**
  → Check logs & container config

* **API not reachable**
  → Verify Ingress rules & service names

* **Metrics not visible**
  → Check `/metrics` endpoint & annotations

---

## 📌 Future Improvements

* Helm charts for deployment
* AWS EKS migration
* HTTPS with TLS
* Alerting (Prometheus Alertmanager)
* Horizontal Pod Autoscaling (HPA)

---

## 👨‍💻 Author

Sumeet

---

## ⭐ If you like this project

Give it a star and build your own version 🚀
