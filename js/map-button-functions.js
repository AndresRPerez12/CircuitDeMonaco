// Funciones llamadas por los botones del mapa interactivo

function clickRestart(){
    // Encontrar los elementos a cambiar en el documento y almacenarlos en variables
    title = document.getElementById("map-section-title");
    text = document.getElementById("map-section-text");
    image = document.getElementById("map-section-image");
    video = document.getElementById("map-section-video");
    // Modificar el contenido usando las variables
    title.innerHTML = "Uso del mapa interactivo";
    text.innerHTML = "Este es un mapa interactivo del circuito de Mónaco. Cada uno de los botones del mapa te mostrará mas información de esta sección de la pista, junto a una foto del lugar y un video de un acontecimiento que se ha dado en esa parte de la pista a lo largo de su historia en la Fórmula 1. ¡Toca cualquiera de los botones en el mapa para comenzar!";
    image.src = "images/interactive-map/general.webp";
    video.src = "https://www.youtube.com/embed/lOiOlXkPE5M?start=14";
}
