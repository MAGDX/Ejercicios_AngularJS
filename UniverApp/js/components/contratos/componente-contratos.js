angular.
module('angularApp'). // Nombre App
component('componenteContratos', { // nombre componente => para usarlo <componente-contratos></componente-contratos>
  templateUrl: './js/components/contratos/template.html',
  controller: function ComponenteContratosController($http) {
    console.trace('Contratos Controller');
    const ENDPOINT = "http://localhost:3000/contratos/";

    $self = this;

    $self.contratos = [];

    // Eventos
    this.$onInit = function () {
      $http.get(ENDPOINT).then(function (result) {
        console.trace('onInit Calificacion %o', result);

        $self.contratos = result.data;

        $self.ejercicios();

      }, function (result) {
        console.trace('Error al llamar al Servicio REST');

        $scope.alerta = {
          "texto": "<strong>ERROR:</strong> Fallo al obtener los alumns",
          "clase": "danger"
        }
      }); // End GET
    } // End onInit

    /**
     * Hacemos esta funcion para capturar los datos del ejercicio
     */
    this.ejercicios = function () {

      // Ejercicio 1
      $self.ejercicio1 = $self.contratos.filter(v => v.TIPPRODUCT == "KT");

      // Ejercicio 2
      $self.ejercicio2 = $self.contratos.map(e => {

        let cc;
        if (e.codContrat == undefined || e.digContrat == undefined) {
          cc = "";
        } else {
          cc = e.codContrat.toString() + e.digContrat.toString();
        }

        return {
          "codigoContrato": cc,
          "saldo": (e.SALCONTRAT / 100)
        }
      }).filter(e => {
        return (e.codigoContrato != "" && e.saldo > 0);
      });

      // Ejercicio 3
      $self.ejercicio3 = $self.contratos.filter(v => {
        if (v.ACCIONES != undefined) {
          let result = v.ACCIONES.filter(e => e.clave == "SITUACION");
          return (result.length == 1);
        }
        return false;
      });

      // Ejercicio 4
      $self.ejercicio4 = $self.contratos.map(e => {
        if (e.ACCIONES != undefined) {
          return e.ACCIONES.map(v => v.clave);
        }
      });

      // Ejercicio 5
      $self.ejercicio5 = [];
    }
  } // End Controllador
});