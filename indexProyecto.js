const produ = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  nombre: `Calzado ${i + 1}`,
  precio: (i + 1) * 10,  // Aquí corregí el precio para que no sea 0
  imagen: "Saved Pictures/BEBE.jpeg"
}));
const productos = [
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 55000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/BEBE.jpeg"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 55000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/BEBE1.jpeg"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/BEBE2.jpeg"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/BEBE3.jpeg"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/BEBE4.jpeg"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/NIÑA.webp"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/NIÑA1.webp"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/NIÑA2.jpg"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/NIÑA3.webp"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/NIÑA4.jfif"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/NIÑO.jpeg"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/NIÑO1.jpeg"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/NIÑO2.jpeg"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/NIÑO3.jpeg"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/NIÑO4.jpeg"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/DAMA.webp"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/DAMA1.webp"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/DAMA2.jfif"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/DAMA3.jfif"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/DAMA4.webp"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/HOMBRE.jpeg"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/HOMBRE1.jpeg"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/HOMBRE2.jpeg"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/HOMBRE3.jpeg"
  },
  {
    id: 1,
    nombre: `Calzado 1`,
    precio: 50000,  // Aquí corregí el precio para que no sea 0
    imagen: "Saved Pictures/HOMBRE4.jpeg"
  },
]

let carrito = [];
const productoscontainer = document.getElementById("productos-container");

// Función para renderizar los productos
function renderProductos() {
  const fragment = document.createDocumentFragment();
  productos.forEach(producto => {
    const colDiv = document.createElement("div");
    colDiv.className = "col-12 col-md-6 col-lg-4 col-xl-2 mb-4";
    colDiv.innerHTML = `
      <div class="card h-100">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">Precio: $${producto.precio}</p>
          <input type="number" min="1" value="1" class="form-control mb-2 product-quantity" data-id="${producto.id}">
          <button class="btn btn-primary w-100" data-id="${producto.id}">Agregar al carrito</button>
        </div>
      </div>
    `;
    fragment.appendChild(colDiv);
  });
  productoscontainer.appendChild(fragment);
}

// Event listener para agregar productos al carrito
productoscontainer.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    const productoId = parseInt(e.target.dataset.id);
    const quantityInput = document.querySelector(`.product-quantity[data-id="${productoId}"]`);
    const cantidad = parseInt(quantityInput.value);
    agregarAlCarrito(productoId, cantidad);
  }
});

// Función para agregar un producto al carrito
function agregarAlCarrito(productoId, cantidad) {
  const producto = productos.find(p => p.id === productoId);
  const productoEnCarrito = carrito.find(p => p.id === productoId);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad += cantidad;
  } else {
    carrito.push({ ...producto, cantidad });
  }
  actualizarCarrito();
}

// Función para actualizar el carrito en el modal
function actualizarCarrito() {
  const carritoContainer = document.getElementById("carrito-container");
  carritoContainer.innerHTML = carrito.map(producto => `
    <div class="carrito-item d-flex justify-content-between align-items-center mb-2">
      <p>${producto.nombre} - $${producto.precio} x ${producto.cantidad}</p>
      <div>
        <button onclick="cambiarCantidad(${producto.id}, -1)" class="btn btn-sm btn-secondary">-</button>
        <button onclick="cambiarCantidad(${producto.id}, 1)" class="btn btn-sm btn-secondary">+</button>
        <button onclick="eliminarDelCarrito(${producto.id})" class="btn btn-danger btn-sm">Eliminar</button>
      </div>
    </div>
  `).join("");

  const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  document.getElementById("carrito-total").innerText = `Total: $${total}`;
}

// Función para cambiar la cantidad de un producto en el carrito
function cambiarCantidad(productoId, cambio) {
  const producto = carrito.find(p => p.id === productoId);
  if (!producto) return;

  producto.cantidad += cambio;
  if (producto.cantidad <= 0) {
    eliminarDelCarrito(productoId);
  } else {
    actualizarCarrito();
  }
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(productoId) {
  carrito = carrito.filter(producto => producto.id !== productoId);
  actualizarCarrito();
}

// Función para finalizar la compra
function finalizarCompra() {
  const carritoModal = bootstrap.Modal.getInstance(document.getElementById("carritoModal"));
  carritoModal.hide();
  const finalizacionModal = new bootstrap.Modal(document.getElementById("finalizacionModal"));
  finalizacionModal.show();
}

// Función para completar el pedido
function completarPedido() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const direccion = document.getElementById("direccion").value;

  if (!nombre || !email || !direccion) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  alert(`¡Gracias por tu compra, ${nombre}! Te enviaremos un correo de confirmación a ${email}.`);
  carrito = [];
  actualizarCarrito();
  document.getElementById("form-finalizacion").reset();
  const finalizacionModal = bootstrap.Modal.getInstance(document.getElementById("finalizacionModal"));
  finalizacionModal.hide();
}

// Renderizar productos al cargar la página
renderProductos();
