var express = require('express'),
    router = express.Router();
//cargar controladores

var homeController =require('../controllers/home'),
     imageController =require('../controllers/image');
//exportando modules
module.exports = function(app){
    ////tod:agregar Rutas
    // a la aplicacion
    //contenedor de rutas
    //router--> verbo---> que ejecutar
    //:image --> es un parametro que funciona para elegir el acction method 
    router.get('/',homeController.index);
    //shift + alt mas hacia abajo
    router.get('/index',homeController.index);
    router.get('/images/index/:image_id',
    imageController.index);
    router.post('/images/create',imageController.create);
    router.post('/images/like/:image_id',
    imageController.like);
    router.post('/images/comment/:image_id',
    imageController.comment);
    app.use(router);
    return app;
}