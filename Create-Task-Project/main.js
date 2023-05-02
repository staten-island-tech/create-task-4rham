import "./style.css";

const URL = `https://pokeapi.co/api/v2/pokemon/`;
const start = document.querySelector("#start");
const display = document.querySelector("#guess");
const number = () => Math.floor(Math.random() * 1010 + 1);
var na = document.insert.g.value;

const random = () => {
  const fullurl = URL + number();
  fetch(fullurl)
    .then((data) => data.json())
    .then((pokemon) => present(pokemon.name, pokemon.sprites.front_default));
};

const present = (name, sprite) => {
  const fun = `<h2 class = "species">${name}</h2>
  <img class = "mon" src = "${sprite}" alt = "${name}">`;
  display.innerHTML = fun;
  console.log(name, sprite);
};

const answer = (name) => {
  const fun = `<h2 class = "species">${name}</h2>`;
  display.innerHTML = fun;
  console.log(name);
};

window.onload = () => {
  random();
};
const empty = document.getElementById('#but')

function right() {
  if (empty == answer) {
    alert('Wrong')
  } else {
    alert('Correct')
  }
    console.log
    window.onload = () => {
      random();
    };
}

right()