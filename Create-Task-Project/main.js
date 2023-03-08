import "./style.css";

const URL = `https://pokeapi.co/api/v2/pokemon/`;
const start = document.querySelector("#start") 
const display = document.querySelector("#guess")
const number = () => Math.floor(Math.random() * 1010 + 1)
let blank = null;

const random = () => {
  const fullurl = URL + number()
  fetch(fullurl)
  .then((data) =>  data.json())
  .then((pokemon) => 
    present(pokemon.name, pokemon.sprites.front_default))
};

const present = (name, sprite) => {
  const fun = `<h2 class = "species">${name}</h2>
  <img class = "mon" src = "${sprite}" alt = "${name}">`;
  display.innerHTML = fun
  console.log(name, sprite)
}

function bk() {
  blank = display.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter: "_")).join('')
  document.getElementById('species').innerHTML = blank
}

start.addEventListener("click", random)

window.onload = () => {
  random()
}

function letters() {
  let key = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `<button class = "bn" id = `+ letter +` onClick = "handleGuess('`+ letter +`')">
    ` + letter + `
    </button> 
    `).join(''); 
  
  document.getElementById('board').innerHTML = key
}

letters();
bk();