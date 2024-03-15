# prometheus-hpa

Install https://marketplace.digitalocean.com/apps/kubernetes-monitoring-stack

Install Prometheus Adapter
$ helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
$ helm repo update
$ helm install prometheus-adapter prometheus-community/prometheus-adapter --create-namespace custom-metrics -f prometheus-adapter-values.yaml

'kubectl apply -f' each of of the remaining yaml files

In DigitalOcean UI set maximum number of nodes under Cluster|Pool|Resources|Pool|Autoscale

For load testing, scale deploy/load-generator
$ kubectl scale --replicas=<n> deploy/load-generator

View pod scaling details
$ kubectl describe hpa sample-node-metrics-app-hpa
