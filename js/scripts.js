let pokemonRepository = (function () {
    let pokemonList = [
    {
    name: 'Bulbasaur',
    height: '0.7',
    types: [
        'Monster',
        'Grass',
    ]



    },
    {
        name: 'Charizard',
        height: '1.7',
        types: [
            'Monster',
            'Dragon',
        ]
    },
    {
        name: 'Machamp',
        height: '1.6',
        types: [
            'Human-Like'
        ]
    }
]

     return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
      
          }
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Pikachu', height: '1.4', types: 'Mouse' });
console.log(pokemonRepository.getAll());


pokemonRepository.getAll().forEach(function (pokemon){
    if (pokemon.height <1 && pokemon.height >0) {
      document.write('<p>' + pokemon.name + ' - height: - ' + pokemon.height + " (That\'s a little guy)" + ' - types: ' + pokemon.types);
    }else if (pokemon.height>1){
      document.write('<p>' + pokemon.name + ' - height: - ' + pokemon.height + " (That\'s a big guy)" + ' - types: ' + pokemon.types);
    }else {
      document.write('<p>' + pokemon.name + ' - height: - ' + pokemon.height + " ");
    }
  });                             
     



