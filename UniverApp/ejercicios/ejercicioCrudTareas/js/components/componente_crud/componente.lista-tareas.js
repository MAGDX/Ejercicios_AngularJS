angular.
module('angularApp'). // Nombre App
component('listadoTareas', { // nombre componente => para usarlo <listado-tareas></listado-tareas>
    templateUrl: './ejercicios/ejercicioCrudTareas/js/components/componente_crud/template.lista-tareas.html',
    controller: function ListadoTareasController($http) {
        console.trace('listado tareas');

        // Propiedades
        var self = this;

        const ENDPOINT = "http://127.0.0.1:3000/tareas/";

        this.mensajeValidacion = "";
        this.tareas = [];
        this.descTarea = "";

        //Eventos
        this.$onInit = function () {
            console.trace('onInit');

            $http.get(ENDPOINT).then(function (response) { // GET success
                console.trace('Peticion GET a %s data=%o', ENDPOINT, response.data);
                self.tareas = response.data;
            }, function (e) { // GET fallida
                console.error('Tenemos un error: %o', e);
            });
        };

        //Funciones
        this.crearTarea = function () {
            console.trace('click crearTarea');

            let descripcion = self.descTarea.trim();

            if (descripcion.length <= 2) {
                console.trace('Error en la validacion de la descripción');
                self.mensajeValidacion = 'Por favor, inserte una descripcion';
            } else {
                console.trace('Llamada POST');

                self.mensajeValidacion = '';

                let data = {
                    "completed": false,
                    "task": descripcion
                };

                $http.post(ENDPOINT, data).then(function(response){
                    console.trace('Posteamos');
                },function(response){
                    console.warn('Tenemos un error, response: %o', response);
                    self.mensajeValidacion = "Codigo " + response.status + ": Error al crear la tarea";
                });
            }
        } // End crearTarea

        this.eliminarTarea = function(tarea){
            console.trace('click eliminarTarea %o', tarea);

            let url = ENDPOINT + tarea.id;

            $http.delete(url).then(function(response){
                console.trace('Deleteamos');
            },function(response){
                console.warn('Tenemos un error, response: %o', response);
                self.mensajeValidacion = "Codigo " + response.status + ": Error al eliminar la tarea";
            });
        } // End eliminarTarea

        this.editarTarea = function(tarea){
            console.trace('click editarTarea %o', tarea);

            let url = ENDPOINT + tarea.id;

            let data = {
                "completed": tarea.completed,
                "task": tarea.descTarea
            };

            $http.put(url, tarea).then(function(response){
                console.trace('Puteamos');
            },function(response){
                console.warn('Tenemos un error, response: %o', response);
                self.mensajeValidacion = "Codigo " + response.status + ": Error al editar la tarea";
            });
        } // End editarTarea

        this.completarTarea = function(tarea){
            console.trace('click completarTarea %o', tarea);

            let url = ENDPOINT + tarea.id;

            let data = {
                "completed": !tarea.completed
            };

            $http.patch(url, data).then(function(response){
                console.trace('Patcheamos');
            },function(response){
                console.warn('Tenemos un error, response: %o', response);
                self.mensajeValidacion = "Codigo " + response.status + ": Error al marcar la tarea como completada";
            });
        } // End completarTarea
    }
});