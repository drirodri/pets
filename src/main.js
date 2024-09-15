import "./style.css";

// Building main

const main = document.querySelector("main");

const img = document.createElement("img");
img.setAttribute("src", "");

const buttonsDiv = document.createElement("div");
buttonsDiv.setAttribute("id", "buttons-div");

const btnsArray = ["Get random dog", "Get random cat", "Surprise me!"];
const btnsId = ["dog", "cat", "random"];

btnsArray.forEach((btn, index) => {
  const newButton = document.createElement("button");
  newButton.innerHTML = btn;
  newButton.setAttribute("id", btnsId[index]);
  buttonsDiv.appendChild(newButton);
});

main.appendChild(buttonsDiv);
main.appendChild(img);

const dogButton = document.getElementById("dog");
const getDogs = () => {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      img.setAttribute("src", data.message);
    });
};
const getCats = () => {
  return fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.url);
      img.setAttribute("src", data[0].url);
    });
};

dogButton.addEventListener("click", () => {
  getDogs();
});

const catButton = document.getElementById("cat");

catButton.addEventListener("click", () => {
  getCats();
});

const randomButton = document.getElementById("random");

randomButton.addEventListener("click", () => {
  const randomChoice = Math.random() < 0.5 ? getDogs : getCats;
  randomChoice();
});
