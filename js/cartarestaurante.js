function openMenu() {
  document.querySelector(".sidebar").style.display = "block";
}

function closeMenu() {
  document.querySelector(".sidebar").style.display = "none";
}

function toggleMenu() {
  const menu = document.getElementById("ubicacion-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function irAInicio() {
  window.location.href = "../html/index.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const nombre = localStorage.getItem("restauranteNombre");
  const categoria = localStorage.getItem("restauranteCategoria");
  const icono = localStorage.getItem("restauranteIcono");

  // Llenar cabecera
  document.querySelector(".restaurant-name").textContent = nombre;
  document.querySelector(".restaurant-type").textContent = categoria;
  document.querySelector(".restaurant-logo").textContent = icono?.includes("png") ? "" : icono;

  if (icono && icono.includes("png")) {
    const logo = document.querySelector(".restaurant-logo");
    logo.style.backgroundImage = `url('${icono}')`;
    logo.style.backgroundSize = 'cover';
    logo.textContent = "";
  }

  const tituloMenu = document.querySelector(".menu-header");
  if (tituloMenu && nombre) {
    tituloMenu.textContent = `Menú de ${nombre}`;
  }

  // === Menús por restaurante ===
  const menusPorRestaurante = {
    "McDonald's": [
      {
    emoji: "🍔",
    nombre: "McCombo Clásico",
    descripcion: "1 Big Mac + papas medianas + gaseosa de 500ml",
    precio: "S/25.90"
    },
    {
    emoji: "🍟",
    nombre: "Papas Grandes",
    descripcion: "Papas fritas crocantes, tamaño grande",
    precio: "S/9.90"
    },
    {
  emoji: "🥤",
  nombre: "Coca-Cola Mediana",
  descripcion: "Gaseosa helada 500ml",
  precio: "S/6.90"
}
    ],
    "Bembos": [
      {
  emoji: "🍔",
  nombre: "Hamburguesa Clásica",
  descripcion: "Hamburguesa con lechuga, tomate, queso y papas",
  precio: "S/22.90"
},
{
  emoji: "🍟",
  nombre: "Papas Bembos",
  descripcion: "Porción mediana de papas fritas",
  precio: "S/7.50"
},
{
  emoji: "🥤",
  nombre: "Bebida Mediana",
  descripcion: "Gaseosa helada 500ml",
  precio: "S/6.50"
}
    ],
"KFC": [
      {
  emoji: "🍗",
  nombre: "Bucket 8 piezas",
  descripcion: "8 piezas de pollo crujiente con 2 guarniciones y gaseosa",
  precio: "S/59.90"
},
{
  emoji: "🥔",
  nombre: "Puré + Ensalada",
  descripcion: "Puré de papa con gravy + ensalada fresca",
  precio: "S/14.90"
},
{
  emoji: "🥤",
  nombre: "Pepsi Mediana",
  descripcion: "Gaseosa helada 500ml",
  precio: "S/5.90"
}
    ],

    "Popeyes": [
    {
      emoji: "🍗",
      nombre: "Combo Popeyes Clásico",
      descripcion: "2 piezas de pollo frito + papas + gaseosa",
      precio: "S/19.90"
    },
    {
      emoji: "🍔",
      nombre: "Sandwich Cajún",
      descripcion: "Sándwich estilo cajún con pollo crocante",
      precio: "S/17.90"
    },
    {
      emoji: "🍟",
      nombre: "Papas Cajún",
      descripcion: "Papas sazonadas estilo cajún medianas",
      precio: "S/8.50"
    },
    {
      emoji: "🥤",
      nombre: "Refresco Grande",
      descripcion: "Bebida de tu elección 700ml",
      precio: "S/6.90"
    },
    {
      emoji: "🍰",
      nombre: "Pie de Manzana",
      descripcion: "Postre frito relleno de manzana dulce",
      precio: "S/4.90"
    }
  ],

  "Papa John's": [
  {
    emoji: "🍕",
    nombre: "Pizza Pepperoni Grande",
    descripcion: "Pizza grande con extra pepperoni y queso mozzarella",
    precio: "S/49.90"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Suprema Familiar",
    descripcion: "Pizza familiar con jamón, champiñones, pimiento y cebolla",
    precio: "S/59.90"
  },
  {
    emoji: "🧄",
    nombre: "Pan de Ajo con Queso",
    descripcion: "Pan horneado con mantequilla de ajo y queso derretido",
    precio: "S/14.90"
  },
  {
    emoji: "🥤",
    nombre: "Gaseosa 1.5L",
    descripcion: "Gaseosa helada para compartir",
    precio: "S/8.50"
  },
  {
    emoji: "🍗",
    nombre: "Alitas BBQ (6 unidades)",
    descripcion: "Alitas de pollo bañadas en salsa BBQ",
    precio: "S/22.90"
  }
],
  "Subway": [
  {
    emoji: "🥪",
    nombre: "Sub de Pollo Teriyaki",
    descripcion: "Sándwich de pollo en salsa teriyaki con vegetales a elección",
    precio: "S/19.90"
  },
  {
    emoji: "🥪",
    nombre: "Sub Italiano BMT",
    descripcion: "Salami, pepperoni, jamón y vegetales frescos en pan artesanal",
    precio: "S/21.90"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Veggie",
    descripcion: "Mix de lechugas, tomates, pepinillos y zanahoria rallada",
    precio: "S/12.90"
  },
  {
    emoji: "🥤",
    nombre: "Bebida Refrescante",
    descripcion: "Bebida helada a elección (500ml)",
    precio: "S/5.90"
  },
  {
    emoji: "🍪",
    nombre: "Cookie de Chocolate",
    descripcion: "Galleta suave con chispas de chocolate",
    precio: "S/3.50"
  }
],
"Chinatown": [
  {
    emoji: "🍚",
    nombre: "Arroz Chaufa Especial",
    descripcion: "Arroz chaufa con pollo, cerdo, langostinos y tortilla",
    precio: "S/24.90"
  },
  {
    emoji: "🥟",
    nombre: "Wantán Frito",
    descripcion: "6 unidades de wantán crocante con salsa agridulce",
    precio: "S/9.90"
  },
  {
    emoji: "🍜",
    nombre: "Tallarín Saltado con Pollo",
    descripcion: "Tallarines orientales salteados con verduras y pollo",
    precio: "S/19.90"
  },
  {
    emoji: "🍢",
    nombre: "Pollo Tipakay",
    descripcion: "Filetes de pollo empanizado en salsa agridulce con piña",
    precio: "S/21.50"
  },
  {
    emoji: "🥠",
    nombre: "Galleta de la Suerte",
    descripcion: "Crujiente galleta con mensaje sorpresa",
    precio: "S/2.00"
  }
],

"Fridays": [
  {
    emoji: "🥩",
    nombre: "Jack Daniel’s Ribs",
    descripcion: "Costillas de cerdo con salsa Jack Daniel’s, papas fritas y ensalada",
    precio: "S/49.90"
  },
  {
    emoji: "🍔",
    nombre: "Fridays Cheeseburger",
    descripcion: "Hamburguesa con queso cheddar, tocino, cebolla caramelizada y papas",
    precio: "S/34.90"
  },
  {
    emoji: "🍤",
    nombre: "Shrimp Platter",
    descripcion: "Langostinos empanizados con dip tártara y papas fritas",
    precio: "S/42.50"
  },
  {
    emoji: "🥗",
    nombre: "Chicken Caesar Salad",
    descripcion: "Ensalada César con pollo a la parrilla y crutones",
    precio: "S/28.00"
  },
  {
    emoji: "🍰",
    nombre: "Brownie con Helado",
    descripcion: "Brownie tibio con bola de helado y salsa de chocolate",
    precio: "S/15.90"
  }
],

"Dunkin'": [
  {
    emoji: "🍩",
    nombre: "Caja de Donas (6 unidades)",
    descripcion: "6 donas surtidas clásicas con glaseado y relleno",
    precio: "S/22.00"
  },
  {
    emoji: "☕",
    nombre: "Café Americano Mediano",
    descripcion: "Café recién hecho, ideal para llevar",
    precio: "S/6.00"
  },
  {
    emoji: "🥯",
    nombre: "Bagel con Queso Crema",
    descripcion: "Bagel tostado con abundante queso crema",
    precio: "S/9.50"
  },
  {
    emoji: "🥤",
    nombre: "Dunkin' Frozen",
    descripcion: "Bebida frappé congelada de café o vainilla",
    precio: "S/11.90"
  },
  {
    emoji: "🍪",
    nombre: "Galleta de Chocolate",
    descripcion: "Galleta grande con trozos de chocolate",
    precio: "S/4.90"
  }
],

"Rockys": [
  {
    emoji: "🍗",
    nombre: "Pollo Entero Clásico",
    descripcion: "1 pollo a la brasa + papas + ensalada + gaseosa de 1.5L",
    precio: "S/69.90"
  },
  {
    emoji: "🍟",
    nombre: "Papas Rústicas",
    descripcion: "Papas fritas gruesas con piel, ideales para compartir",
    precio: "S/9.90"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Mixta",
    descripcion: "Fresca mezcla de lechuga, zanahoria y tomate con aderezo",
    precio: "S/7.50"
  },
  {
    emoji: "🥤",
    nombre: "Gaseosa Personal",
    descripcion: "Botella personal de 500ml, varias opciones",
    precio: "S/4.50"
  },
  {
    emoji: "🍰",
    nombre: "Torta Helada",
    descripcion: "Porción de torta helada clásica de la casa",
    precio: "S/8.90"
  }
]



};

  const menuContainer = document.querySelector(".menu-items");
  menuContainer.innerHTML = ""; // Limpiar anterior

  const menuData = menusPorRestaurante[nombre]; // nombre viene de localStorage

  if (menuContainer && menuData) {
    menuData.forEach(plato => {
      const item = document.createElement("div");
      item.className = "menu-item";
      item.innerHTML = `
        <div style="width: 80px; height: 80px; border-radius: 8px; background: #fff5f0; display: flex; align-items: center; justify-content: center; font-size: 30px;">
          ${plato.emoji}
        </div>
        <div class="menu-content">
          <h3 class="menu-name">${plato.nombre}</h3>
          <p class="menu-desc">${plato.descripcion}</p>
          <div class="menu-footer">
            <span class="price">${plato.precio}</span>
            <button class="add-btn">AGREGAR AL CARRITO</button>
          </div>
        </div>
      `;
      menuContainer.appendChild(item);
    });
  } else {
    menuContainer.innerHTML = `<p style="padding: 10px;">No hay menú disponible para este restaurante.</p>`;
  }
});

