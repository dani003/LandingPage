
var express = require('express')
var bodyparser = express()
var path = require('path')
var app=express()

app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('fonts'));
app.use(express.static('inc'));
app.use(express.static('node_modules'));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'))
})


app.listen(5000, function(){
  console.log('Example app listening on port 5000!');
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');

const app = express()

const email = 'domainyourenergy@gmail.com'
const emailPassword = process.env.EMAIL_PASSWORD

app.use(express.static('./'))

app.use(logger('dev'))
app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS")
  next();
});
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", ( req, res ) => {
  res.sendFile(__dirname + `/index.html`);
});

app.post('/contacto', ( req, res, next ) => {
  let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: email,
              pass: emailPassword
          }
      });
  let mailOptions = {
     from: '"Pagina" <domainyourenergy@gmail.com>', // sender address
     to: email, // list of receivers
     subject: 'Formulario Contacto', // Subject line
     html: `<b>Nombre: ${req.body.contactName}</b><br>
            <b>Correo: ${req.body.contactEmail}</b><br>
            <p>Mensaje: ${req.body.contactMessage}</p>` // html body
   };
   transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
             console.log(error);
             return next({status: 200, message: 'Algo salió mal. Por favor intente otra vez.'})
         }
         console.log('Message %s sent: %s', info.messageId, info.response);
            return res.send('OK')
         });
})

//An error handling middleware
app.use( ( err, req, res, next ) => {
    if( err ) {
      console.log('Error middle', err);
      return res.status(err.status).json({ error: err.message })
    }
});

app.listen(3002, () => {
  console.log('Example app listening on port 3002!');
});
