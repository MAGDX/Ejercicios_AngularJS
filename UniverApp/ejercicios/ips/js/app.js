(function () {

  var app = angular.module('ejemplosApp', []);



  app.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {
    //http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK
    $scope.geo = {};

    $scope.localizame = function () {
      $http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK').success(function (data) {
        $scope.geo = data;

        $scope.initMap();
      })
    }

    $scope.initMap = function() {
      var myLatLng = {
        lat: +$scope.geo.geoplugin_latitude,
        lng: +$scope.geo.geoplugin_longitude
      };

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: myLatLng
      });

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Estas en ' + $scope.geo.geoplugin_city
      });
    }
  }]);
})();