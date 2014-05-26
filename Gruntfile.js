module.exports=function(grunt)
{
  
  grunt.initConfig({
     
    cssmin: {
  combine: {
    files: {
      'public/site-min.css': ['public/vendor/toastr/toastr.css',
      'public/site.css']
    }
  }
},
    
  uglify: {
    my_target: {
      files: {
        'public/scripts-min.js': [
    'public/vendor/angular-route/angular-route.js',
'public/vendor/angular-resource/angular-resource.js',
 'public/vendor/angular-sanitize/angular-sanitize.js',
        'public/app/app.js',
        'public/app/routes.js',
        'public/app/news.service.js',
        'public/app/main.controller.js'
        
        ]
      }
    }
  }
});

 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('min',['uglify','cssmin']);
 

};