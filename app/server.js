const express = require('express');
const client = require('prom-client');

const app = express();
const port = 3000;

// Create a registry to register the metrics
const register = new client.Registry();

// Add a default label which is added to all metrics
client.collectDefaultMetrics({ register });

// Define a custom metric
const httpRequestsTotal = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method'],
  registers: [register],
});

// Middleware to count requests
app.use((req, res, next) => {
  httpRequestsTotal.inc({ method: req.method });
  next();
});

// Endpoint to fetch metrics
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
