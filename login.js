HEAD

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        // Obtener los valores del formulario
        const usuario = form.querySelector('[name="usuario"]').value.trim();
        const contrasena = form.querySelector('[name="contrasena"]').value.trim();

        // Validar que los campos no estén vacíos
        if (usuario === '' || contrasena === '') {
            alert('Por favor, completa todos los campos.');
            event.preventDefault(); // Evitar el envío del formulario
        }
        // Validar longitud mínima de 8 caracteres para la contraseña
    if (contrasena.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return false;
    }

    // Validar longitud máxima de 8 caracteres para la contraseña
    if (contrasena.length >= 16) {
        alert('La contraseña no puede tener más de 8 caracteres.');
        return false;
    }

    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(usuario)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }
    // Validar que la contraseña contenga al menos una letra mayúscula
    if (!/[A-Z]/.test(contrasena)) {
        alert('La contraseña debe contener al menos una letra mayúscula.');
        return false;
    }

    // Validar que la contraseña contenga al menos un carácter especial
    if (!/[@$!%*?&#]/.test(contrasena)) {
        alert('La contraseña debe contener al menos un carácter especial (@, $, !, %, *, ?, #, etc.).');
        return false;
    }

    alert('Campos validados correctamente.');
    // Puedes realizar otras acciones después de la validación
    });
});
