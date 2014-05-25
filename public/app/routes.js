
angular.module(mainModule).config(['$routeProvider','$locationProvider',
function($routeProvider, $locationProvider)
{
  $locationProvider.html5Mode(true);
  
  $routeProvider.when('/', {templateUrl:'/partials/index', controller:'MainCtrl'}).
  when('/contact', {templateUrl:'/partials/contact'});
  
  
  
}
]);