const express = require('express');
const cors = require('cors');
const contactRoutes = require('./src/routes/contact.routes');

const app = express();
const PORT = Number(process.env.PORT) || 4000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:3000';

app.disable('x-powered-by');
app.use(cors({ origin: FRONTEND_ORIGIN }));
app.use(express.json({ limit: '10kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ success: true, service: 'kerman-tajrobe-api' });
});

app.use('/api/contacts', contactRoutes);

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: 'مسیر موردنظر پیدا نشد.'
  });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({
    success: false,
    message: 'خطای داخلی سرور رخ داد.'
  });
});

app.listen(PORT, () => {
  console.log(`Kerman Tajrobe API is running at http://localhost:${PORT}`);
});
