/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = [" my homework", " the keys", " the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

let elementa = Math.floor(Math.random() * who.length);
let elementb = Math.floor(Math.random() * action.length);
let elementc = Math.floor(Math.random() * what.length);
let elementd = Math.floor(Math.random() * when.length);

let cambioa = who[elementa];
let cambiob = action[elementb];
let cambioc = what[elementc];
let cambiod = when[elementd];

let change = document.getElementById("excuse");
change.innerHTML = cambioa + " " + cambiob + cambioc + " " + cambiod;
