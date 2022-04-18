import { SearchEngine } from "./SearchEngine.js";
import { ClearSearch } from "./ClearSearch.js";
const container = document.querySelector(".wrapper");
const searchButton = document.querySelector(".button-input");
const clearButton = document.querySelector(".clear-input");
const searchFailed = document.querySelector(".failed-search");

const getPokemons = () => {
  let pokemonCard = new Card();
  pokemonCard.getPokemonData("https://pokeapi.co/api/v2/pokemon/charizard");
  pokemonCard.getPokemonData("https://pokeapi.co/api/v2/pokemon/pikachu");
  pokemonCard.getPokemonData("https://pokeapi.co/api/v2/pokemon/eevee");
  pokemonCard.getPokemonData("https://pokeapi.co/api/v2/pokemon/charmander");
  pokemonCard.getPokemonData("https://pokeapi.co/api/v2/pokemon/squirtle");
  pokemonCard.getPokemonData("https://pokeapi.co/api/v2/pokemon/metapod");
  pokemonCard.getPokemonData("https://pokeapi.co/api/v2/pokemon/poliwag");
  pokemonCard.getPokemonData("https://pokeapi.co/api/v2/pokemon/psyduck");
  pokemonCard.getPokemonData("https://pokeapi.co/api/v2/pokemon/persian");
  pokemonCard.getPokemonData("https://pokeapi.co/api/v2/pokemon/vulpix");
  pokemonCard.getPokemonData("https://pokeapi.co/api/v2/pokemon/nidorina");
  pokemonCard.getPokemonData("https://pokeapi.co/api/v2/pokemon/sandslash");
};

searchButton.addEventListener("click", () => {
  const searchEngine = new SearchEngine();
  searchEngine.search();
});

clearButton.addEventListener("click", () => {
  const clearEngine = new ClearSearch();
  clearEngine.clear();
});

window.onload = () => {
  getPokemons();
};

class Card {
  pokemonObject = {
    pokemon: "",
    mainInfo: "",
    typesContainer: "",
    statsContainer: "",
    pokemonName: "",
    pokemonUrl: "",
    sprite: "",
    typesHeader: "",
    hpContainer: "",
    attackContainer: "",
    defContainer: "",
    speedContainer: "",
    hpIcon: "",
    hpTitle: "",
    hpStat: "",
    attackIcon: "",
    attackTitle: "",
    attackStat: "",
    defIcon: "",
    defTitle: "",
    defStat: "",
    speedIcon: "",
    speedTitle: "",
    speedStat: "",
  };

  pokemonData = {
    pokeName: "",
    pokeImage: "",
    pokeTypes: "",
    pokeLife: "",
    pokeAtack: "",
    pokeDefense: "",
    pokeSpeed: "",
    pokeUrl: "",
    foundAPI: false,
  };

