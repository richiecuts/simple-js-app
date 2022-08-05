let pokemonRepository = (function () {
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  let pokemonList = [];

  function add(pokemon) {
    if (typeof pokemon === "object" && "name" in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return pokemonList;
  }

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

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };

          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
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
    addListItem: addListItem,
    loadList: loadList
  };
})();

//console.log(pokemonRepository.getAll());
//pokemonRepository.add({ name: "Pikachu", height: "1.4", types: "Mouse" });
//console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});


