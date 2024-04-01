const express = require('express');
const router = express.Router();

router.get('/clientes', (req, res) => {
  res.sendFile('./static/clientes.html', {
    root: __dirname
  });
});

router.get('/productos', (req, res) => {
  res.sendFile('./static/productos.html', {
    root: __dirname
  });
});

router.get('/', (req, res) => {
  res.sendFile('./static/index.html', {
    root: __dirname
  });
});

module.exports = router;