// === Reseñas de ejemplo por restaurante ===
const reseñasPorRestaurante = {
  "McDonald's": [
    {
      nombre: "Luis M.",
      fecha: "2025-06-20",
      texto: "¡Me encantó! La hamburguesa llegó caliente y con buena presentación."
    },
    {
      nombre: "Carla V.",
      fecha: "2025-06-19",
      texto: "El servicio fue rápido y el combo estaba completo. Muy bien."
    }
  ],
  "Bembos": [
      {
    nombre: "Andrés Q.",
    fecha: "2025-06-18",
    texto: "Me gustó el sabor de la hamburguesa, pero la entrega tardó un poco."
  },
  {
    nombre: "Lucía R.",
    fecha: "2025-06-19",
    texto: "¡Delicioso! Las papas estaban crujientes y la bebida bien fría."
  },
  {
    nombre: "Carlos M.",
    fecha: "2025-06-17",
    texto: "Muy buena presentación. El pan de la hamburguesa estaba suave."
  },  
],
  "KFC": [
    {
      nombre: "Juan C.",
      fecha: "2025-06-18",
      texto: "Buen sabor y entrega puntual. Las papas podrían mejorar."
    }
  ],

  "Popeyes": [
  {
    nombre: "Valeria C.",
    fecha: "2025-06-19",
    texto: "El pollo estaba crocante y sabroso. Me encantó el combo spicy."
  },
  {
    nombre: "Miguel H.",
    fecha: "2025-06-18",
    texto: "Llegó caliente y a tiempo. La bebida estaba bien fría. Muy buen servicio."
  },
  {
    nombre: "Soledad M.",
    fecha: "2025-06-17",
    texto: "Buen sabor, pero las papas estaban algo frías. Igual volveré a pedir."
  }
  ],
  "Papa John's": [
  {
    nombre: "Daniel A.",
    fecha: "2025-06-19",
    texto: "La pizza llegó en su punto. Masa suave y mucho queso, muy recomendable."
  },
  {
    nombre: "Lucía G.",
    fecha: "2025-06-18",
    texto: "Buena atención y la pizza familiar estaba deliciosa. Volveré a pedir pronto."
  }
  ],
  "Subway": [
  {
    nombre: "Mariana L.",
    fecha: "2025-06-20",
    texto: "El sándwich de pollo teriyaki estaba muy fresco. Ideal para una comida ligera."
  },
  {
    nombre: "Carlos E.",
    fecha: "2025-06-19",
    texto: "Buena variedad de ingredientes y atención rápida. Me encantó la opción saludable."
  }
],
"Chinatown": [
  {
    nombre: "Lucía Z.",
    fecha: "2025-06-20",
    texto: "El arroz chaufa estaba delicioso y bien servido. ¡Volveré pronto!"
  },
  {
    nombre: "Renzo P.",
    fecha: "2025-06-18",
    texto: "Buen sabor y llegó caliente. El tallarín saltado muy sabroso."
  }
],
"Fridays": [
  {
    nombre: "Mariela V.",
    fecha: "2025-06-19",
    texto: "El ambiente y la comida siempre me encantan. El combo Jack Daniels estuvo espectacular."
  },
  {
    nombre: "Eduardo T.",
    fecha: "2025-06-17",
    texto: "Buena atención y hamburguesa jugosa. El postre llegó un poco derretido, pero igual rico."
  }
],
"Dunkin'": [
  {
    nombre: "Lucía F.",
    fecha: "2025-06-20",
    texto: "Las donas estaban frescas y deliciosas. El café, como siempre, muy bueno."
  },
  {
    nombre: "Kevin M.",
    fecha: "2025-06-18",
    texto: "Buen sabor y buena presentación. Ideal para un desayuno rápido."
  }
],
"Rockys": [
  {
    nombre: "Valeria T.",
    fecha: "2025-06-20",
    texto: "El pollo a la brasa de Rockys sigue siendo uno de los mejores del Perú. ¡Muy recomendable!"
  },
  {
    nombre: "Jorge A.",
    fecha: "2025-06-19",
    texto: "Sabor tradicional peruano que no decepciona. Las papas estaban bien crocantes."
  }
]
  // Agrega más reseñas por restaurante si lo deseas
};

