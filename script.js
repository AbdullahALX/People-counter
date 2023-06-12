let count = 0;
let incrText = document.getElementById("counter");
let saveBtn = 0;
let welcomeText = document.getElementById("welcom-el");
let prevEnt = document.getElementById("prev-ent");
let countTotal = 0;
let nameUser;
const ul = document.querySelector("ul");
const input = document.getElementById("username");

function setName() {
  console.log(input);
  welcomeText += input;
}

function increment() {
  count += 1;
  incrText.innerText = count;
}

function save() {
  countTotal += 1;
  saveBtn = count;
  prevEnt.innerText += " " + saveBtn + ",";

  count = 0;
  incrText.innerText = count;

  if (countTotal == 7) {
    prevEnt.innerText = "Previous entries :";
    countTotal = 0;
  }
}

function darkMode() {
  if (
    document.getElementById("dark-mode").checked ||
    document.getElementById("styleSh").href == "styleDark.css"
  ) {
    document.getElementById("styleSh").href = "styleDark.css";
  } else {
    document.getElementById("styleSh").href = "style.css";
  }
}
