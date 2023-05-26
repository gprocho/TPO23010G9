const formulariocont = document.getElementById('formulariocont');

const userApellidoContac = document.getElementById("userApellidoContac");
const userNameContac = document.getElementById("userNameContac");
const userEmailContac = document.getElementById("userEmailContac");
const userTelefContac = document.getElementById("userTelefContac");
const userComentContac = document.querySelector("textarea[name=comentarios]");

const alertSuccessContac = document.getElementById('alertSuccessContac');
const alertApellidoContac = document.getElementById('alertApellidoContac');
const alertNameContac = document.getElementById('alertNameContac');
const alertEmailContac= document.getElementById('alertEmailContac');
const alertTelefContac = document.getElementById('alertTelefContac');
const alertComentContac = document.getElementById('alertComentContac');

const regUserApellidoContac = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserNameContac = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmailContac = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regUserTelefContac = /^\+?\d{2}\s\d{3}\s\d{4}\s\d{4}$/;


const pintarMensajeExitoContac = () => {
    alertSuccessContac.classList.remove("d-none");
    alertSuccessContac.textContent = "Consulta enviada con éxito verifique su casilla de correo para más información";
};

const pintarMensajeErrorContac = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });
};

formulariocont.addEventListener("submit", (e) => {
    e.preventDefault();

    alertSuccessContac.classList.add("d-none");
    const errores = [];

    // validar apellido
    if (!regUserApellidoContac.test(userApellidoContac.value) ||
     !userApellidoContac.value.trim()) {
        userApellidoContac.classList.add("is-invalid");

        errores.push({
            tipo: alertApellidoContac,
            msg: "Formato no válido campo apellido, solo letras",
        });
    } else {
        userApellidoContac.classList.remove("is-invalid");
        userApellidoContac.classList.add("is-valid");
        alertApellidoContac.classList.add("d-none");
    }

    // validar nombre
    if (!regUserNameContac.test(userNameContac.value) || !userNameContac.value.trim()) {
        userNameContac.classList.add("is-invalid");

        errores.push({
            tipo: alertNameContac,
            msg: "Formato no válido campo nombre, solo letras",
        });
    } else {
        userNameContac.classList.remove("is-invalid");
        userNameContac.classList.add("is-valid");
        alertNameContac.classList.add("d-none");
    }

    // validar email
    if (!regUserEmailContac.test(userEmailContac.value) || !userEmailContac.value.trim()) {
        userEmailContac.classList.add("is-invalid");

        errores.push({
            tipo: alertEmailContac,
            msg: "Escriba un correo válido",
        });
    } else {
        userEmailContac.classList.remove("is-invalid");
        userEmailContac.classList.add("is-valid");
        alertEmailContac.classList.add("d-none");
    }

    // validar Teléfono
    if (!regUserTelefContac.test(userTelefContac.value) || !userTelefContac.value.trim()) {
        userTelefContac.classList.add("is-invalid");

        errores.push({
            tipo: alertTelefContac,
            msg: "Escriba un número telefónico válido",
        });

    } else {
        userTelefContac.classList.remove("is-invalid");
        userTelefContac.classList.add("is-valid");
        alertTelefContac.classList.add("d-none");
    }

    
// validar Comentario
if (!userComentContac.value.trim()) {
    userComentContac.classList.add("is-invalid");

    errores.push({
        tipo: alertComentContac,
        msg: "Escriba su consulta.",
    });

} else {
    userComentContac.classList.remove("is-invalid");
    userComentContac.classList.add("is-valid");
    alertComentContac.classList.add("d-none");
}

    if (errores.length !== 0) {
        pintarMensajeErrorContac(errores);
        return;
    }

    console.log("Reserva enviada con éxito, verifique su casilla de correo para más información");
    pintarMensajeExitoContac();
});

/*MAPA no esta funcionando

function initMap() {
    // Coordenadas de la dirección de la empresa
    var empresaLatLng = { lat: -34.6037389, lng: -58.3815704 };
  
    // Opciones de visualización del mapa
    var mapOptions = {
      center: empresaLatLng,
      zoom: 15
    };
  
    // Crea el mapa y lo muestra en el contenedor
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
    // Agrega un marcador en la ubicación de la empresa
    var marker = new google.maps.Marker({
      position: empresaLatLng,
      map: map,
      title: "Turismo BA - Avenida Córdoba 722, Ciudad de Buenos Aires, Argentina"
    });
  }

  //Ejecuta la función
  window.onload = function() {
    initMap();
  };*/

  


