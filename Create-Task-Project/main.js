import "./style.css";

const URL = `https://pokeapi.co/api/v2/pokemon/`;
const start = document.querySelector("#start") 
const display = document.querySelector("#guess")
const number = () => Math.floor(Math.random() * 1010 + 1)
let blank = null;
let lt

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

//function bk() {
//  blank = species.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter: " _ ")).join('');
//  document.getElementById('guess').innerHTML = blank
//}

//const smth = function (sm) {
//  
//}

function letters() {
  let key = 'abcdefghijklmnopqrstuvwxyz1234567890-'.split('').map(letter =>
    `<button class = "bn" id = `+ letter +` onClick = "stat('`+ letter +`')">
    ` + letter + `
    </button> 
    `).join(''); 
  
  document.getElementById('board').innerHTML = key
}

lt = document.querySelector('bn')


//const wrd = random("#name")
//for (let i =0; i < wrd.length; i++) {
//  const blank = `<h2 class = "species"> _ </h2>`
//  display.insertAdjacentHTML('beforeend', blank)
//}

letters();


start.addEventListener("click", random);

window.onload = () => {
  random()
}