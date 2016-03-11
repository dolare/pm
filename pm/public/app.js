(function(global) {
        angular.module('app', [])
            .controller('c1', ['$scope', '$http',
                    function($scope, $http) {
                        var getC1 = function() {
                            return $http.get('/api/c1').then(function(data) {
                                $scope.c1s = data.data;
                            });
                        }
                        getC1();

                        $scope.addC1 = function(c1) {
                            $http.post('/api/c1', c1).then(function(data) {
                                $scope.c1s.push(data.data);
                            });
                        };
                        $scope.delC1 = function(c1) {
                            $http.delete('/api/c1/' + c1._id).
                            success(function(){
                                $scope.c1s = _.without($scope.c1s,c1);
                            });
                        };

                        $scope.update = function(c1){
                            $http.put('/api/c1/'+c1._id,c1)
                            .then(function(data){
                                console.log(data.data);
                            })

                        }
                       $scope.select = function(c1){
                            $scope.nc1 = _.clone(c1);

                       }
                                             
                    }]);

            })(this);
