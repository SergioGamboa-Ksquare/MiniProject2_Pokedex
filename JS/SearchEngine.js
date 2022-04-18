import { Card } from "./app.js";

class SearchEngine {
  search = () => {
    const container = document.querySelector(".wrapper");
    const searchInput = document.querySelector(".text-input");
    const clearInput = document.querySelector(".clear-input");
    const searchFailed = document.querySelector(".failed-search");

    const nodeList = container.childNodes;
    const searchedPokemon = searchInput.value.toLowerCase();

    let foundExisting = false;

    for (let i = 0; i < nodeList.length; i++) {
      const element = nodeList[i];
      if (
        element.firstChild.firstChild.firstChild.innerHTML === searchedPokemon
      ) {
        if (!element.classList.contains("hidden")) {
          foundExisting = true;
          element.classList.add("item-found");
          if (!searchFailed.classList.contains("hidden")) {
            searchFailed.classList.add("hidden");
          }
        }
      } else {
        element.classList.add("hidden");
      }
    }
    if (!foundExisting) {
      let pokemonCard = new Card();
      pokemonCard.getPokemonData(
        "https://pokeapi.co/api/v2/pokemon/" + searchedPokemon, "true"
      );
      if (!searchFailed.classList.contains("hidden")) {
        searchFailed.classList.add("hidden");
      }
    }
    clearInput.classList.remove("hidden");
  };
}

export { SearchEngine };
