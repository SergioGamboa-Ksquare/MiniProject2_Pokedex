class SearchPokemon {
  searchPokemon = () => {
    const container = document.querySelector(".wrapper");
    const searchInput = document.querySelector(".text-input");
    const clearInput = document.querySelector(".clear-input");
    const failedSearch = document.querySelector(".failed-search");

    const nodeList = container.childNodes;
    const searchedPokemon = searchInput.value.toLowerCase();

    let found = false;

    for (let i = 0; i < nodeList.length; i++) {
      const element = nodeList[i];
      if (
        element.firstChild.firstChild.firstChild.innerHTML === searchedPokemon
      ) {
        if (!element.classList.contains("hidden")) {
          found = true;
          container.classList.add("wrapper-search");
          element.classList.add("item-found");
        }
      } else {
        element.classList.add("hidden");
      }
    }
    if (!found) {
      failedSearch.classList.remove("hidden");
    }
    clearInput.classList.remove("hidden");
  };
}

export { SearchPokemon };
