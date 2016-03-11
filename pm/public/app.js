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
                        $scope.cls.push(data.data);
                    });
                }
            }
    ]);

})(this);
