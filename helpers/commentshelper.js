var md5 = require('md5');
module.exports ={
    newest: function(){
        //arreglo con los comentarios ms populares
        var comments=[
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
        ];
        return comments;
    }
};