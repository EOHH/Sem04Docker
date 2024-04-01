const express = require('express');
const app = express();
const routes = require('./rutas.js');
const port = 12000;

app.use(express.static(`${__dirname}/static`));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});