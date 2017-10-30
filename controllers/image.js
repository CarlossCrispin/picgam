var md5 = require('md5');
var fs =require('fs'),
    path = require('path'),
    sidebar = require('../helpers/sidebar');
module.exports={
    //action Methods
    index: (req,res)=>{
        //res.end(`Se accede al controlador image y se ejecuta el action method 
        //"index" con el siguienteparametro -->${req.params.image_id}`);
        var viewModel={
            image:{
                uniqueId:1,
                title:"Sample Image 1",
                description:"awesome description",
                filename:"1.jpg",
                views:Math.floor(Math.random()*100),
                likes: Math.floor(Math.random()*50),
                timestamp :Date.now()
            },
            comments:[
                {
                    image_id:1,
                    email:'carlos.crispin.cc@gmail.com',
                    name:"CarlosCrispin",
                    gravatar: md5("carlos.crispin.cc@gmail.com"),
                    comment: " bla bla bla",
                    timestamp: Date.now()
                },
                {
                    image_id:1,
                    email:'carlos.crispin.cc@gmail.com',
                    name:"CarlosCrispin",
                    gravatar: md5("carlos.crispin.cc@gmail.com"),
                    comment: "orale pues",
                    timestamp: Date.now()
                },
                {
                    image_id:1,
                    email:'carlos.crispin.cc@gmail.com',
                    name:"CarlosCrispin",
                    gravatar: md5("carlos.crispin.cc@gmail.com"),
                    comment: " ultimo",
                    timestamp: Date.now()
                }
            ]
        };
        //invocando alhelper de sidebar y posteriormente mandando a renderizar la vista
        sidebar(viewModel,(vm)=>{
            
            res.render('index',vm);
        });
                   
        res.render('image', viewModel);
    },
    create: (req,res)=>{
        // res.end(`se accede al controlador image y se ejecuta el action method 
        // "/create/""`);

        //creando al funcion que salva la imagen en disco
        var saveImage = ()=>{
            //crear diccionario de caracteres validos
            var dictionary =
            "qwertyuiopasdfghjklñzxcvbnm1234567890";
            var imgUrl="";
            //armando el nombre tomando 6 caracteres del dictionary
            for (var index = 0; index<6; index++) {
                imgUrl += dictionary.charAt(
                    Math.floor(Math.random() *
                     dictionary.length)
                    
                );
                
            }
            //obteniendo al ruta  del archivo cargado por el usuario
            var tempPath = req.files[0].path;
            //averigua la extencion del archivo cargado
            var ext = path.extname(req.files[0].originalname).toLocaleLowerCase();
            //crear la ruta del destino final de la img cargada
            var targetPath = path.resolve("./public/upload/"+imgUrl + ext);
            // agrego un filtro de extenciones
            if(ext == ".png" || ext == ".jpg" || ext ==".gif" || ext == ".jpeg"){
                //la imgen extencion valida guardarla en la ruta
                fs.rename(tempPath,targetPath,(err)=>{
                    if(err){
                        console.log("-->Erro el guardar imagen...")
                        throw err;
                    }
                    res.redirect(`/images/index/${imgUrl}`)
                });
            }else{
                //se detencta archivo invalido
                fs.unlink(tempPath, err=>{
                    if(err){
                        console.log("--> Error al borrar archivo  invalido");
                        throw err;
                    }
                   res.status(500).json({
                       error:"solo se permite cargar archivos validos."
                   })
                });
            }
        };
        //ejecutando la ejecucion de salvar img
        saveImage();
    },
    like: (req,res)=>{
        res.end(`se accede al controlador image y se ejecuta el action method 
        "like" con el siguiente parametro -->${req.params.image_id}`);
    },
    comment: (req,res)=>{
        res.end(`se accede al controlador image y se ejecuta el action method 
        "comment" con el siguiente parametro -->${req.params.image_id}`);
    }
}