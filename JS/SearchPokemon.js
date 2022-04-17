class SearchPokemon {
  searchPokemon = () => {
    const container = document.querySelector(".wrapper");
    const searchContainer = document.querySelector(".search-container");
    const searchInput = document.querySelector(".text-input");

    const nodeList = container.childNodes;
    const searchedPokemon = searchInput.value.toLowerCase();
    const failedSearch = document.createElement("h2");
    failedSearch.classList.add("failed-search");
    failedSearch.innerHTML = "No results were found!";
    let found = false;

    for (let i = 0; i < nodeList.length; i++) {
      const element = nodeList[i];
      if (
        element.firstChild.firstChild.firstChild.innerHTML === searchedPokemon
      ) {
        found = true;
        container.classList.add("wrapper-search");
        element.classList.add("item-found");
      } else {
        element.classList.add("hidden");
      }
    }
    if (!found) {
      searchContainer.appendChild(failedSearch);
    }
  };
}

export { SearchPokemon };
