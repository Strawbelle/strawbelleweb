// main.js – Control general de animaciones y comportamiento

window.addEventListener("DOMContentLoaded", () => {
  const mensajeBienvenida = document.createElement("div");
  mensajeBienvenida.id = "mensaje-bienvenida";

  mensajeBienvenida.innerHTML = `
    <img src="img/corona.png" alt="Corona">
    <span>Bienvenid@ a <strong>Strawbelle</strong> – Donde cada detalle está hecho para reinar 👑</span>
  `;

  document.body.appendChild(mensajeBienvenida);

  setTimeout(() => {
    mensajeBienvenida.classList.add("activo");
  }, 500);

  setTimeout(() => {
    mensajeBienvenida.classList.remove("activo");
    mensajeBienvenida.style.display = "none";
  }, 5000);
});