  getPokemonData = async (url, foundAPI) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      this.pokemonData.pokeName = data.name;
      this.pokemonData.pokeUrl = "https://www.wikidex.net/wiki/" + data.name;
      this.pokemonData.pokeImage = data.sprites.front_default;
      this.pokemonData.pokeTypes = data.types.map(
        (element) => element.type.name
      );
      this.pokemonData.pokeLife = data.stats[0].base_stat;
      this.pokemonData.pokeAtack = data.stats[1].base_stat;
      this.pokemonData.pokeDefense = data.stats[2].base_stat;
      this.pokemonData.pokeSpeed = data.stats[5].base_stat;
      if (foundAPI) {
        this.pokemonData.foundAPI = true;
      }
      this.createCard();
    } catch (error) {
      searchFailed.classList.remove("hidden");
      return error;
    }
  };

  generateElements = () => {
    this.pokemonObject.pokemon = document.createElement("div");
    this.pokemonObject.mainInfo = document.createElement("div");
    this.pokemonObject.typesContainer = document.createElement("div");
    this.pokemonObject.statsContainer = document.createElement("div");
    this.pokemonObject.hpContainer = document.createElement("div");
    this.pokemonObject.attackContainer = document.createElement("div");
    this.pokemonObject.defContainer = document.createElement("div");
    this.pokemonObject.speedContainer = document.createElement("div");
    this.pokemonObject.pokemonName = document.createElement("h4");
    this.pokemonObject.pokemonUrl = document.createElement("a");
    this.pokemonObject.sprite = document.createElement("img");
    this.pokemonObject.typesHeader = document.createElement("h4");
    this.pokemonObject.typesList = document.createElement("ul");
    this.pokemonObject.pokemonType = document.createElement("li");
    this.pokemonObject.hpIcon = document.createElement("img");
    this.pokemonObject.hpTitle = document.createElement("p");
    this.pokemonObject.hpStat = document.createElement("p");
    this.pokemonObject.attackIcon = document.createElement("img");
    this.pokemonObject.attackTitle = document.createElement("p");
    this.pokemonObject.attackStat = document.createElement("p");
    this.pokemonObject.defIcon = document.createElement("img");
    this.pokemonObject.defTitle = document.createElement("p");
    this.pokemonObject.defStat = document.createElement("p");
    this.pokemonObject.speedIcon = document.createElement("img");
    this.pokemonObject.speedTitle = document.createElement("p");
    this.pokemonObject.speedStat = document.createElement("p");
  };

  assignPropierties = () => {
    this.pokemonObject.pokemon.classList.add("item");

    if (this.pokemonData.foundAPI) {
      this.pokemonObject.pokemon.classList.add("found-api");
      this.pokemonObject.pokemon.classList.add("item-found");
    }

    this.pokemonObject.mainInfo.classList.add("main-info");
    this.pokemonObject.typesContainer.classList.add("types");
    this.pokemonObject.statsContainer.classList.add("stats");

    this.pokemonObject.hpContainer.classList.add("stat");
    this.pokemonObject.hpContainer.classList.add("hp");

    this.pokemonObject.attackContainer.classList.add("stat");
    this.pokemonObject.attackContainer.classList.add("attack");

    this.pokemonObject.defContainer.classList.add("stat");
    this.pokemonObject.defContainer.classList.add("defense");

    this.pokemonObject.speedContainer.classList.add("stat");
    this.pokemonObject.speedContainer.classList.add("speed");

    this.pokemonObject.pokemonUrl.href = this.pokemonData.pokeUrl;
    this.pokemonObject.pokemonUrl.target = "_blank";
    this.pokemonObject.pokemonUrl.innerHTML = this.pokemonData.pokeName;

    this.pokemonObject.sprite.src = this.pokemonData.pokeImage;

    this.pokemonObject.typesHeader.innerHTML = "Types:";

    this.pokemonObject.hpIcon.src = "./IMG/hp.png";
    this.pokemonObject.hpTitle.innerHTML = "HP";
    this.pokemonObject.hpStat.innerHTML = this.pokemonData.pokeLife;
    this.pokemonObject.hpIcon.classList.add("stat-icon");

    this.pokemonObject.attackIcon.src = "./IMG/attack.png";
    this.pokemonObject.attackTitle.innerHTML = "Attack";
    this.pokemonObject.attackStat.innerHTML = this.pokemonData.pokeAtack;
    this.pokemonObject.attackIcon.classList.add("stat-icon");

    this.pokemonObject.defIcon.src = "./IMG/defense.png";
    this.pokemonObject.defTitle.innerHTML = "Defense";
    this.pokemonObject.defStat.innerHTML = this.pokemonData.pokeDefense;
    this.pokemonObject.defIcon.classList.add("stat-icon");

    this.pokemonObject.speedIcon.src = "./IMG/speed.png";
    this.pokemonObject.speedTitle.innerHTML = "Speed";
    this.pokemonObject.speedStat.innerHTML = this.pokemonData.pokeSpeed;
    this.pokemonObject.speedIcon.classList.add("stat-icon");
  };

  appendElements = () => {
    this.pokemonObject.hpContainer.appendChild(this.pokemonObject.hpIcon);
    this.pokemonObject.hpContainer.appendChild(this.pokemonObject.hpTitle);
    this.pokemonObject.hpContainer.appendChild(this.pokemonObject.hpStat);

    this.pokemonObject.attackContainer.appendChild(
      this.pokemonObject.attackIcon
    );
    this.pokemonObject.attackContainer.appendChild(
      this.pokemonObject.attackTitle
    );
    this.pokemonObject.attackContainer.appendChild(
      this.pokemonObject.attackStat
    );

    this.pokemonObject.defContainer.appendChild(this.pokemonObject.defIcon);
    this.pokemonObject.defContainer.appendChild(this.pokemonObject.defTitle);
    this.pokemonObject.defContainer.appendChild(this.pokemonObject.defStat);

    this.pokemonObject.speedContainer.appendChild(this.pokemonObject.speedIcon);
    this.pokemonObject.speedContainer.appendChild(
      this.pokemonObject.speedTitle
    );
    this.pokemonObject.speedContainer.appendChild(this.pokemonObject.speedStat);

    this.pokemonObject.statsContainer.appendChild(
      this.pokemonObject.hpContainer
    );
    this.pokemonObject.statsContainer.appendChild(
      this.pokemonObject.attackContainer
    );
    this.pokemonObject.statsContainer.appendChild(
      this.pokemonObject.defContainer
    );
    this.pokemonObject.statsContainer.appendChild(
      this.pokemonObject.speedContainer
    );

    this.pokemonObject.typesContainer.appendChild(
      this.pokemonObject.typesHeader
    );
    this.pokemonObject.typesContainer.appendChild(this.pokemonObject.typesList);

    this.pokemonData.pokeTypes.forEach((type) => {
      let pokemonType = document.createElement("li");
      pokemonType.innerHTML = type;
      this.pokemonObject.typesContainer.appendChild(pokemonType);
    });

    this.pokemonObject.mainInfo.appendChild(this.pokemonObject.pokemonName);
    this.pokemonObject.pokemonName.appendChild(this.pokemonObject.pokemonUrl);
    this.pokemonObject.mainInfo.appendChild(this.pokemonObject.sprite);

    this.pokemonObject.pokemon.appendChild(this.pokemonObject.mainInfo);
    this.pokemonObject.pokemon.appendChild(this.pokemonObject.typesContainer);
    this.pokemonObject.pokemon.appendChild(this.pokemonObject.statsContainer);

    container.appendChild(this.pokemonObject.pokemon);
  };

  createCard = () => {
    this.generateElements();
    this.assignPropierties();
    this.appendElements();
  };
}

export { Card };
