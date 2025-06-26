// Proteger acceso: redirigir si no está logueado
if (localStorage.getItem("usuarioLogueado") !== "true") {
  window.location.href = "../html/login.html";
}

let userData = null; // Variable global

// Obtener usuario desde localStorage
function obtenerUsuarioActual() {
  const correoLogueado = localStorage.getItem("correoUsuario");
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  return usuarios.find(u => u.correo === correoLogueado);
}

// Formatear fecha
function formatDate(dateString) {
  const date = new Date(dateString);
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 
                  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Mostrar los datos del usuario
function initializeProfile() {
  userData = obtenerUsuarioActual();
  if (!userData) return;

  document.getElementById('profile-name').textContent = userData.nombre;
  document.getElementById('profile-email').textContent = userData.correo;
  document.getElementById('phone-value').textContent = userData.telefono;
  document.getElementById('birth-value').textContent = formatDate(userData.fechaNacimiento);
  document.getElementById('gender-value').textContent = userData.genero;

  const nameParts = userData.nombre.split(' ');
  const initials = nameParts.map(part => part.charAt(0)).join('');
  document.getElementById('avatar-text').textContent = initials;
}

let currentEditField = '';

// Abrir modal de edición
function editField(fieldType) {
  currentEditField = fieldType;
  const modal = document.getElementById('editModal');
  const modalTitle = document.getElementById('modalTitle');
  const fieldLabel = document.getElementById('fieldLabel');
  const fieldInput = document.getElementById('fieldInput');

  switch(fieldType) {
  case 'phone':
    modalTitle.textContent = 'Editar Teléfono';
    fieldLabel.textContent = 'Número de teléfono';
    fieldInput.outerHTML = `<input type="tel" class="form-input" id="fieldInput" required>`;
    document.getElementById('fieldInput').value = userData.telefono;
    break;

  case 'birth':
    modalTitle.textContent = 'Editar Fecha de Nacimiento';
    fieldLabel.textContent = 'Fecha de nacimiento';
    fieldInput.outerHTML = `<input type="date" class="form-input" id="fieldInput" required>`;
    document.getElementById('fieldInput').value = userData.fechaNacimiento;
    break;

  case 'gender':
    modalTitle.textContent = 'Editar Género';
    fieldLabel.textContent = 'Género';
    fieldInput.outerHTML = `
      <select class="form-input" id="fieldInput" required>
        <option value="">Seleccione una opción</option>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
        <option value="otro">Otro</option>
        <option value="prefiero no decir">Prefiero no decir</option>
      </select>
    `;
    document.getElementById('fieldInput').value = userData.genero;
    break;
}


  modal.classList.add('show');
}

// Cerrar modal
function closeModal() {
  document.getElementById('editModal').classList.remove('show');
}

// Guardar cambios
document.getElementById('editForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const newValue = document.getElementById('fieldInput').value;
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Actualizar en objeto
  switch(currentEditField) {
    case 'phone':
      userData.telefono = newValue;
      document.getElementById('phone-value').textContent = newValue;
      break;
    case 'birth':
      userData.fechaNacimiento = newValue;
      document.getElementById('birth-value').textContent = formatDate(newValue);
      break;
    case 'gender':
      userData.genero = newValue;
      document.getElementById('gender-value').textContent = newValue;
      break;
  }

  // Actualizar array en localStorage
  const index = usuarios.findIndex(u => u.correo === userData.correo);
  if (index !== -1) {
    usuarios[index] = userData;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }

  closeModal();

  // Feedback visual
  const btn = document.querySelector('.btn-save');
  const originalText = btn.textContent;
  btn.textContent = '✓ Guardado';
  setTimeout(() => {
    btn.textContent = originalText;
  }, 1500);
});

// Cerrar modal clic fuera
document.getElementById('editModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});

// Botones ayuda
function goBack() {
    window.location.href = "../html/index.html";
}
function contactSupport() {
    window.open("https://wa.me/+51922401362", "_blank");
}
function openConfiguration() {
    window.location.href = "../html/configuracion.html";
}
// Iniciar
document.addEventListener('DOMContentLoaded', function() {
  initializeProfile();
});
