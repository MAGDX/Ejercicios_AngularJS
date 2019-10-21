# Ejercicios AngularJS

<h2>UniverApp</h2>

<p>En esta aplicación han sido desarrollados varios ejercicios con el fin de aprender, entender y poder implementar en un futuro con AngularJS. 
Los ejercicios intentan ser progresivos en cuanto a dificultad y complejidad de diseño, ya sea utilizando componentes y templates o controladores que
gestionen los datos para después mostrarlos en un archivo HTML.</p>

![Alt text](https://github.com/MAGDX/Ejercicios_AngularJS/blob/master/resources/Home.jpg)

<p>Cada ejercicio expone los conceptos dados en cada temario y de manera acumulativa, hemos ido incluyendo dichos nuevos conceptos tanto en los nuevos ejercicios como en los ejercicios anteriormente planteados.</p>
<p>Algunos de estos conceptos a su vez se explican en el codigo mediante comentarios</p>
<p>Utilidades como filtros, controllers, services, etc... aparecen declarados en el controlador principal de la aplicación (mainController.js)</p>
<p>En los ejercicios se ven las siguientes características de AngularJS:</p>

<ul>
  <li>Sintaxis</li>
  <li>Directivas: ng-repeat, ng-show, ng-disabled, etc...</li>
  <li>Filtros (propios de AngularJS y personalizados)</li>
  <li>Controladores</li>
  <li>Componentes</li>
  <li>Inyeccion de dependencias</li>
  <li>Servicios: constant, value, service, factory & providers</li>
  <li>Validación de formularios</li>
  <li>CRUD</li>
  <li>Conexión con servicios REST</li>
</ul>

<h4>Requisitos adicionales</h4>

<p><strong>Para la correcta ejercucion de algunos ejercicios se requiere arrancar un servidor REST (json-server)</strong></p>
<p>Para ello, en el propio Visual Code Studio, abrimos una nueva terminal, con el comando <code>cd</code> nos movemos a la ruta donde
tenemos el proyecto almacenado y una vez aqui ejecutamos el siguiente comando: <code>json-server --watch db.json</code></p>

![Alt text](https://github.com/MAGDX/Ejercicios_AngularJS/blob/master/resources/Json-server.jpg)

<p><strong>NOTA:</strong> El ejercicio CRUD del navbar no utiliza este servicio REST, si no que utiliza otro servico REST local creado en Java el cual se arranca desde Eclipse llamado <em>musiconcloudRestSpring</em>.</p>
<p>En él se incluye un CRUD de canciones el cuál se puede gestionar mediante la interfaz Swagger.</p>

<p>Desde la pestaña "Ejercicios Anteriores" se pueden acceder a los ejerciciós más básicos hechos previamente,
mientras que en las opciones HP y Pokemon del navbar se aglutinan la mayoria de los conceptos estudiados durante el curso
en las cuales podemos apreciar un listado de los personajes de la saga y de los pokemons obtenidos mediante las APIs, cuya documentación
se encuentra en https://www.potterapi.com/ y https://pokeapi.co/.</p>
