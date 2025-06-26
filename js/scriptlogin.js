document.getElementById("formLogin").addEventListener("submit", function(event) {
  event.preventDefault();

  const correo = document.querySelector('input[name="correo"]').value;
  const clave = document.querySelector('input[name="clave"]').value;

  // Leer todos los usuarios del localStorage
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuario = usuarios.find(u => u.correo === correo && u.clave === clave);

  if (usuario) {
    // Guardar sesión activa
    localStorage.setItem("usuarioLogueado", "true");
    localStorage.setItem("nombreUsuario", usuario.nombre);
    localStorage.setItem("correoUsuario", usuario.correo);

    // Redirigir al inicio
    window.location.href = "../html/index.html";
  } else {
    alert("Correo o contraseña incorrectos");
  }
});
