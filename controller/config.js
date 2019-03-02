app.config(($routeProvider , $locationProvider)=>{

    $locationProvider.hashPrefix('');
    $routeProvider.when('/',{templateUrl:'views/home.html',controller:'myctrl'})
    .when('/portfolio',{templateUrl:'views/portfolio.html'})
    .when('/contact',{templateUrl:'views/contact.html'})
    

})