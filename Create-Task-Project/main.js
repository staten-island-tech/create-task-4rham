import "./style.css";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=1010";

window.onload = () => {
  random()
}

const random = () => {
  fetch(URL)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
};

random = (pokemon) => {
  document.getElementById("prompt").innerText = `${pokemon.results[0].name}`
  document.getElementById("img").innerText = `${pokemon.results[0].url.sprites["front_default"]}`
}