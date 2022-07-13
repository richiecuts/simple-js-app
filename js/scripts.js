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
   

for (let i=0; i<pokemonList.length; i++) {
 
    if (pokemonList[i].height <1 && pokemonList[i].height >0){
      document.write('<p>' + pokemonList[i].name + ' - height: ' + pokemonList[i].height + " (That\'s just a little guy)");
    
    }else if (pokemonList[i].height>1){
      document.write('<p>' + pokemonList[i].name + ' - height: ' + pokemonList[i].height + " (That\'s one chonky boi)");
    }else {
      document.write('<p>' + pokemonList[i].name + ' - height: ' + pokemonList[i].height + " ");
    }
  }


