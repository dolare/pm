'use strict';
//user angular UI router

angular.module('app', ['ui.router','ngResource'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            // route for the home page
            .state('index', {
                url:'/',
                views: {      
                    'header':{
                        templateUrl:'views/header.html'
                    },
                    'content':{
                        templateUrl:'views/table.html',
                        controller:'tableCtrl'
                    },
                    'footer':{
                        templateUrl:'views/footer.html'
                    }
                }

            })  
        $urlRouterProvider.otherwise('/');
    })
;
