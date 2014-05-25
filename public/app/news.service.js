angular.module(mainModule).service('newsSvc',[
  '$resource', function($resource)
  {
      var NewsItem= $resource('/api/news');
      
     this.getAll=  function getAll(){
        return NewsItem.query();
        
      };
      
       
      
  }
  ]);