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

pokemonList.forEach(function(pokemon) {
    console.log(pokemon.name + ' is ' .height + 'and is a type of' .types);
  });



