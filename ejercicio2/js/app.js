/* javascript para nuestra app*/

var app = angular.module(
    'profesorApp', // Nombre de la App
    [] // Para inyectar librerias
);

/*Controladores*/
app.controller(
    'profesorCtrl', // Nombre del controlador
    function ($scope) { // Programacion del controlador
        
        // Variables del modelo
        $scope.profesor = {
            nombre: "Santos Puto Amo",
            bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
            edad: 67,
            imagen: "images/juancarlos.jpg"
        }
        $scope.editando = {}

        // Funciones
        $scope.editar = function(){
            angular.copy($scope.profesor, $scope.editando);
        }

        $scope.guardar = function(){
            angular.copy($scope.editando, $scope.profesor);
        }

        $scope.cancelar = function(){
            $scope.editando={};
        }
    }
);// End profesorCtrl

app.controller(
    'videoCtrl', // Nombre del controlador
    function () { // Programacion del controlador

        //Variables del modelo
        this.video = {
            id: 3,
            nombre: "Exit Eden - Skyfall - Adele Cover",
            codigo: "Enu3Oy6_L-I",
            cateogoria: {
                id: 3,
                nombre: "musica"
            },
            usuario: {
                id: 23,
                nombre: "Ramoncin"
            },
            likes: 5,
            bio: "Exit Eden – Rhapsodies in Black Four musicians from four different countries with four entirely different biographies, yet all stemming from the world of Rock, now united in one band: EXIT EDEN!<br><br>The all-female four piece band unites all attributes ascribed to the new millennium: cosmopolitan, self-confident, independent and ready to do their very own thing. Despite their diversity, the four singers Amanda Somerville, Clémentine Delauney, Marina La Torraca and Anna Brunner blend together personally as superbly as they do vocally with their very diverse vocal tones and techniques that go from opera style to raspy rock. This constellation created extraordinary and powerful ideas and it became their unique plan to raise EXIT EDEN’s very own edge: to show the world that almost every classic song can be transformed into a solid metal-rock song.",
            imagen: "images/EE.jpg"
        }
    }
);// End videoCtrl