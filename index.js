
const express =  require('express');
const cors = require('cors');
const app = express();

require('dotenv').config({path: 'variables.env'});
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const port = 4500;

app.use(cors());

const appRoutes = require('./routes');

app.use('/', appRoutes);

//app.listen( 4500 ,  () => console.log('**corriendo en el port 4500**'));

app.listen(port, () => {
    console.log(`Servidor inicializado en el puerto 4500.  Accede desde la URL http://localhost:4500`);
  });