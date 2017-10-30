//exportar funcionalidad
//cargando dependencias importantes de la app
var path = require('path'),
    exphdb=require('express-handlebars'),
    express=require('express'),
    bodyParser=require('body-parser'),
    cookieParser=require('cookie-parser'),
    morgan=require('morgan'),
    methodOverride=require('method-override'),
    errorHandler= require('errorhandler'),
    moment=require('moment'),
    multer=require('multer');

// cargando las rutas de la app
var routes = require('./routes');

module.exports = function(app){

    //configurando el Motor de plantillas
    //Handlerbars Template Engine
    //1.cargar y configurar el motor de plantillas en la app express
    //handlebar
    // if disfrasado para decidir con cual main inicia
    var mainLayout = app.get('depmode') === 'local' ? "main-local" :"main";
    console.log(`>ESTRATEGIA: ${app.get('depmode')}`);
    console.log(`>tipo layout: ${mainLayout}`);
    app.engine('.hbs', exphdb.create({
        defaultLayout : mainLayout,//pantilla por defecto
        extname :'.hbs',//Extencion de las vista
        layoustDir: path.join(app.get('views'),'layouts'),
        partialsDir: [path.join(app.get('views'),'partials')],
        helpers: {
            timeago: function(timestamp){
                return moment(timestamp).startOf('minutes').fromNow();
            }
        }
    }).engine);
    //2. establecer a handlerbar como el motoro de plantillas de trabajo
    app.set('view engine','.hbs');
    //pendiente agregar el codigo que configura a app
    //agregando los middlewares a la aplicacion 
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({'extended':true}));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser('algun-valor-secreto-aqui'));

    //habilitando a la aplicacion para recibir archivos desde formularios
    //mediante la encriptacion mediante multipart/from-data
    app.use(multer({
        dest: path.join(__dirname,'../public/upload/temp')
    }).any());


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