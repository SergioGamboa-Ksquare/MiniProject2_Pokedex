import { SearchPokemon } from "./SearchPokemon.js";
import { ClearSearch } from "./ClearSearch.js";
const container = document.querySelector(".wrapper");
const searchButton = document.querySelector(".button-input");
const clearButton = document.querySelector(".clear-input");

const pokemonObject = {
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

let pokeName = "";
let pokeImage = "";
let pokeTipo = "";
let pokeLife = "";
let pokeAtack = "";
let pokeDefense = "";
let pokeSpeed = "";
let pokeUrl = "";

const getPokemonData = async (url, wiki) => {
  const res = await fetch(url);
  const data = await res.json();
  pokeName = data.name;
  pokeUrl = wiki;
  pokeImage = data.sprites.front_default;
  pokeTipo = data.types[0].type.name;
  pokeLife = data.stats[0].base_stat;
  pokeAtack = data.stats[1].base_stat;
  pokeDefense = data.stats[2].base_stat;
  pokeSpeed = data.stats[5].base_stat;
  createCard();
};

const getPokemons = () => {
  getPokemonData(
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://www.wikidex.net/wiki/Charizard"
  );
  getPokemonData(
    "https://pokeapi.co/api/v2/pokemon/pikachu",
    "https://www.wikidex.net/wiki/Pikachu"
  );
  getPokemonData(
    "https://pokeapi.co/api/v2/pokemon/eevee",
    "https://www.wikidex.net/wiki/Eevee"
  );
  getPokemonData(
    "https://pokeapi.co/api/v2/pokemon/charmander",
    "https://www.wikidex.net/wiki/Charmander"
  );
  getPokemonData(
    "https://pokeapi.co/api/v2/pokemon/squirtle",
    "https://www.wikidex.net/wiki/Squirtle"
  );
  getPokemonData(
    "https://pokeapi.co/api/v2/pokemon/metapod",
    "https://www.wikidex.net/wiki/Metapod"
  );
  getPokemonData(
    "https://pokeapi.co/api/v2/pokemon/poliwag",
    "https://www.wikidex.net/wiki/Poliwag"
  );
  getPokemonData(
    "https://pokeapi.co/api/v2/pokemon/psyduck",
    "https://www.wikidex.net/wiki/Psyduck"
  );
  getPokemonData(
    "https://pokeapi.co/api/v2/pokemon/persian",
    "https://www.wikidex.net/wiki/Persian"
  );
  getPokemonData(
    "https://pokeapi.co/api/v2/pokemon/vulpix",
    "https://www.wikidex.net/wiki/Vulpix"
  );
  getPokemonData(
    "https://pokeapi.co/api/v2/pokemon/nidorina",
    "https://www.wikidex.net/wiki/Nidorina"
  );
  getPokemonData(
    "https://pokeapi.co/api/v2/pokemon/sandslash",
    "https://www.wikidex.net/wiki/Sandslash"
  );
};

searchButton.addEventListener("click", () => {
  const searchEngine = new SearchPokemon();
  searchEngine.searchPokemon();
});

clearButton.addEventListener("click", () => {
  const clearEngine = new ClearSearch();
  clearEngine.clear();
})

window.onload = () => {
  getPokemons();
};

const generateElements = () => {
  pokemonObject.pokemon = document.createElement("div");
  pokemonObject.mainInfo = document.createElement("div");
  pokemonObject.typesContainer = document.createElement("div");
  pokemonObject.statsContainer = document.createElement("div");
  pokemonObject.hpContainer = document.createElement("div");
  pokemonObject.attackContainer = document.createElement("div");
  pokemonObject.defContainer = document.createElement("div");
  pokemonObject.speedContainer = document.createElement("div");
  pokemonObject.pokemonName = document.createElement("h4");
  pokemonObject.pokemonUrl = document.createElement("a");
  pokemonObject.sprite = document.createElement("img");
  pokemonObject.typesHeader = document.createElement("h4");
  pokemonObject.typesList = document.createElement("ul");
  pokemonObject.pokemonType = document.createElement("li");
  pokemonObject.hpIcon = document.createElement("img");
  pokemonObject.hpTitle = document.createElement("p");
  pokemonObject.hpStat = document.createElement("p");
  pokemonObject.attackIcon = document.createElement("img");
  pokemonObject.attackTitle = document.createElement("p");
  pokemonObject.attackStat = document.createElement("p");
  pokemonObject.defIcon = document.createElement("img");
  pokemonObject.defTitle = document.createElement("p");
  pokemonObject.defStat = document.createElement("p");
  pokemonObject.speedIcon = document.createElement("img");
  pokemonObject.speedTitle = document.createElement("p");
  pokemonObject.speedStat = document.createElement("p");
};

const assignPropierties = () => {
  pokemonObject.pokemon.classList.add("item");

  pokemonObject.mainInfo.classList.add("main-info");
  pokemonObject.typesContainer.classList.add("types");
  pokemonObject.statsContainer.classList.add("stats");

  pokemonObject.hpContainer.classList.add("stat");
  pokemonObject.hpContainer.classList.add("hp");

  pokemonObject.attackContainer.classList.add("stat");
  pokemonObject.attackContainer.classList.add("attack");

  pokemonObject.defContainer.classList.add("stat");
  pokemonObject.defContainer.classList.add("defense");

  pokemonObject.speedContainer.classList.add("stat");
  pokemonObject.speedContainer.classList.add("speed");

  pokemonObject.pokemonUrl.href = pokeUrl;
  pokemonObject.pokemonUrl.innerHTML = pokeName;

  pokemonObject.sprite.src = pokeImage;

  pokemonObject.typesHeader.innerHTML = "Types:";

  pokemonObject.hpIcon.src = "../IMG/hp.png";
  pokemonObject.hpTitle.innerHTML = "HP";
  pokemonObject.hpStat.innerHTML = pokeLife;
  pokemonObject.hpIcon.classList.add("stat-icon");

  pokemonObject.attackIcon.src = "../IMG/attack.png";
  pokemonObject.attackTitle.innerHTML = "Attack";
  pokemonObject.attackStat.innerHTML = pokeAtack;
  pokemonObject.attackIcon.classList.add("stat-icon");

  pokemonObject.defIcon.src = "../IMG/defense.png";
  pokemonObject.defTitle.innerHTML = "Defense";
  pokemonObject.defStat.innerHTML = pokeDefense;
  pokemonObject.defIcon.classList.add("stat-icon");

  pokemonObject.speedIcon.src = "../IMG/speed.png";
  pokemonObject.speedTitle.innerHTML = "Speed";
  pokemonObject.speedStat.innerHTML = pokeSpeed;
  pokemonObject.speedIcon.classList.add("stat-icon");
};

const appendElements = () => {
  pokemonObject.hpContainer.appendChild(pokemonObject.hpIcon);
  pokemonObject.hpContainer.appendChild(pokemonObject.hpTitle);
  pokemonObject.hpContainer.appendChild(pokemonObject.hpStat);

  pokemonObject.attackContainer.appendChild(pokemonObject.attackIcon);
  pokemonObject.attackContainer.appendChild(pokemonObject.attackTitle);
  pokemonObject.attackContainer.appendChild(pokemonObject.attackStat);

  pokemonObject.defContainer.appendChild(pokemonObject.defIcon);
  pokemonObject.defContainer.appendChild(pokemonObject.defTitle);
  pokemonObject.defContainer.appendChild(pokemonObject.defStat);

  pokemonObject.speedContainer.appendChild(pokemonObject.speedIcon);
  pokemonObject.speedContainer.appendChild(pokemonObject.speedTitle);
  pokemonObject.speedContainer.appendChild(pokemonObject.speedStat);

  pokemonObject.statsContainer.appendChild(pokemonObject.hpContainer);
  pokemonObject.statsContainer.appendChild(pokemonObject.attackContainer);
  pokemonObject.statsContainer.appendChild(pokemonObject.defContainer);
  pokemonObject.statsContainer.appendChild(pokemonObject.speedContainer);

  pokemonObject.typesContainer.appendChild(pokemonObject.typesHeader);
  pokemonObject.typesContainer.appendChild(pokemonObject.typesList);
  //dummy_info["types"].map((type) => {
  //let pokemonType = document.createElement("li");
  //pokemonType.innerHTML = type;
  //typesContainer.appendChild(pokemonType);
  //});
  let pokemonType = document.createElement("li");
  pokemonType.innerHTML = pokeTipo;
  pokemonObject.typesContainer.appendChild(pokemonType);

  pokemonObject.mainInfo.appendChild(pokemonObject.pokemonName);
  pokemonObject.pokemonName.appendChild(pokemonObject.pokemonUrl);
  pokemonObject.mainInfo.appendChild(pokemonObject.sprite);

  pokemonObject.pokemon.appendChild(pokemonObject.mainInfo);
  pokemonObject.pokemon.appendChild(pokemonObject.typesContainer);
  pokemonObject.pokemon.appendChild(pokemonObject.statsContainer);

  container.appendChild(pokemonObject.pokemon);
};

const createCard = () => {
  generateElements();
  assignPropierties();
  appendElements();
};
