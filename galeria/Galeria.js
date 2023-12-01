// Obtiene los elementos del DOM
var dropdown = document.querySelector(".dropdown");
var dropdownContent = document.querySelector(".dropdown-content");
var unRandom = document.querySelector(".un-random");

// Agrega un evento de clic al botón para mostrar/ocultar el menú desplegable
dropdown.addEventListener("click", function() {
    dropdownContent.classList.toggle("show");
});

// Cierra el menú desplegable si el usuario hace clic fuera de él
window.addEventListener("click", function(event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
});

// Mostrar imágenes de la categoría seleccionada
function mostrarImagenes(categoria) {
    // Oculta todas las imágenes
    var imagenes = document.querySelectorAll(".galeria img");
    imagenes.forEach(function(imagen) {
        imagen.style.display = "none";
    });

    // Muestra las imágenes de la categoría seleccionada
    var imagenesCategoria = document.querySelectorAll("." + categoria);
    imagenesCategoria.forEach(function(imagen) {
        imagen.style.display = "block";
    });
}

// Agrega el evento de clic a las miniaturas
const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeButton = document.querySelector('.close');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const imageUrl = thumbnail.getAttribute('src');
        lightboxImage.setAttribute('src', imageUrl);
        lightbox.style.display = 'flex';
    });
});

// Cierra la ventana modal al hacer clic en el botón de cierre
closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Cierra la ventana modal al hacer clic fuera de la imagen
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Resetea la página a su visualización base al hacer clic en el botón "un-random"
unRandom.addEventListener('click', () => {
      location.reload();
  });