//exportar funcionalidad
//cargando dependencias importantes de la app
var path = require('path'),
    exphdb=require('express-handlebars'),
    express=require('express'),
    bodyParser=require('body-parser'),
    cookieParser=require('cookie-parser'),
    morgan=require('morgan'),
    methodOveride=require('method-override'),
    errorHandler= require('errorhandler'),
    moment=require('moment'),
    multer=require('multer');

// cargando las rutas de la app
var routes = require('./routes');

module.exports = function(app){
    //pendiente agregar el codigo que configura a app
    //agregando los middlewares a la aplicacion 
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({'extended':true}));
    app.use(bodyParser.json());
    app.use(methodOveride());
    app.use(cookieParser('algun-valor-secreto-aqui'));

    // asignar las rutas a la configuracion
    app = routes(app);
    //configurar las rutas de archivos estaticos 
    //se define la ruta -->  app.use('/public/'
    app.use('/public/',express.static(path.join(__dirname,'../public')));

    //si la app esta en modo desarollo se usara errorHandler
    if(app.get('env') == 'development'){
        app.use(errorHandler());
    }
    return app;
}