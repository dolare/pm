angular.module('app')
    .controller('tableCtrl',['$scope','$resource','c1DataService',function($scope,$resource,c1DataService){
        
        var index ;
        $scope.updateShow = false;
        $scope.duplicated = false;

        $scope.select = function(c1){

           //$scope.nc1 = _.clone(c1);
           $scope.nc1 = c1;
           $scope.updateShow = true;

        }

        var getC1 = function(){
            c1DataService.query(function(c1){
                $scope.c1s = c1;
            });

        };

        $scope.addC1 = function(c1){
            //console.log(c1);
            for (var i = $scope.c1s.length - 1; i >= 0; i--) {
                if($scope.c1s[i].email == c1.email){
                    alert("duplicated email!!!");
                    return;
                };
            };
            c1DataService.create(c1).$promise.then(function(res){
                console.log(res);
                $scope.c1s.push(res);
                //$scope.nc1 = null;
           });        
       };


        $scope.putC1 = function(c1){  
            c1DataService.update({id:c1._id},c1).$promise.then(function(){
                //console.log(res);
            });
            $scope.updateShow = false;
            $scope.nc1 = null;

        }

        $scope.delC1 = function(c1){

            c1DataService.remove({id:c1._id}).$promise.then(function(){
                $scope.c1s = _.without($scope.c1s,c1);
            })
        };
        getC1();

        
                    


    }]);
