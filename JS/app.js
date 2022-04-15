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

  pokemonName.innerHTML = dummy_info["pokemonName"];

  sprite.src = dummy_info["image"];

  typesHeader.innerHTML = "Types:";

  hpIcon.src = "../IMG/hp.png";
  hpStat.innerHTML = dummy_info["hp"];
  hpIcon.classList.add("stat-icon");

  attackIcon.src = "../IMG/attack.png";
  attackStat.innerHTML = dummy_info["attack"];
  attackIcon.classList.add("stat-icon");

  defIcon.src = "../IMG/defense.png";
  defStat.innerHTML = dummy_info["def"];
  defIcon.classList.add("stat-icon");

  speedIcon.src = "../IMG/speed.png";
  speedStat.innerHTML = dummy_info["speed"];
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
  dummy_info["types"].map((type) => {
    let pokemonType = document.createElement("li");
    pokemonType.innerHTML = type;
    typesContainer.appendChild(pokemonType);
  });

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

let i = 0;
while (i < 12) {
  createCard();
  i++;
}
