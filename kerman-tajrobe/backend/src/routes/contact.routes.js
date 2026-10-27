const express = require('express');
const contacts = require('../data/contacts');

const router = express.Router();

router.get('/', (_req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({
    success: true,
    count: contacts.length,
    data: contacts
  });
});

module.exports = router;
