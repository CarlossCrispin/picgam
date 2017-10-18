module.exports={
    //action Methods
    index: (req,res)=>{
        //res.end(`Se accede al controlador image y se ejecuta el action method 
        //"index" con el siguienteparametro -->${req.params.image_id}`);
        res.render('image');
    },
    create: (req,res)=>{
        res.end(`se accede al controlador image y se ejecuta el action method 
        "/create/""`);
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