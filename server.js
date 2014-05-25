var express=require("express");
var app=express();
var http=require("http");
var webconfig=require("./server/modules/web-config");
webconfig.configureMiddleware(app,__dirname);

require('./server/routes/partials')(app);
require('./server/routes/api/news')(app);

var router=express.Router();
router.get('*',function(req,res)
{
    res.render('main');
});
app.use('*', router);


http.createServer(app).listen(app.settings.port, function(){
   console.log('listening on port %s',app.settings.port); 
});
