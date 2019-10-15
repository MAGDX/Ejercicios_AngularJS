angular.
module('angularApp'). // Nombre App
component('componenteMenu', { // nombre componente => para usarlo <componente-menu></componente-menu>
    templateUrl: './js/components/menu/template.html',
    controller: function MenuController($scope) {
        console.trace('Menu Controller');

        $scope.rutas = [{
                "nombre": "Inicio",
                "url": "#!/",
                "active": true,
                "icon": "fas fa-home"
            },
            {
                "nombre": "Frutas",
                "url": "#!/frutas",
                "active": false,
                "icon": "fab fa-apple"
            },
            {
                "nombre": "Componentes",
                "url": "#!/componentes",
                "active": false,
                "icon": "fas fa-window-restore"
            },
            {
                "nombre": "Programación Funcional",
                "url": "#!/programacion-funcional",
                "active": false,
                "icon": "fas fa-laptop-code"
            },
            {
                "nombre": "Promesas",
                "url": "#!/promesas",
                "active": false,
                "icon": "fas fa-pray"
            },
            {
                "nombre": "Servicios",
                "url": "#!/servicios",
                "active": false,
                "icon": "fas fa-concierge-bell"
            },
            {
                "nombre": "CRUD",
                "url": "#!/crud",
                "active": false,
                "icon": "fas fa-hand-middle-finger"
            },
            {
                "nombre": "Creditos",
                "url": "#!/creditos",
                "active": false,
                "icon": "fab fa-creative-commons"
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