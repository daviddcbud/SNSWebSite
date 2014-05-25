

(function(mod)
{
  var utils=require('../../server/modules/utils');
  
  var mongoose = require('mongoose');
  var db;

  mod.init =function(app)
  {
      var connstring= app.get('mongoConnection');
      mongoose.connect(connstring);
      db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', function callback () {
         console.log('mongo is working');
      });
  };
  
  mod.save=function(schema, modelName, id, data, callback)
  {
      mod.findById(schema,modelName,id, function(err, item)
      {
        if(err) callback('Error getting record to update');
        utils.copy(data,item);  //copy data props into item
        item.save(function(err,res)
        {
          if(err) throw err;
          callback(null,res);
        }
        );
      }
      );
  };
  
  mod.findAll= function(schema, modelName, callback, sort){
     var Model= mongoose.model(modelName, schema);
      
     Model.find().sort(sort).find(callback);

  };
  
  mod.findById= function(schema, modelName,  id,callback){
     var Model= mongoose.model(modelName, schema);
      
     Model.findById(id, callback);
  };
  
  
}
)(module.exports);
