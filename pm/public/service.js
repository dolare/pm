angular.module('app').factory("c1DataService",["$resource", function($resource){

    var baseUrl = "http://52.89.83.153:7000/api/c1";
    return $resource("http://52.89.83.153:7000/api/c1",{},{
        query: {method: "GET", isArray: true },
        create: {method: "POST"},
        get: {method: "GET", url: baseUrl + "/:id"},
        remove: {method: "DELETE", url: baseUrl + "/:id"},
        update: {method: "PUT", url: baseUrl + "/:id"}
    })
}]);