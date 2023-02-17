import "./style.css";

const URL = "https://pokeapi.co/api/v2/";

window.onload = () => {
  random();
};
const random = () => {
  console.log(fetch(URL));
  .then((response) => {
    console.log(response)
    console.log(response.json()
  })
};
