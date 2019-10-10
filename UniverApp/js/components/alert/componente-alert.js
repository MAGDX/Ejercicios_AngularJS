angular.
module('angularApp'). // Nombre App
component('componenteAlerta', { // nombre componente => para usarlo <componente-alerta></componente-alerta>
  templateUrl: './js/components/alert/template.html',
  bindings: {
    clase: '@',
    texto: '@'
  },
  controller: function ComponenteAlertaController() {
    console.trace('Alerta Controller');
  } // End Controllador
});