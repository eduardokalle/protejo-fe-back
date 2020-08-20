
var express = require('express');
const parser = require('body-parser')

var rou = express();

require('dotenv').config({path: 'variables.env'});
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

rou.use(parser.json()) 
rou.use(parser.urlencoded({ extended: true })) 

rou.get('/', (req , res)=> {
    res.send('**Bienvenido al server te protejo**');
})

rou.post('/sendMail', (req , res)=> {
     
    const  { nombre , apellido , tel , mail , mensaje } = req.body;
    
    res.end("Ok");

        const msg = {
            to: 'info@teprotejoenlinea.com',
            from: 'info@teprotejoenlinea.com', 
            subject: 'Correo de prueba Contacto SendGrid',
            /*template_id:'d-5721f1f9051347b784fe9a1913e03249',

            dynamic_template_data: {
                nombre: nombre,
                apellido: apellido,
                tel: tel,
                mail: mail,
                mensaje: mensaje
            },
            */
            //text: 'Correo de prueba Contacto SendGrid',
            //html: `<strong> ${req.body.nombre}  ${req.body.apellido} <strong/>`
             html: 
               `
                <html>
                <head>
                    <title>envio de contacto</title>
                </head>
                    <body>   
                        <br><br>   
                        <br>
                        <div style="font-family: inherit">
                            Mesaje eviado desde teprotejo.com
                            <br>   
                            <br>
                            Hola 
                            <br>   
                            <br> 
                            La persona ${req.body.nombre}   ${req.body.apellido} se ha comunicado con protejo con los siguientes datos:
                            <br>
                            <br>
                            Numero telefonico : ${req.body.tel}
                            Email  :  ${req.body.mail}
                            <br>
                            <br>
                            y nos informa lo siguiente :<br>
                            ${req.body.mensaje}.
                            <br>
                            <br>
                            Por favor contactarlo
                            Gracias.
                        <br><br>
                        </div>
                   </body>
                </html>
                
         `  
        };

        sgMail.send(msg).then(() => {
                    console.log('Message send')
                }).catch((error) => {
                    console.log(error.response.body)
                })

})

module.exports = rou;