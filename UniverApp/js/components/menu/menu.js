angular.
module('angularApp'). // Nombre App
component('componenteMenu', { // nombre componente => para usarlo <componente-menu></componente-menu>
    templateUrl: './js/components/menu/template.html',
    controller: function MenuController($scope) {
        console.trace('Menu Controller');

        $scope.rutas = [{
                "nombre": "Inicio",
                "url": "#!/",
                "active": true
            },
            {
                "nombre": "Profesores",
                "url": "#!/profesores",
                "active": false
            },
            {
                "nombre": "Alumno",
                "url": "#!/alumnos",
                "active": false
            },
            {
                "nombre": "Creditos",
                "url": "#!/creditos",
                "active": false
            }
        ];

        // Funciones
        this.$onInit = function () {
            console.trace('MenuController Init');
        }

        $scope.cambiarActivo = function (ruta) {
            console.trace('click.cambiaractivo');
            $scope.rutas.forEach(element => {
                element.active = false;
            });
            ruta.active = true;
        }
    } // End Controllador
});