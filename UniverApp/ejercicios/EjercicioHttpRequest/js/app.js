(function () {

    var app = angular.module('ejemplosApp', []);

    app.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.profesores = {};

        // Peticion HTTP Request mediante AJAX, es asincrona
        $http.get('json/profesores.json').success(function(data){
            console.trace('Response OK %o', data);
            $scope.profesores = data.profesores;
        });
    }]);
})();