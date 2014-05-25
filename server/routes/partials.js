var express=require("express");
module.exports= function(app)
{
  
var partials=express.Router();
partials.get('*', function(req,res)
{
  
  res.render('partials' + req.params[0]);
});
app.use('/partials', partials);
  
};