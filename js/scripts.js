let pokemonRepository = (function () {
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  let pokemonList = [];
  let modalContainer = document.querySelector("#modal-container");

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

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
        item.name = details.name;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(item) {
    loadDetails(item).then(function () {
      showModal(item);
      console.log(item);
    });
  }

  function showModal(item) {
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.innerHTML = "";
    let modal = document.createElement("div");
    modal.classList.add("modal");
    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener("click", hideModal);

    let titleElement = document.createElement("h1");
    titleElement.innerText = item.name;

    let contentElement = document.createElement("p");
    contentElement.innerText = item.height;

    let imgElement = document.createElement("img");
    imgElement.classList.add("img-element");
    imgElement.src = item.imageUrl;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);
    modal.appendChild(imgElement);

    modalContainer.classList.add("is-visible");
    modalContainer.addEventListener("click", (e) => {
      // Since this is also triggered when clicking INSIDE the modal
      // We only want to close if the user clicks directly on the overlay
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  }

  function hideModal() {
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("is-visible");
  }

  window.addEventListener("keydown", (e) => {
    let modalContainer = document.querySelector("#modal-container");
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  });

  document.querySelector("#show-modal").addEventListener("click", () => {
    showModal("Modal title", "This is the modal content!");
  });

  return {
    add: function (pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function () {
      return pokemonList;
    },
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
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


