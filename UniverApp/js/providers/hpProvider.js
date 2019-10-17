function HPProvider($http) {

    console.log('hpProvider');
    const ENDPOINT = "https://www.potterapi.com/v1/characters/";
    const apiKey = "$2a$10$aA5yCaSinpFsEYJw3Glgf..BgJ6CDPvocxH2ELfCuGiR1h5kf53IC";

    this.listar = function () {
        let url = ENDPOINT + "?key=" + apiKey;
        console.log('HPProvider listar ' + url);
        return $http.get(url);
    }

    this.detalle = function (idHP) {
        let url = ENDPOINT + idHP + "?key=" + apiKey;
        console.log('HPProvider detalle '  + url);
        return $http.get(url);
    }
}