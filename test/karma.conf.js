module.exports = function (config) {
    config.set({
        basePath: '',
        
        files: [
            '../bower_components/angular/angular.js',
            '../bower_components/jquery/dist/jquery.js',
            '../bower_components/bootstrap/dist/js/bootstrap.js',
            '../bower_components/angular-cookies/angular-cookies.js',
            '../bower_components/angular-route/angular-route.js',
            '../bower_components/angular-mocks/angular-mocks.js',
            
            '../public_html/controllers/*.js',
            '../public_html/factories/*.js',
            '../public_html/filters/*.js',
            '../public_html/services/*.js',
            '../public_html/*.js',
            
            'specs/*.js'
        ],
        
        exclude: [
        ],
        
        autoWatch: true,
        
        port: 8080,
        
        colors: true,
        
        logLevel: config.LOG_INFO,
        
        reporters: [
            'progress'
        ],
        
        frameworks: [
            'jasmine'
        ],
        
        browsers: [
            'chrome'
        ],
    });
};
