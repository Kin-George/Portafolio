// Obtener los elementos del DOM
const sobreMiContainer = document.querySelector('#sobre-mi-container');
const habilidadesContainer = document.querySelector('#habilidades-container');
const sobreMi = document.querySelector('#sobre-mi');
const habilidades = document.querySelector('#habilidades');

// Definir la variable de estado
let mostrandoSobreMi = false;
let mostrandoHabilidades = false;

// Función que maneja el evento click
function mostrarOcultarContenido(container, contenido, estado) {
  // Cambiar el valor de la variable de estado
  estado = !estado;
  // Establecer la visibilidad del contenido basándose en la variable de estado
  contenido.style.display = estado ? 'block' : 'none';
}

// Agregar los manejadores de eventos click
sobreMiContainer.addEventListener('click', function() {
  mostrarOcultarContenido(sobreMiContainer, sobreMi, mostrandoSobreMi);
  mostrandoSobreMi = !mostrandoSobreMi;
});

habilidadesContainer.addEventListener('click', function() {
  mostrarOcultarContenido(habilidadesContainer, habilidades, mostrandoHabilidades);
  mostrandoHabilidades = !mostrandoHabilidades;
});

