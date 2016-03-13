angular.module('app')
    .controller('tableCtrl',['$scope','$resource',function($scope,$resource){
        $scope.select = function(c1){
            $scope.na1 = _.clone(c1);
        }

        var getC1 = function(){
            $resource('/api/c1').query(function(c1){
                $scope.nc1 = c1;
            }
        }

        getC1();

        
                    


    }]);
