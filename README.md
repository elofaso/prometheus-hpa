# prometheus-hpa

1. Install https://marketplace.digitalocean.com/apps/kubernetes-monitoring-stack

2. Install Prometheus Adapter
```
helm repo add prometheus-community https://prometheus-community.github.io/helm-chart
helm repo update
helm install prometheus-adapter prometheus-community/prometheus-adapter --create-namespace custom-metrics -f prometheus-adapter-values.yaml
```

3. 'kubectl apply -f' each of of the remaining yaml files

4, In DigitalOcean UI set maximum number of nodes under Cluster|Pool|Resources|Pool|Autoscale

5. For load testing, scale deploy/load-generator:
```
kubectl scale --replicas=<n> deploy/load-generator
```

6. View pod scaling details:
```
kubectl describe hpa sample-node-metrics-app-hpa
```
