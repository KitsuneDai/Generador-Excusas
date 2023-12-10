/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console! :)");
};

let generateExcuse = () => {
  let pronombre = ["A", "The"];
  let sujeto = ["jogger", "dog", "driver", "comedian", "pincone"];
  let accion = ["took my", "eat my", "yelled at my", "stole my", "bite my"];
  let posesion = ["toe", "homework", "car", "hat"];
  let lugar = ["on the street", "in my house", "in my driveway"];

  let pronIndx = Math.floor(Math.random() * pronombre.length);
  let suIndx = Math.floor(Math.random() * sujeto.length);
  let accIndx = Math.floor(Math.random() * accion.length);
  let poseIndx = Math.floor(Math.random() * posesion.length);
  let lugIndx = Math.floor(Math.random() * lugar.length);

  return (
    pronombre[pronIndx] +
    " " +
    sujeto[suIndx] +
    " " +
    accion[accIndx] +
    " " +
    posesion[poseIndx] +
    " " +
    lugar[lugIndx] +
    "."
  );
};
