function goBack() {
window.history.back();
}

function irACarta(elemento) {
  const nombre = elemento.getAttribute("data-nombre");
  const categoria = elemento.getAttribute("data-categoria");
  const icono = elemento.getAttribute("data-icono");

  localStorage.setItem("restauranteNombre", nombre);
  localStorage.setItem("restauranteCategoria", categoria);
  localStorage.setItem("restauranteIcono", icono);

  window.location.href = "../html/cartarestaurante.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const categoriaSeleccionada = params.get("categoria");
  const titulo = document.getElementById("titulo-categoria");

  if (categoriaSeleccionada) {
    const cards = document.querySelectorAll(".restaurant-card");

    if (titulo) {
      titulo.textContent = `Restaurantes de ${categoriaSeleccionada.charAt(0).toUpperCase() + categoriaSeleccionada.slice(1)}`;
    }

    cards.forEach((card) => {
      const categoriaCard = card.getAttribute("data-categoria");
      card.style.display = categoriaCard === categoriaSeleccionada ? "block" : "none";
    });
  }
});


