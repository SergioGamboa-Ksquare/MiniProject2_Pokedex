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
let pokemonUrl="";
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
let pokeUrl="";

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
  getPokemonData("https://pokeapi.co/api/v2/pokemon/charizard", 'https://www.wikidex.net/wiki/Charizard');
  getPokemonData("https://pokeapi.co/api/v2/pokemon/pikachu",'https://www.wikidex.net/wiki/Pikachu');
  getPokemonData("https://pokeapi.co/api/v2/pokemon/eevee", 'https://www.wikidex.net/wiki/Eevee');
  getPokemonData("https://pokeapi.co/api/v2/pokemon/charmander",'https://www.wikidex.net/wiki/Charmander');
  getPokemonData("https://pokeapi.co/api/v2/pokemon/squirtle", 'https://www.wikidex.net/wiki/Squirtle');
  getPokemonData("https://pokeapi.co/api/v2/pokemon/metapod", 'https://www.wikidex.net/wiki/Metapod');
  getPokemonData("https://pokeapi.co/api/v2/pokemon/poliwag", 'https://www.wikidex.net/wiki/Poliwag');
  getPokemonData("https://pokeapi.co/api/v2/pokemon/psyduck", 'https://www.wikidex.net/wiki/Psyduck');
  getPokemonData("https://pokeapi.co/api/v2/pokemon/persian", 'https://www.wikidex.net/wiki/Persian');
  getPokemonData("https://pokeapi.co/api/v2/pokemon/vulpix", 'https://www.wikidex.net/wiki/Vulpix');
  getPokemonData("https://pokeapi.co/api/v2/pokemon/nidorina", 'https://www.wikidex.net/wiki/Nidorina');
  getPokemonData("https://pokeapi.co/api/v2/pokemon/sandslash", 'https://www.wikidex.net/wiki/Sandslash');
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
  pokemonUrl= document.createElement('a')
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

  pokemonUrl.href=pokeUrl;
  pokemonUrl.innerHTML = pokeName;

  
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
  pokemonName.appendChild(pokemonUrl);
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
