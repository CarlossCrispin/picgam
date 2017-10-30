//Importar el Helper de sidebar
var sidebar = require('../helpers/sidebar');
//un controlador viene haciendo
//las veces de un objeto
module.exports = {
    //action Methods
    index:(req,res)=>{
        //res.send('--> Seejecuta el Metodo Index del Controlador Home');
        //al grupo de datos que quiere una vista para dibujarse correctamente se llama VieModel en el modelo MVC
        //crando un ViewModel de prueba
        var viewModel = {
            images :[
                {
                    uniqueId:1,
                    title:"Sample Image 1",
                    description:"awesome description",
                    filename:"1.jpg",
                    views:Math.floor(Math.random()*100),
                    likes: Math.floor(Math.random()*50),
                    timestamp :Date.now()
                },
                {
                    uniqueId:2,
                    title:"Sample Image 1",
                    description:"awesome description",
                    filename:"1.jpg",
                    views:Math.floor(Math.random()*100),
                    likes: Math.floor(Math.random()*50),
                    timestamp :Date.now()
                },
                {
                    uniqueId:3,
                    title:"Sample Image 1",
                    description:"awesome description",
                    filename:"1.jpg",
                    views:Math.floor(Math.random()*100),
                    likes: Math.floor(Math.random()*50),
                    timestamp :Date.now()
                },
                {
                    uniqueId:4,
                    title:"Sample Image 1",
                    description:"awesome description",
                    filename:"1.jpg",
                    views:Math.floor(Math.random()*100),
                    likes: Math.floor(Math.random()*50),
                    timestamp :Date.now()
                }
            ]
        };
        //invocando alhelper de sidebar y posteriormente mandando a renderizar la vista
        sidebar(viewModel,(vm)=>{

            res.render('index',vm);
        });
       
    }
};