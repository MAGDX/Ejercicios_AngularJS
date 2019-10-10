var app = angular.module('angularApp',['ngRoute', 'ngSanitize']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

    this.$onInit = function(){
        console.log('onInit MainCtrl');

        // Check para saber si esta el servicio REST levantado
        let url = 'http://localhost:3000/frutas';

        $http.get(url).then(function(result){
            console.trace('servicio rest funcionando');
        },function(result){
            console.trace('servicio rest no funcionando');
        });
    }
}]);