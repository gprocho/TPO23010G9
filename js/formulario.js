const formulario = document.getElementById('formulario');

const userApellido = document.getElementById("userApellido");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userTelef = document.getElementById("userTelef");
const userPasaj = document.getElementById("userPasaj");
const userDate = document.getElementById("userDate");
const userPaseo = document.getElementById("userPaseo");



const alertSuccess = document.getElementById('alertSuccess');
const alertApellido = document.getElementById('alertApellido');
const alertName = document.getElementById('alertName');
const alertEmail = document.getElementById('alertEmail');
const alertTelef = document.getElementById('alertTelef');
const alertPasaj = document.getElementById('alertPasaj');
const alertDate = document.getElementById('alertDate');
const alertPaseo = document.getElementById('alertPaseo');


const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserApellido = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regUserTelef = /^\+?\d{2}\s\d{3}\s\d{4}\s\d{4}$/;
const regUserPasaj = /^[0-9]{2}$/;



const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Reserva enviada con éxito verifique su casilla de correo para más información";
};

const pintarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    alertSuccess.classList.add("d-none");
    const errores = [];


    // validar apellido
    if (!regUserApellido.test(userApellido.value) || !userApellido.value.trim()) {
        userApellido.classList.add("is-invalid");

        errores.push({
            tipo: alertApellido,
            msg: "Formato no válido campo apellido, solo letras",
        });
    } else {
        userApellido.classList.remove("is-invalid");
        userApellido.classList.add("is-valid");
        alertApellido.classList.add("d-none");
    }

    // validar nombre
    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        userName.classList.add("is-invalid");

        errores.push({
            tipo: alertName,
            msg: "Formato no válido campo nombre, solo letras",
        });
    } else {
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add("d-none");
    }

    // validar email
    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        userEmail.classList.add("is-invalid");

        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo válido",
        });
    } else {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }

    // validar Teléfono
    if (!regUserTelef.test(userTelef.value) || !userTelef.value.trim()) {
        userTelef.classList.add("is-invalid");

        errores.push({
            tipo: alertTelef,
            msg: "Escriba un número telefónico válido",
        });

    } else {
        userTelef.classList.remove("is-invalid");
        userTelef.classList.add("is-valid");
        alertTelef.classList.add("d-none");
    }

    // validar Pasajeros
    if (!regUserPasaj.test(userPasaj.value) || !userPasaj.value.trim()) {
        userPasaj.classList.add("is-invalid");

        errores.push({
            tipo: alertPasaj,
            msg: "Escriba dos dígitos para la cantidad de pasajeros",
        });

    } else {
        userPasaj.classList.remove("is-invalid");
        userPasaj.classList.add("is-valid");
        alertPasaj.classList.add("d-none");
    }

    // validar Fecha
    if (!userDate.value.trim()) {
        userDate.classList.add("is-invalid");

        errores.push({
            tipo: alertDate,
            msg: "Elija una fecha válida",
        });

    } else {
        userDate.classList.remove("is-invalid");
        userDate.classList.add("is-valid");
        alertDate.classList.add("d-none");
    }

    /* Obtener la fecha actual 
    let hoy = new Date();

    // Obtener el año, mes y día en formato AAAA-MM-DD 
    let año = hoy.getFullYear(); 
    let mes = hoy.getMonth() + 1;
    // Los meses empiezan en 0 
    let dia = hoy.getDate(); if (mes < 10) {
        mes = 0 + mes;
        // Añadir un cero si el mes es menor que 10
    }
    if (dia < 10) {
        dia = 0 + dia;
        // Añadir un cero si el día es menor que 10
    }
    let fechaActual = año + - + mes + - + dia;

    // Sumar un año a la fecha actual 
    let añoSiguiente = año + 1;
    let fechaSiguiente = añoSiguiente + - + mes + - + dia;*/

    

    // validar Paseos
    if (!userPaseo.value.trim()) {
        userPaseo.classList.add("is-invalid");

        errores.push({
            tipo: alertPaseo,
            msg: "Elija un paseo",
        });

    } else {
        userPaseo.classList.remove("is-invalid");
        userPaseo.classList.add("is-valid");
        alertPaseo.classList.add("d-none");
    }


    if (errores.length !== 0) {
        pintarMensajeError(errores);
        return;
    }

    console.log("Reserva enviada con éxito, verifique su casilla de correo para más información");
    pintarMensajeExito();
});