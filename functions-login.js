const form = document.querySelector('#form-login');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    submitForm();
})

function submitForm() {

    let correo = document.getElementById("email").value;
    let contrasena = document.getElementById("password").value;

    var correoConfirm = false;
    var contrasenaConfirm = false;

    if (correo == "admin123@gmail.com") {

        correoConfirm = true;

    }
    if (contrasena == "admin123@gmail.com") {

        contrasenaConfirm = true;

    }

    if (correoConfirm == false || contrasenaConfirm == false) {

        alerta("Correo o Contrasena incorrecto");

        alerta(
            "¡Error al iniciar sesión!",
            "Contraseña o Correo equivocados !<br>",
            "error",
            ''
        );
    } else {

        alerta(
            "Sesión Iniciada Correctamente!",
            "",
            "OK",
            ''
        );
        setTimeout(() => {

            window.location.href = "Inicio.html";

        }, 1000)

    }



}


function alerta(titulo, texto, icono, iconoColor, fondo) {
    Swal.fire({
        title: titulo,
        html: texto,
        icon: icono,
        iconColor: iconoColor,
        background: fondo,
        imageUrl: fondo,
        imageWidth: 100,
        imageHeight: 100,
        position: "center",

    });
}


