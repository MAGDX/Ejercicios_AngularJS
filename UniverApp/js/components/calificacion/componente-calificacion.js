angular.
module('angularApp'). // Nombre App
component('componenteCalificacion', { // nombre componente => para usarlo <componente-calificacion></componente-calificacion>
  templateUrl: './js/components/calificacion/template.html',
  controller: function ComponenteCalificacionController($http) {
    console.trace('Calificacion Controller');
    const ENDPOINT = "http://localhost:3000/alumnos/";
    const NOTA_MAX = 10;
    const NOTA_MIN = 0;
    this.suma = "+";
    this.resta = "-";

    $self = this;

    $self.alumnos = {};

    // Eventos
    this.$onInit = function () {
      $http.get(ENDPOINT).then(function (result) {
        console.trace('onInit Calificacion %o', result);

        $self.alumnos = result.data;
      }, function (result) {
        console.trace('Error al llamar al Servicio REST');

        $scope.alerta = {
          "texto": "<strong>ERROR:</strong> Fallo al obtener los alumns",
          "clase": "danger"
        }
      }); // End GET
    } // End onInit

    //Funciones
    this.guardarNotas = function () {
      console.trace('click guardarNotas');

      $self.alumnos.forEach(function (alumno, index) {

        let url = ENDPOINT + alumno.id;

        $http.put(url, alumno).then(function (response) {
          console.trace('Puteamos');
        }, function (response) {
          console.warn('Tenemos un error, response: %o', response);
          $scope.alerta = {
            "texto": "<strong>ERROR " + response.status + ":</strong> Fallo al obtener los alumnos",
            "clase": "danger"
          }
        });
      });
    } // End guardarNotas

    this.subirNota = function (alumno) {
      console.trace('Funcion Subir Nota');

      if (alumno.nota < NOTA_MAX) {
        alumno.nota++;
        this.ponerCalificacion(alumno);
      }
    }

    this.bajarNota = function (alumno) {
      console.trace('Funcion Bajar Nota');

      if (alumno.nota > NOTA_MIN) {
        alumno.nota--;
        this.ponerCalificacion(alumno);
      }
    }

    this.ponerCalificacion = function (alumno) {

      console.trace('Funcion Poner Calificacion');

      switch (alumno.nota) {
        case 0:
          alumno.calificacion = "Suspenso";
          break;
        case 1:
          alumno.calificacion = "Insuficiente";
          break;
        case 2:
          alumno.calificacion = "Insuficiente";
          break;
        case 3:
          alumno.calificacion = "Insuficiente";
          break;
        case 4:
          alumno.calificacion = "Insuficiente";
          break;
        case 5:
          alumno.calificacion = "Suficiente";
          break;
        case 6:
          alumno.calificacion = "Bien";
          break;
        case 7:
          alumno.calificacion = "Notable";
          break;
        case 8:
          alumno.calificacion = "Notable";
          break;
        case 9:
          alumno.calificacion = "Sobresaliente";
          break;
        case 10:
          alumno.calificacion = "Sobresaliente";
          break;
        default:
          alumno.calificacion = "Error: nota no valida!";
      } // End Switch
    } // End Function
  } // End Controllador
});