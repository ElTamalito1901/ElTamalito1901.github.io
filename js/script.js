document.addEventListener("DOMContentLoaded", function () {
  // 1. Ocultar botones si el usuario está logueado
  const logueado = localStorage.getItem("usuarioLogueado") === "true";

  const btnRegistrar = document.getElementById("btnRegistrar");
  const btnIngresar = document.getElementById("btnIngresar");
  const opcionPerfil = document.getElementById("opcionPerfil"); // <- ID del li de Perfil
  document.body.style.overflow = "auto";

  if (btnRegistrar && btnIngresar) {
    if (logueado) {
      btnRegistrar.style.display = "none";
      btnIngresar.textContent = "Cerrar sesión";
      btnIngresar.href = "#";
      btnIngresar.onclick = function () {
        localStorage.removeItem("usuarioLogueado");
        window.location.href = "../html/index.html";
      };

      if (opcionPerfil) opcionPerfil.style.display = "block"; // Mostrar perfil si está logueado

    } else {
      btnRegistrar.style.display = "inline";
      btnIngresar.textContent = "Ingresar";
      btnIngresar.onclick = function () {
        window.location.href = "../html/login.html";
      };

      if (opcionPerfil) opcionPerfil.style.display = "none"; // Ocultar perfil si NO está logueado
    }
  }
 
  document.addEventListener("DOMContentLoaded", function () {
  const logueado = localStorage.getItem("usuarioLogueado") === "true";
  const perfil = document.getElementById("opcionPerfil");

  if (perfil) {
    perfil.style.display = logueado ? "block" : "none";
  }

  // Aquí puedes poner otros controles, como el de ocultar los botones de ingresar/registrar
});


  // 2. Cambio de imagen automático
  const imagenes = [
    "../imagenes/imagen1.jpg",
    "../imagenes/imagen2.jpg",
    "../imagenes/imagen3.jpg"
  ];
  let indiceActual = 0;
  function cambiarImagen(direccion) {
    indiceActual = (indiceActual + direccion + imagenes.length) % imagenes.length;
    document.getElementById("imagen-dinamica").src = imagenes[indiceActual];
  }
  setInterval(() => cambiarImagen(1), 5000);

  // 3. Modal de Pollo
  const btnPollo = document.getElementById('btnPolloFamiliar');
  const modalPollo = document.getElementById('modalPollo');
  const cerrarPollo = document.querySelector('#modalPollo .cerrar');

  if (btnPollo && modalPollo && cerrarPollo) {
    btnPollo.onclick = () => modalPollo.style.display = "block";
    cerrarPollo.onclick = () => modalPollo.style.display = "none";
    window.onclick = (e) => {
      if (e.target === modalPollo) modalPollo.style.display = "none";
    };
  }

  // 4. Menú lateral
  document.getElementById("overlay").addEventListener("click", closeSidebar);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeSidebar();
      closeCart();
    }
  });

  // 5. Ver más / Ver menos categorías
  const btnVerMas = document.querySelector('.boton-ver-mas');
  const extraCategorias = document.querySelector('.categorias-extra');
  if (btnVerMas && extraCategorias) {
    btnVerMas.onclick = () => {
      const visible = extraCategorias.style.display === 'block';
      extraCategorias.style.display = visible ? 'none' : 'block';
      btnVerMas.innerHTML = visible ? '⬇ Ver más' : '⬆ Ver menos';
    };
  }

  // 6. Botón cerrar sesión (si existe)
  const cerrarSesion = document.getElementById("cerrarSesionBtn");
  if (cerrarSesion) {
    cerrarSesion.addEventListener("click", function () {     
      localStorage.removeItem("usuarioLogueado");
      localStorage.removeItem("datosUbicacion"); // <-- Esto es lo nuevo
      window.location.href = "../html/index.html";
    });
  }

  // Mostrar ubicación en el carrito lateral (sidecart)
const spanSidecart = document.getElementById("ubicacion-sidecart");

if (spanSidecart) {
  let datosUbicacion = null;

  const correo = localStorage.getItem("correoUsuario");
  if (correo) {
    const guardado = localStorage.getItem(`ubicacion_${correo}`);
    if (guardado) {
      datosUbicacion = JSON.parse(guardado);
    }
  } else {
    const predeterminada = localStorage.getItem("ubicacionPredeterminada");
    if (predeterminada) {
      // Si solo hay distrito, muéstralo así
      datosUbicacion = { distrito: predeterminada };
    }
  }

  if (datosUbicacion) {
    const { urbanizacion = "", manzana = "", numeroCalle = "", distrito = "" } = datosUbicacion;
    let ubicacionTexto = "";

    if (urbanizacion) ubicacionTexto += `${urbanizacion}`;
    if (manzana) ubicacionTexto += `, ${manzana}`;
    if (numeroCalle) ubicacionTexto += `, ${numeroCalle}`;
    if (distrito) ubicacionTexto += `, ${distrito}`;

    spanSidecart.textContent = ubicacionTexto || "Ubicación";
  } else {
    spanSidecart.textContent = "Ubicación";
  }
}

});

