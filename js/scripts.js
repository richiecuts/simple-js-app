let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "Bulbasaur",
      height: "0.7",
      types: ["Monster", "Grass"]
    },
    {
      name: "Charizard",
      height: "1.7",
      types: ["Monster", "Dragon"]
    },
    {
      name: "Machamp",
      height: "1.6",
      types: ["Human-Like"]
    }
  ];

  function addListItem(pokemon) {
    let pokemonItem = document.querySelector(".pokemon-list");
    let itemPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    itemPokemon.appendChild(button);
    pokemonItem.appendChild(itemPokemon);
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    add: function (pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function () {
      return pokemonList;
    },
    addListItem: addListItem
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "Pikachu", height: "1.4", types: "Mouse" });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(pokemonRepository.addListItem);


