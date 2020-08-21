
const express =  require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const appRoutes = require('./routes');

app.use('/', appRoutes);

app.listen(process.env.PORT || 4500, () => {
  console.log(`Servidor inicializado en el puerto 4500.  Accede desde la URL http://localhost:4500`);
});