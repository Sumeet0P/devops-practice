# 🚀 Runbook – CICD Monitoring Project

## 📌 Overview
This project consists of:
- Frontend (React + Nginx)
- Backend (Node.js)
- Kubernetes (Deployments, Services, Ingress)
- Monitoring (Prometheus + Grafana)

---

## 🔥 1. Check Application Status

### Check Pods
kubectl get pods -n devops

### Check Services
kubectl get svc -n devops

### Check Ingress
kubectl get ingress -n devops

---

## 🚨 2. If Pod is Crashing

### Get Logs
kubectl logs <pod-name> -n devops

### Describe Pod
kubectl describe pod <pod-name> -n devops

---

## 🌐 3. If App Not Accessible

### Check Ingress Controller
kubectl get pods -n ingress-nginx

### Check Ingress Rules
kubectl describe ingress client-ingress -n devops

### Test Backend Internally
kubectl run test --rm -it --image=busybox -- sh
wget -qO- http://server.devops:5000/api

---

## 🔄 4. Restart Application

kubectl rollout restart deployment client -n devops
kubectl rollout restart deployment server -n devops

---

## 📦 5. Deploy New Version

docker build -t <dockerhub>/client:latest ./app/client
docker push <dockerhub>/client:latest

kubectl rollout restart deployment client -n devops

---

## 📊 6. Monitoring

### Access Grafana
kubectl port-forward svc/monitoring-grafana 3000:80 -n monitoring

#### For password
kubectl get secret monitoring-grafana -n monitoring -o jsonpath="{.data.admin-password}" | base64 --decode

### Access Prometheus
kubectl port-forward svc/monitoring-kube-prometheus-prometheus 9090:9090 -n monitoring

---

## ⚠️ 7. Common Issues

### CrashLoopBackOff
- Check logs
- Check Docker image
- Check nginx config

### 404 / API not working
- Check Ingress rules
- Check service names
- Check paths (/api)

### Metrics not showing
- Check /metrics endpoint
- Check Prometheus annotations

---

## 🧠 Notes
- Ingress handles routing
- Services handle internal communication
- Pods are ephemeral
- Logs + metrics are key to debugging