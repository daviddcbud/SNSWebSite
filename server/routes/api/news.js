
module.exports= function(app)
{
var mongoose=require("mongoose");


var apiName='news';
var schema = mongoose.Schema({
    header: String,
    text : String,
    displayOrder: Number
})

var sort= {displayOrder:0};
var generic=require('../../../server/routes/api/genericApi')(app,schema,apiName,sort);
 
  
};