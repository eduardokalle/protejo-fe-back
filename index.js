
const express =  require('express');
const cors = require('cors');
const app = express();

const port = 4500;

app.use(cors());

const appRoutes = require('./routes');

app.use('/', appRoutes);

app.listen(port, () => {
    console.log(`Servidor inicializado en el puerto 4500.  Accede desde la URL http://localhost:4500`);
  });