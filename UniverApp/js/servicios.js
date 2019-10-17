app.controller('serviceController', ['$scope', '$http', '$log', 'servicioConstante', 'rectanguloService',
    function ($scope, $http, $log, servicioConstante, rectanguloService) {
        console.trace('servicecontroller');
        $log.info('serviceController con $log');

        $scope.titulo = 'Servicios ' + servicioConstante.titulo;

        // Ejemplo con los datos iniciales
        $scope.area = rectanguloService.getArea();

        rectanguloService.setAlto(2);
        rectanguloService.setAncho(5);

        // Ejemplo con los datos setteados
        $scope.area2 = rectanguloService.getArea();

        $scope.seguro = {
            nif: "",
            nombre: "",
            ape1: "",
            edad: undefined,
            sexo: "",
            casado: false,
            numHijos: undefined,
            embarazada: false,
            coberturas: {
                oftalmologia: false,
                dental: false,
                fecundacionInVitro: false
            },
            enfermedades: {
                corazon: false,
                estomacal: false,
                rinyones: false,
                alergia: false,
                nombreAlergia: ""
            },
            fechaCreacion: new Date()
        }

        $log.debug("Acabamos de crear el $scope");

        $scope.contanteEscapada = "{{constante}}";
    }
]);