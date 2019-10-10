var app = angular.module('angularApp',['ngRoute', 'ngSanitize']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

    this.$onInit = function(){
        console.log('onInit MainCtrl');

        // Check para saber si esta el servicio REST levantado
        let url = 'http://localhost:3000/frutas';

        /*$scope.alerta = {
            "texto" : "<strong>Ongi etorri!</strong>",
            "clase" : "info"
        }*/

        $http.get(url).then(function(result){
            console.trace('servicio rest funcionando');
            /*$scope.alerta = {
                "texto" : "<strong>FUNCIONA!</strong> El Servicio REST esta operativo",
                "clase" : "success"
            }*/
        },function(result){
            console.trace('servicio rest no funcionando');
            $scope.alerta = {
                "texto" : "<strong>ERROR!</strong> El Servicio REST NO esta operativo",
                "clase" : "danger"
            }
        });
    }
}]);

/*app.controller('frutasController', ['$scope','$http', function($scope,$http){

    this.$onInit = function(){
        console.log('onInit frutasController');
    }
}]);*/