const nombreRestaurante = localStorage.getItem("restauranteNombre");
const listaReseñas = document.querySelector(".reviews-list");


// Limpiar reseñas anteriores
listaReseñas.innerHTML = "";

// Insertar reseñas si existen
if (nombreRestaurante && reseñasPorRestaurante[nombreRestaurante]) {
  reseñasPorRestaurante[nombreRestaurante].forEach((res) => {
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `
      <div class="review-avatar">${res.nombre[0]}</div>
      <div class="review-content">
        <div class="review-name">${res.nombre}</div>
        <div class="review-date">${res.fecha}</div>
        <div class="review-text">${res.texto}</div>
        <div class="review-actions">
          <div class="review-action">♡</div>
          <div class="review-action">💬</div>
        </div>
      </div>
    `;
    listaReseñas.appendChild(div);
  });
} else {
  listaReseñas.innerHTML = "<p style='padding: 10px;'>No hay reseñas aún para este restaurante.</p>";
}

document.addEventListener("DOMContentLoaded", function () {
  const btnEnviarReseña = document.querySelector(".review-submit");
  const textarea = document.querySelector(".review-input");
  const listaReseñas = document.querySelector(".reviews-list");

  const restauranteActual = localStorage.getItem("restauranteNombre");
  const clave = `reseñas_${restauranteActual}`; // Clave por restaurante

  // Cargar reseñas guardadas y mostrarlas
  const reseñasGuardadas = JSON.parse(localStorage.getItem(clave)) || [];
  reseñasGuardadas.forEach((res) => {
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `
      <div class="review-avatar">${res.nombre[0]}</div>
      <div class="review-content">
        <div class="review-name">${res.nombre}</div>
        <div class="review-date">${res.fecha}</div>
        <div class="review-text">${res.texto}</div>
        <div class="review-actions">
          <div class="review-action">♡</div>
          <div class="review-action">💬</div>
        </div>
      </div>
    `;
    listaReseñas.appendChild(div);
  });

  // Al hacer clic en publicar reseña
  btnEnviarReseña.addEventListener("click", function () {
    const texto = textarea.value.trim();
    const nombreUsuario = localStorage.getItem("nombreUsuario") || "Anónimo";
    const fechaActual = new Date().toISOString().split("T")[0];

    if (!texto || !restauranteActual) return;

    // Crear nueva reseña
    const nuevaReseña = {
      nombre: nombreUsuario,
      fecha: fechaActual,
      texto: texto
    };

    // Mostrar inmediatamente
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `
      <div class="review-avatar">${nombreUsuario[0]}</div>
      <div class="review-content">
        <div class="review-name">${nombreUsuario}</div>
        <div class="review-date">${fechaActual}</div>
        <div class="review-text">${texto}</div>
        <div class="review-actions">
          <div class="review-action">♡</div>
          <div class="review-action">💬</div>
        </div>
      </div>
    `;
    listaReseñas.appendChild(div);

    // Guardar en localStorage
    reseñasGuardadas.push(nuevaReseña);
    localStorage.setItem(clave, JSON.stringify(reseñasGuardadas));

    textarea.value = "";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const mostrado = sessionStorage.getItem("sidecartPrimeraVez");
  const cartSidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("overlay");
  const cartUI = document.getElementById("cartUI");
  const mensajeInicial = document.getElementById("initialOnlyMessage");

  if (!mostrado) {
    // Primera vez: ocultar todo excepto "Ir a comprar"
    if (cartUI) cartUI.style.display = "none";
    if (mensajeInicial) mensajeInicial.style.display = "block";
    if (cartSidebar) cartSidebar.classList.add("active");
    if (overlay) overlay.classList.add("active");
    document.body.style.overflow = "hidden";

    sessionStorage.setItem("sidecartPrimeraVez", "true");
  }
});


