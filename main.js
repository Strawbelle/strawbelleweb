// main.js – Control general de animaciones y comportamiento

// 🟣 Animación de bienvenida con corona
window.addEventListener("DOMContentLoaded", () => {
  const mensajeBienvenida = document.createElement("div");
  mensajeBienvenida.id = "mensaje-bienvenida";

  mensajeBienvenida.innerHTML = `
    <img src="img/corona.png.png" alt="Corona">
    <span>Bienvenid@ a <strong>Strawbelle</strong> – Donde cada detalle está hecho para reinar 👑</span>
  `;

  document.body.appendChild(mensajeBienvenida);

  setTimeout(() => {
    mensajeBienvenida.classList.add("activo");
  }, 500); // inicio animación

  setTimeout(() => {
    mensajeBienvenida.classList.remove("activo");
    mensajeBienvenida.style.display = "none";
  }, 5000); // se oculta tras 5 segundos
});
