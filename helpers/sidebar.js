var StatsHelper = require('./statshelper'),
    ImagesHelper= require('./imageshelper'),
    CommentsHelper= require('./commentshelper');
module.exports = function(vm,cb){
    vm.sidebar ={
        stats: StatsHelper(),
        popular : ImagesHelper.popular(),
        comments: CommentsHelper.newest()
    };
    //Mandamos  a Ejecutiar al Cb  oasandole como parametro el vm cob los datos del didebar
    cb(vm);
};
