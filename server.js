//cargando librerias
const express = require('express');
//cargando path
const path = require('path');
//cargar un configurador)
const config = require('./server/configure');

//crear una instancia de la app con express
var app = express();

//Estableciendo unas variables de entorno
//ser variable para toda la pagina
app.set('port',process.env.PORT ||3000);
app.set('ip', process.env.IP ||"0.0.0.0");

//configuración especial
//pathidentifica la plataforma
//dirname cambio de mauina
app.set('views', path.join(__dirname, 'views'));

//aplicando configuraciones generales
app = config(app);

//creando ruta de prueba
//expresion lamda== Function(){}
app.get('/',(req,res)=>{
    res.end('Hola Pila Completa 2, Viva JavaScript')
});

//Consultando las variables de entorno
//de la aplicacion

const IP = app.get('ip');
const PORT = app.get('port');



//iniciando el servidor
app.listen(PORT,IP,(err)=>{
    if(err){
        console.log(`>Error en server.js : ${err}`);
    }
    console.log(`>Server Escuchando @ http://${IP}:${PORT} `);
})
