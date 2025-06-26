document.getElementById('registroForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita el envío real del formulario

  const nombre = document.querySelector('input[name="nombre"]').value;
  const apellido = document.querySelector('input[name="apellido"]').value;
  const correo = document.querySelector('input[name="correo"]').value;
  const telefono = document.querySelector('input[name="telefono"]').value;
  const fechaNacimiento = document.querySelector('input[name="fecha_nacimiento"]').value;
  const genero = document.querySelector('select[name="genero"]').value;
  const clave = document.querySelector('input[name="clave"]').value;
  const confirmarClave = document.querySelector('input[name="confirmar_clave"]').value;

  if (clave !== confirmarClave) {
    alert('Las contraseñas no coinciden');
    return;
  }

  if (clave.length < 8) {
    alert('La contraseña debe tener al menos 8 caracteres');
    return;
  }

  // Verificar si el correo ya existe
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const yaExiste = usuarios.some(u => u.correo === correo);
  if (yaExiste) {
    alert('Ya existe un usuario con ese correo.');
    return;
  }

  // Guardar datos en array de usuarios
  const usuario = {
    nombre,
    apellido,
    correo,
    telefono,
    fechaNacimiento,
    genero,
    clave
  };

  usuarios.push(usuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  alert('¡Cuenta creada exitosamente!');
  window.location.href = 'login.html';
});
