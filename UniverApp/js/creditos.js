app.controller(
    'creditosCtrl', // Nombre del controlador
    function ($scope) { // Programacion del controlador
        
        // Variables del modelo
        $scope.creditos = {
            autor: "Arkaitz Marcos",
            bio: "Saludos, mi nombre es Arkaitz Marcos, y este es un proyecto de AngularJS ideado, planificado, diseñado y desarrollado por mi en colaboracion con varios compañeros tras una ardua formación en la tecnología en cuestión.",
            edad: 28,
            imagen: "./img/amg.jpg"
        }
    }
);// End profesorCtrl