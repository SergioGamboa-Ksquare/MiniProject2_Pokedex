class ClearSearch {
  clear = () => {
    const container = document.querySelector(".wrapper");
    const clearInput = document.querySelector(".clear-input");
    const searchInput = document.querySelector(".text-input");
    const failedSearch = document.querySelector(".failed-search");
    const apiItem = document.querySelector(".found-api");

    const nodeList = container.childNodes;
    for (let i = 0; i < nodeList.length; i++) {
      const element = nodeList[i];
      if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
      } 
      if (element.classList.contains("item-found")) {
        element.classList.remove("item-found");
      }
    }
    container.classList.remove("wrapper-search");
    clearInput.classList.add("hidden");
    searchInput.value = "";
    failedSearch.classList.add("hidden");
    apiItem.remove();
  };
}

export { ClearSearch };