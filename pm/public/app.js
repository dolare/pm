//user angular UI router

angular.module('app',['ui.router','ngResource'])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
            //router for the home page
            .state('index'),{
                url:'/',
                view:{
                    'header':{
                        templateUrl:'header.html'
                     },
                     'content':{
                        templateUrl:'table.html',
                        controller:'tableCtrl'
                    },
                     'footer':{
                         templateUrl:'footer.html'
                    }
                }
           });
        
        $urlRouterProvider.otherwise('/');
    });
