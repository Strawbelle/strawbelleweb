let carrito = [];

function cargarCarritoDesdeLocalStorage() {
  const datos = localStorage.getItem('carritoStrawbelle');
  if (datos) {
    carrito = JSON.parse(datos);
    actualizarCarrito();
  }
}

function guardarCarritoEnLocalStorage() {
  localStorage.setItem('carritoStrawbelle', JSON.stringify(carrito));
}

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  guardarCarritoEnLocalStorage();
  actualizarCarrito();
}

function eliminarItem(index) {
  carrito.splice(index, 1);
  guardarCarritoEnLocalStorage();
  actualizarCarrito();
}

function actualizarCarrito() {
  const carritoContenedor = document.getElementById('carrito');
  carritoContenedor.innerHTML = '';

  let total = 0;

  carrito.forEach((item, index) => {
    const itemHTML = document.createElement('div');
    itemHTML.innerHTML = `
      ${item.nombre} – ${item.precio.toFixed(2)} € 
      <button onclick="eliminarItem(${index})">Eliminar</button>
    `;
    carritoContenedor.appendChild(itemHTML);
    total += item.precio;
  });

  const totalHTML = document.createElement('p');
  totalHTML.innerHTML = `<strong>Total: ${total.toFixed(2)} €</strong>`;
  carritoContenedor.appendChild(totalHTML);
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío 🛒");
    return;
  }

  let mensaje = "Hola, quiero hacer este pedido:\n\n";
  let total = 0;

  carrito.forEach(item => {
    mensaje += `• ${item.nombre} – ${item.precio.toFixed(2)} €\n`;
    total += item.precio;
  });

  mensaje += `\nTotal: ${total.toFixed(2)} €`;

  const mensajeCodificado = encodeURIComponent(mensaje);
  const telefono = "34666338509"; // Tu número

  // Limpiar carrito después de enviar
  carrito = [];
  guardarCarritoEnLocalStorage();
  actualizarCarrito();

  // Abrir WhatsApp
  window.open(`https://wa.me/${telefono}?text=${mensajeCodificado}`, "_blank");
}

// Cargar carrito cuando se abre la página
window.onload = cargarCarritoDesdeLocalStorage;
