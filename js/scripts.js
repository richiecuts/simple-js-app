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


pokemonList.forEach(function (pokemon){
    if (pokemon.height <1 && pokemon.height >0) {
      document.write('<p>' + pokemon.name + ' - height: ' + pokemon.height + " (That\'s just a little guy)");
    }else if (pokemon.height>1){
      document.write('<p>' + pokemon.name + ' - height: ' + pokemon.height + " (That\'s one chonky boi)");
    }else {
      document.write('<p>' + pokemon.name + ' - height: ' + pokemon.height + " ");
    }
  });                                
     



