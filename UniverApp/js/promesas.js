app.controller('promesasController', ['$scope', '$q', '$timeout', function ($scope, $q, $timeout) {
    console.trace( 'Promesas controller' );
    
    $self = this;

    $scope.res1 = "Procesando...";
    $scope.res2 = "Procesando...";
    $scope.resTotal = "Procesando...";

    /**
     * Función Asincrona que retorna una promesa
     * Usamos $q para el asincronismo, puesto que Javascript es sincrono
     * 
     * @param numero1: entero a sumar
     * @param numero2: entero para sumar
     * @param fallo: boolean para hacer que fucione o falle la promesa
     * @param espera: timepo en milisegundos para que termine la funcion
     * 
     */

    this.sumar = function(num1, num2, fallo, espera){
        console.trace('sumar');
        var q = $q.defer();

        $timeout(function(){
            if(!fallo){
                q.resolve(num1 + num2);
            }else{
                q.reject('Lo sentimos pero fallo');
            }
        }, espera)

        return q.promise;
    }

    this.p1 = $self.sumar(5, 5, false, 2000);

    this.p1.then(function (result){
        console.debug('promesa cumplida, resultado %o', result);
        $scope.res1 = result;
    }, function(result){
        console.debug('promesa rechazada, resultado %o', result);
        $scope.res1 = result;
    });

    this.p2 = $self.sumar(8, 5, false, 5000);

    this.p2.then(function (result){
        console.debug('promesa cumplida, resultado %o', result);
        $scope.res2 = result;
    }, function(result){
        console.debug('promesa rechazada, resultado %o', result);
        $scope.res2 = result;
    });

    // vamos a esperar a que se cumplan las dos promesas para sumar total
    $q.all( [$self.p1 , $self.p2] ).then( function(){
        console.debug("Todas las promesas completadas");
        $scope.resTotal = $scope.res1 + $scope.res2;
    }).catch(function (result) {
        console.debug("Fallo en alguna promesa");
    });
}]);