require('dotenv').config();
const express = require('express');
const login = require('./controlador/login.js');
const { enviaEmail } = require('./controlador/email.js');

const app = express();

app.use(express.json());

app.post('/login', login);
app.post('/send', enviaEmail);

app.listen(process.env.PORT, () => {
    console.log('Servidor ON. ' + process.env.PORT);
});