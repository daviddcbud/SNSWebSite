var express=require("express");
var path=require("path");
var errorhandler=require("errorhandler");
var bodyparser=require("body-parser");
var favicon=require('serve-favicon');
var logger=require('morgan');
module.exports.configureMiddleware= function(app, dirName)
{
   var port=process.env.PORT || 3000;
   var env=process.env.NODE_ENV= process.env.NODE_ENV || 'development'
    
    var dbConnstring='mongodb://test:testdev@ds033067.mongolab.com:33067/devtesting'
    app.set('mongoConnection', dbConnstring);
    app.set('port', port);
    var publicdir=path.join(dirName,"public");
    app.set('views', path.join(dirName, 'server/views'));
    app.set('view engine', 'jade');  
    app.use(favicon(path.join(publicdir,'favicon.ico')));
    var loggingmode= env=='development' ? 'dev' : '';
    app.use(logger(loggingmode));
    app.use(bodyparser());
    app.use(require('stylus').middleware(publicdir));
    app.use(express.static(publicdir));
    if ('development' == env) {
        console.log('development mode, using errorhandler middleware');
        app.use(errorhandler());
    }
    console.log('configured middleware');

};