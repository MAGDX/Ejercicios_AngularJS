function PokemonProvider($http) {

    console.log('PokemonProvider');
    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";

    this.listar = function () {
        let url = ENDPOINT;
        console.log('PokemonProvider listar ' + url);
        return $http.get(url);
    }

    this.detalle = function (idPokemon) {
        let url = ENDPOINT + idPokemon;
        console.log('PokemonProvider detalle '  + url);
        return $http.get(url);
    }
}