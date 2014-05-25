
module.exports= function(app, schema, apiName, sort)
{

var mongoose=require("mongoose");
var utils=require('../../../server/modules/utils');
var express=require("express");
var mongo=require('../../../server/modules/mongo-helper');
mongo.init(app);
 
  
var api=express.Router();
api.post('/', function(req,res)
{
   
   utils.response=res;
   mongo.save( schema,apiName, req.body._id, req.body,
   utils.genericApiHandler
        );
   
    
   
   
});

api.get('/:id', function(req,res)
{
   
   utils.response=res;
    mongo.findById( schema, apiName, req.params.id,
     utils.genericApiHandler
    );
   
   
});

api.get('/', function(req,res)
{
   
   utils.response=res;
    mongo.findAll( schema, apiName,  utils.genericApiHandler,sort
    ); 
  
   
});

app.use('/api/' + apiName, api);
  
};