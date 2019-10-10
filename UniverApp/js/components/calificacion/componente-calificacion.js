angular.
module('angularApp'). // Nombre App
component('componenteCalificacion', { // nombre componente => para usarlo <componente-calificacion></componente-calificacion>
  templateUrl: './js/components/calificacion/template.html',
  controller: function ComponenteCalificacionController($http) {
    console.trace('Calificacion Controller');
    const ENDPOINT = "http://localhost:3000/alumnos";
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

      $http.post(ENDPOINT, $self.alumnos).then(function (response) {
        console.trace('Posteamos');
      }, function (response) {
        console.warn('Tenemos un error, response: %o', response);
        $scope.alerta = {
          "texto": "<strong>ERROR " + response.status + ":</strong> Fallo al obtener los alumnos",
          "clase": "danger"
        }
      });
    } // End guardarNotas

    this.subirNota = function (nota) {
      console.trace('Funcion Subir Nota');

      if (this.nota < NOTA_MAX) {
        this.nota++;
      }
      this.ponerCalificacion();
    }

    this.bajarNota = function (nota) {
      console.trace('Funcion Bajar Nota');

      if (this.nota > NOTA_MIN) {
        this.nota--;
      }
      this.ponerCalificacion(this.nota);
    }

    this.ponerCalificacion = function (nota) {

      console.trace('Funcion Poner Calificacion');

      switch (this.nota) {
        case 0:
          this.calificacion = "Suspenso";
          break;
        case 1:
          this.calificacion = "Insuficiente";
          break;
        case 2:
          this.calificacion = "Insuficiente";
          break;
        case 3:
          this.calificacion = "Insuficiente";
          break;
        case 4:
          this.calificacion = "Insuficiente";
          break;
        case 5:
          this.calificacion = "Suficiente";
          break;
        case 6:
          this.calificacion = "Bien";
          break;
        case 7:
          this.calificacion = "Notable";
          break;
        case 8:
          this.calificacion = "Notable";
          break;
        case 9:
          this.calificacion = "Sobresaliente";
          break;
        case 10:
          this.calificacion = "Sobresaliente";
          break;
        default:
          this.calificacion = "Error: nota no valida!";
      } // End Switch
    } // End Function
  } // End Controllador
});