// 7 Sidebar
function openMenu() {
  document.querySelector(".sidebar").style.width = "250px";
  document.getElementById("overlay").style.display = "block";
}
function closeSidebar() {
  document.querySelector(".sidebar").style.width = "0";
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "auto";
}

// 8 Carrito

 let quantity = 1;
        const basePrice = 59.90;

        function toggleCart() {
            const sidebar = document.getElementById('cartSidebar');
            const overlay = document.getElementById('overlay');
            
            sidebar.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeCart() {
            const sidebar = document.getElementById('cartSidebar');
            const overlay = document.getElementById('overlay');
            
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function updateQuantity(change) {
            quantity = Math.max(1, quantity + change);
            document.getElementById('quantity').textContent = quantity;
            
            const newTotal = (basePrice * quantity).toFixed(2);
            document.getElementById('totalText').textContent = `TOTAL S/${newTotal}`;
            document.querySelector('.checkout-btn').textContent = `IR A PAGAR - S/${newTotal}`;
        }

        // Cerrar con Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeCart();
            }
        });

function cerrarSidecart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('overlay');
  
  // Guardar estado de carrito vacío si deseas mantenerlo
  localStorage.setItem("carritoVacio", "true");

  // Cerrar visualmente el sidecart sin redirigir
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// 9. OPCIONES DE UBICACIONES //
 
// === MODAL DE UBICACIÓN ===

// Abrir el modal
function abrirModalUbicacion() {
  document.getElementById('modalUbicacion').style.display = 'block';
}

// Cerrar el modal
function cerrarModalUbicacion() {
  document.getElementById('modalUbicacion').style.display = 'none';
}

// Ejecutar cuando el DOM cargue
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formUbicacion");
  const correo = localStorage.getItem("correoUsuario");

  // Función para mostrar ubicación guardada
  function mostrarUbicacionGuardada() {
    if (!correo) {
      const ubicacionPredeterminada = localStorage.getItem("ubicacionPredeterminada");
    if (ubicacionPredeterminada) {
    document.getElementById("ubicacion-actual").textContent = ubicacionPredeterminada;
  }
}

    const key = `ubicacion_${correo}`;
    const guardado = localStorage.getItem(key);

    if (guardado) {
      const ubicacion = JSON.parse(guardado);
      document.getElementById("ubicacion-actual").textContent =
        ubicacion.distrito || "Ubicación";
    } else {
      document.getElementById("ubicacion-actual").textContent = "Ubicación";
    }
  }

  mostrarUbicacionGuardada(); // Mostrar al cargar

  if (!form || !correo) return; // Si no hay usuario, no sigue

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const datos = {
      distrito: document.getElementById("distrito").value,
      urbanizacion: document.getElementById("urbanizacion").value,
      manzana: document.getElementById("manzana").value,
      numeroCalle: document.getElementById("numeroCalle").value,
      referencia: document.getElementById("referencia").value,
    };

    const key = `ubicacion_${correo}`;
    localStorage.setItem(key, JSON.stringify(datos));

    actualizarUbicacionSidecart(datos);

    document.getElementById("ubicacion-actual").textContent =
      datos.distrito || "Ubicación";

    // Mensaje de éxito
    const mensaje = document.getElementById("mensajeExito");
    mensaje.style.display = "block";

    setTimeout(() => {
  mensaje.style.display = "none";
  cerrarModalUbicacion();

  // ✅ Actualizar el header
  if (ubicacionActual) ubicacionActual.textContent = datos.distrito;

  // ✅ Actualizar el carrito lateral (sidecart)
 actualizarUbicacionSidecart(datos);

}, 1500);
  });
});


//OPCIONES DE UBICACIONES - FIN//


