let correctAnswers = 0; //declaracion e inicializacion de la variable que va a contar la cantidad de preguntas correctas
let incorrectAnswers = 0;
let userName = "";

const contactForm = document.getElementsByClassName("contact_form");

function updateBlur() {
  contactForm[0].style.cssText =
    "backdrop-filter: blur(35px);-webkit-backdrop-filter: blur(35px);";
}

document.getElementById("startBtn").onclick = function (e) {
  userName = document.getElementById("nameInp").value;
  document.getElementById("nameH1").innerHTML =
    "Hola " + userName + ", iniciemos con las preguntas.";
  document.getElementById("welcomeDiv").style.display = "none";
  document.getElementById("greetingDiv").style.display = "block";
};

document.getElementById("continueBtn").onclick = function (e) {
  document.getElementById("greetingDiv").style.display = "none";
  document.getElementById("qstDiv1").style.display = "block";
  updateBlur();
};

document.getElementById("resultBtn1").onclick = function (e) {
  let selection = document.querySelector('input[name="question1"]:checked')
    .value;
  if (selection == 2) {
    correctAnswers = correctAnswers + 1;
  } else {
    incorrectAnswers = incorrectAnswers + 1;
  }
  document.getElementById("qstDiv1").style.display = "none";
  document.getElementById("qstDiv2").style.display = "block";
  updateBlur();
};

document.getElementById("resultBtn2").onclick = function (e) {
  let selection = document.querySelector('input[name="question2"]:checked')
    .value;
  if (selection == 1) {
    correctAnswers = correctAnswers + 1;
  } else {
    incorrectAnswers = incorrectAnswers + 1;
  }
  document.getElementById("qstDiv2").style.display = "none";
  document.getElementById("qstDiv3").style.display = "block";
  updateBlur();
};

document.getElementById("resultBtn3").onclick = function (e) {
  let selection = document.querySelector('input[name="question3"]:checked')
    .value;
  if (selection == 3) {
    correctAnswers = correctAnswers + 1;
  } else {
    incorrectAnswers = incorrectAnswers + 1;
  }
  document.getElementById("correctSpn").textContent = correctAnswers;
  document.getElementById("incorrectSpn").textContent = incorrectAnswers;

  document.getElementById("qstDiv3").style.display = "none";
  document.getElementById("resultFinal").style.display = "block";
  updateBlur();
};

document.getElementById("showBtn1").onclick = function (e) {
  let msg =
    "Respuesta correcta! \n Los perros tienen un sentido de la obligación hacia sus dueños y siempre están dispuestos a hacer cualquier cosa para satisfacerlos.";
  alert(msg);
};

document.getElementById("showBtn2").onclick = function (e) {
  let msg =
    "Respuesta correcta! \n La ballena azul es el animal más grande del planeta, con una longitud promedio de 25 metros y un peso de más de 200 toneladas. Su tamaño la convierte en el animal más grande que ha existido en la Tierra.";
  alert(msg);
};

document.getElementById("showBtn3").onclick = function (e) {
  let msg =
    "Respuesta correcta! \n El guepardo, es el felino más rápido del mundo, capaz de alcanzar velocidades de hasta 110 km/h.";
  alert(msg);
};

document.getElementById("playAgain").onclick = function (e) {
  correctAnswers = 0;
  incorrectAnswers = 0;
  document.getElementById("resultFinal").style.display = "none";
  document.getElementById("welcomeDiv").style.display = "block";
  updateBlur();
};
