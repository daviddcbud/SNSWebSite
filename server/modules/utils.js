

(function(module)
{
var underscore=require("underscore");

module.exports.copy =function(src, destination)
{
  underscore.extend(destination, src);
};


module.exports.response={};
module.exports.genericApiHandler= function(err, data)
{
    if(err)throw err;
    module.exports.response.send(data);
}
})(module);