//NOMBRE DE USUARIO PARA EL HEADER //
document.addEventListener("DOMContentLoaded", function () {
  const logueado = localStorage.getItem("usuarioLogueado") === "true";
  const nombre = localStorage.getItem("nombreUsuario");

  const usuarioNombre = document.getElementById("usuario-nombre");
  const usuarioMenu = document.getElementById("usuario-menu");
  const flechaUsuario = document.getElementById("flecha-usuario");
  const btnUsuario = document.getElementById("btnUsuario");

  if (logueado && nombre) {
    usuarioNombre.textContent = nombre;

    btnUsuario.addEventListener("click", function () {
      const visible = usuarioMenu.style.display === "block";
      usuarioMenu.style.display = visible ? "none" : "block";
      flechaUsuario.src = visible ? "../imagenes/flechaabajo.png" : "../imagenes/flechaarriba.png";
    });
  } else {
    btnUsuario.addEventListener("click", function () {
      window.location.href = "../html/login.html";
    });
  }

  // Cerrar el menú al hacer clic fuera
  window.addEventListener("click", function (event) {
    const container = document.getElementById("usuario-container");
    if (!container.contains(event.target)) {
      usuarioMenu.style.display = "none";
      if (flechaUsuario) flechaUsuario.src = "../imagenes/flechaabajo.png";
    }
  });

  // Cerrar sesión
 const cerrarSesion = document.getElementById("cerrarSesion");
if (cerrarSesion) {
  cerrarSesion.addEventListener("click", function () {
    const correo = localStorage.getItem("correoUsuario"); // ✅ necesario
    if (correo) {
      localStorage.removeItem(`ubicacion_${correo}`);
    }
    localStorage.removeItem("usuarioLogueado");
    localStorage.removeItem("nombreUsuario");
    localStorage.removeItem("correoUsuario");
   localStorage.removeItem("ubicacionPredeterminada"); // 🔥 Limpieza aquí
    window.location.href = "../html/login.html";
    });
  }
});

//NOMBRE DE USUARIO PARA EL HEADER - FIN //

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registroForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se envíe el formulario

    // Captura los valores
    const nombre = form.nombre.value.trim();
    const apellido = form.apellido.value.trim();
    const correo = form.correo.value.trim();
    const telefono = form.telefono.value.trim();
    const fechaNacimiento = form.fecha_nacimiento.value;
    const genero = form.genero.value;
    const clave = form.clave.value;
    const confirmarClave = form.confirmar_clave.value;

    // Validación de contraseñas
    if (clave !== confirmarClave) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // Guardar en localStorage
    const usuario = {
      nombre,
      apellido,
      correo,
      telefono,
      fechaNacimiento,
      genero,
      clave // ⚠️ No se recomienda guardar contraseñas en texto plano
    };

    localStorage.setItem("usuarioDatos", JSON.stringify(usuario));
    localStorage.setItem("usuarioLogueado", "true");
    localStorage.setItem("correoUsuario", correo);

    // Redirige a la página principal u otra deseada
    window.location.href = "index.html";
  });
});


function actualizarUbicacionSidecart(datos) {
  const spanSidecart = document.getElementById("ubicacion-sidecart");
  if (!spanSidecart || !datos) return;

  const partes = [
    datos.urbanizacion,
    datos.manzana,
    datos.numeroCalle,
    datos.distrito,
  ].filter(Boolean);

  spanSidecart.textContent = partes.length ? partes.join(", ") : "Ubicación";
}

document.addEventListener("DOMContentLoaded", function () {
  // Verifica si estamos en la página principal
  const cartItem = document.querySelector(".cart-item");
  const restaurantInfo = document.querySelector(".restaurant-info");
  const totalText = document.getElementById("totalText");
  const btnPagar = document.getElementById("btnPagar");
  const emptyCartMessage = document.getElementById("emptyCartMessage");
  const clearCartBtn = document.querySelector(".clear-cart-btn");

  // Ocultar contenido del carrito y mostrar solo "Ir a comprar"
  if (cartItem) cartItem.style.display = "none";
  if (restaurantInfo) restaurantInfo.style.display = "none";
  if (totalText) totalText.style.display = "none";
  if (btnPagar) btnPagar.style.display = "none";
  if (clearCartBtn) clearCartBtn.style.display = "none";
  if (emptyCartMessage) emptyCartMessage.style.display = "block";
});

function agregarAlCarrito() {
  // Mostrar el sidecart
  toggleCart();

  // Mostrar elementos ocultos
  const cartItem = document.querySelector(".cart-item");
  const restaurantInfo = document.querySelector(".restaurant-info");
  const totalText = document.getElementById("totalText");
  const btnPagar = document.getElementById("btnPagar");
  const clearCartBtn = document.querySelector(".clear-cart-btn");
  const emptyCartMessage = document.getElementById("emptyCartMessage");
  const btnIrAComprar = document.getElementById("btnIrAComprar");

  // Mostrar contenido
  if (cartItem) cartItem.style.display = "flex";
  if (restaurantInfo) restaurantInfo.style.display = "flex";
  if (totalText) totalText.style.display = "block";
  if (btnPagar) {
    btnPagar.style.display = "inline-block";
    btnPagar.textContent = `IR A PAGAR - S/${(basePrice * quantity).toFixed(2)}`;
  }
  if (clearCartBtn) clearCartBtn.style.display = "inline-block";
  if (emptyCartMessage) emptyCartMessage.style.display = "none";

  // Ocultar botón "Ir a comprar" si existe
  if (btnIrAComprar) btnIrAComprar.style.display = "none";

  // Marcar como no vacío
  localStorage.setItem("carritoVacio", "false");
}
