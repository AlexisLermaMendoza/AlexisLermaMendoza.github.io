function validarCampos() {
    const usuario = document.getElementById('usuario').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();

    if (contrasena.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return false;
    }

    if (contrasena.length >= 16) {
        alert('La contraseña no puede tener más de 8 caracteres.');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(usuario)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }
    if (!/[A-Z]/.test(contrasena)) {
        alert('La contraseña debe contener al menos una letra mayúscula.');
        return false;
    }

    if (!/[@$!%*?&#]/.test(contrasena)) {
        alert('La contraseña debe contener al menos un carácter especial (@, $, !, %, *, ?, #, etc.).');
        return false;
    }

    alert('Campos validados correctamente.');
}