const container = document.querySelector(".wrapper");

const dummy_info = {
  pokemonName: "Ditto",
  image: "./IMG/ditto.png",
  types: ["normal", "flying"],
  hp: 48,
  attack: 48,
  def: 48,
  speed: 48,
};

let pokemon = "";
let mainInfo = "";
let typesContainer = "";
let statsContainer = "";
let pokemonName = "";
let sprite = "";
let typesHeader = "";
let hpContainer = "";
let attackContainer = "";
let defContainer = "";
let speedContainer = "";
let hpIcon = "";
let hpStat = "";
let attackIcon = "";
let attackStat = "";
let defIcon = "";
let defStat = "";
let speedIcon = "";
let speedStat = "";

let pokeName = "";
let pokeImage = "";
let pokeTipo = "";
let pokeLife = "";
let pokeAtack = "";
let pokeDefense = "";
let pokeSpeed = "";

const getPokemonData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  pokeName = data.name;
  pokeImage = data.sprites.front_default;
  pokeTipo = data.types[0].type.name;
  pokeLife = data.stats[0].base_stat;
  pokeAtack = data.stats[1].base_stat;
  pokeDefense = data.stats[2].base_stat;
  pokeSpeed = data.stats[5].base_stat;
  createCard();
};

const getPokemons = () => {
  getPokemonData("https://pokeapi.co/api/v2/pokemon/charizard");
  getPokemonData("https://pokeapi.co/api/v2/pokemon/pikachu");
  getPokemonData("https://pokeapi.co/api/v2/pokemon/eevee");
  getPokemonData("https://pokeapi.co/api/v2/pokemon/charmander");
  getPokemonData("https://pokeapi.co/api/v2/pokemon/squirtle");
  getPokemonData("https://pokeapi.co/api/v2/pokemon/metapod");
  getPokemonData("https://pokeapi.co/api/v2/pokemon/poliwag");
  getPokemonData("https://pokeapi.co/api/v2/pokemon/psyduck");
  getPokemonData("https://pokeapi.co/api/v2/pokemon/persian");
  getPokemonData("https://pokeapi.co/api/v2/pokemon/vulpix");
  getPokemonData("https://pokeapi.co/api/v2/pokemon/nidorina");
  getPokemonData("https://pokeapi.co/api/v2/pokemon/sandslash");
};

window.onload = () => {
  getPokemons();
};

const generateElements = () => {
  pokemon = document.createElement("div");
  mainInfo = document.createElement("div");
  typesContainer = document.createElement("div");
  statsContainer = document.createElement("div");
  hpContainer = document.createElement("div");
  attackContainer = document.createElement("div");
  defContainer = document.createElement("div");
  speedContainer = document.createElement("div");
  pokemonName = document.createElement("h4");
  sprite = document.createElement("img");
  typesHeader = document.createElement("h4");
  typesList = document.createElement("ul");
  pokemonType = document.createElement("li");
  hpIcon = document.createElement("img");
  hpStat = document.createElement("p");
  attackIcon = document.createElement("img");
  attackStat = document.createElement("p");
  defIcon = document.createElement("img");
  defStat = document.createElement("p");
  speedIcon = document.createElement("img");
  speedStat = document.createElement("p");
};

const assignPropierties = () => {
  pokemon.classList.add("item");

  mainInfo.classList.add("main-info");
  typesContainer.classList.add("types");
  statsContainer.classList.add("stats");

  hpContainer.classList.add("stat");
  hpContainer.classList.add("hp");

  attackContainer.classList.add("stat");
  attackContainer.classList.add("attack");

  defContainer.classList.add("stat");
  defContainer.classList.add("defense");

  speedContainer.classList.add("stat");
  speedContainer.classList.add("speed");

  pokemonName.innerHTML = pokeName;

  sprite.src = pokeImage;

  typesHeader.innerHTML = "Types:";

  hpIcon.src = "../IMG/hp.png";
  hpStat.innerHTML = pokeLife;
  hpIcon.classList.add("stat-icon");

  attackIcon.src = "../IMG/attack.png";
  attackStat.innerHTML = pokeAtack;
  attackIcon.classList.add("stat-icon");

  defIcon.src = "../IMG/defense.png";
  defStat.innerHTML = pokeDefense;
  defIcon.classList.add("stat-icon");

  speedIcon.src = "../IMG/speed.png";
  speedStat.innerHTML = pokeSpeed;
  speedIcon.classList.add("stat-icon");
};

const appendElements = () => {
  hpContainer.appendChild(hpIcon);
  hpContainer.appendChild(hpStat);

  attackContainer.appendChild(attackIcon);
  attackContainer.appendChild(attackStat);

  defContainer.appendChild(defIcon);
  defContainer.appendChild(defStat);

  speedContainer.appendChild(speedIcon);
  speedContainer.appendChild(speedStat);

  statsContainer.appendChild(hpContainer);
  statsContainer.appendChild(attackContainer);
  statsContainer.appendChild(defContainer);
  statsContainer.appendChild(speedContainer);

  typesContainer.appendChild(typesHeader);
  typesContainer.appendChild(typesList);
  //dummy_info["types"].map((type) => {
  //let pokemonType = document.createElement("li");
  //pokemonType.innerHTML = type;
  //typesContainer.appendChild(pokemonType);
  //});
  let pokemonType = document.createElement("li");
  pokemonType.innerHTML = pokeTipo;
  typesContainer.appendChild(pokemonType);

  mainInfo.appendChild(pokemonName);
  mainInfo.appendChild(sprite);

  pokemon.appendChild(mainInfo);
  pokemon.appendChild(typesContainer);
  pokemon.appendChild(statsContainer);

  container.appendChild(pokemon);
};

const createCard = () => {
  generateElements();
  assignPropierties();
  appendElements();
};
