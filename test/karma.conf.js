module.exports = function (config) {
    config.set({
        basePath: './',
        
        files: [
            '../bower_components/angular/angular.js',
            '../bower_components/angular-mocks/angular-mocks.js',
            '../bower_components/angular-route/angular-route.js',
            '../bower_components/angular-cookies/angular-cookies.js',
            
            '../public_html/app.js',
            '../public_html/services/UserService.js',
            '../public_html/controllers/*.js',
            '../public_html/factories/*.js',
            '../public_html/filters/*.js',
            
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
            'Chrome'
        ],
    });
};
