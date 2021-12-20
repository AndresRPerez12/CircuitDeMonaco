// Funciones llamadas por los botones del mapa interactivo

function clickRestart(){
    // Encontrar los elementos a cambiar en el documento y almacenarlos en variables
    title = document.getElementById("map-section-title");
    text = document.getElementById("map-section-text");
    image = document.getElementById("map-section-image");
    video = document.getElementById("map-section-video");
    video_description = document.getElementById("map-section-description");
    // Modificar el contenido usando las variables
    title.innerHTML = "Uso del mapa interactivo";
    text.innerHTML = "Este es un mapa interactivo del circuito de Mónaco. Cada uno de los botones del mapa te mostrará mas información de esta sección de la pista, junto a una foto del lugar y un video de un acontecimiento que se ha dado en esa parte de la pista. ¡Toca cualquiera de los botones en el mapa para comenzar!";
    image.src = "images/interactive-map/general.webp";
    video.src = "https://www.youtube.com/embed/lOiOlXkPE5M?start=14";
    video_description.innerHTML = "Descripción general del circuito:"
}

function clickT1(){
    // Encontrar los elementos a cambiar en el documento y almacenarlos en variables
    title = document.getElementById("map-section-title");
    text = document.getElementById("map-section-text");
    image = document.getElementById("map-section-image");
    video = document.getElementById("map-section-video");
    video_description = document.getElementById("map-section-description");
    // Modificar el contenido usando las variables
    title.innerHTML = "Curva 1: Sainte Devote";
    text.innerHTML = "Pronunciada curva a la derecha. Nombrada por una pequeña iglesia atras de la primera curva, suele ser un punto importante de acción en la primera vuelta de carrera al representar una de las pocas oportunidades de adelantamiento. Tiene la salida de los pits por su interior y una escapatoria para los pilotos que se pasen de frenada al entrar a la curva.";
    image.src = "images/interactive-map/turn-1.jpg";
    video.src = "https://www.youtube.com/embed/Ce4r2nSnmyU?start=10";
    video_description.innerHTML = "En 2015, Max Verstappen tuvo un fuerte accidente en esta curva tratando de pasar al Lotus de Romain Grosjean, mostrando lo estrecho que es el circuito y los riesgos de tratar de adelantar en las calles del principado."
}

function clickT2(){
    // Encontrar los elementos a cambiar en el documento y almacenarlos en variables
    title = document.getElementById("map-section-title");
    text = document.getElementById("map-section-text");
    image = document.getElementById("map-section-image");
    video = document.getElementById("map-section-video");
    video_description = document.getElementById("map-section-description");
    // Modificar el contenido usando las variables
    title.innerHTML = "Curva 2: Beau Rivage";
    text.innerHTML = "Es una curva muy leve con pendiente hacia arriba que usualmente se toma a fondo. Beau Rivage significa \"hermosa orilla\", dada la vista increible en la cima de la colina. La salida de los pits desemboca a esta curva.";
    image.src = "images/interactive-map/turn-2.jpg";
    video.src = "https://www.youtube.com/embed/tVivUWvhUZQ?start=159";
    video_description.innerHTML = "En el ePrix de 2021, Mitch Evans tomó la punta de la carrera en esta curva."
}

function clickT3(){
    // Encontrar los elementos a cambiar en el documento y almacenarlos en variables
    title = document.getElementById("map-section-title");
    text = document.getElementById("map-section-text");
    image = document.getElementById("map-section-image");
    video = document.getElementById("map-section-video");
    video_description = document.getElementById("map-section-description");
    // Modificar el contenido usando las variables
    title.innerHTML = "Curva 3: Massenet";
    text.innerHTML = "Esta larga curva a la izquierda pasa frente a la casa de la ópera de Mónaco, la cual tiene un busto del compositor Jules Massenet en frente.";
    image.src = "images/interactive-map/turn-3.jpg";
    video.src = "aaaaaa";
    video_description.innerHTML = "aaaaaa"
}

function clickT4(){
    // Encontrar los elementos a cambiar en el documento y almacenarlos en variables
    title = document.getElementById("map-section-title");
    text = document.getElementById("map-section-text");
    image = document.getElementById("map-section-image");
    video = document.getElementById("map-section-video");
    video_description = document.getElementById("map-section-description");
    // Modificar el contenido usando las variables
    title.innerHTML = "Curva 4: Plaza del Casino";
    text.innerHTML = "Es una curva a la derecha de velocidad media. La curva pasa justo frente a la entrada del Casino de Monte Carlo, el edificio más famoso de la ciudad. En la actualidad, la plaza frente al casino tiene un pequeño jardín.";
    image.src = "images/interactive-map/turn-4.jpg";
    video.src = "aaaaaa";
    video_description.innerHTML = "aaaaaa"
}

function clickT5(){
    // Encontrar los elementos a cambiar en el documento y almacenarlos en variables
    title = document.getElementById("map-section-title");
    text = document.getElementById("map-section-text");
    image = document.getElementById("map-section-image");
    video = document.getElementById("map-section-video");
    video_description = document.getElementById("map-section-description");
    // Modificar el contenido usando las variables
    title.innerHTML = "Curva 5: Mirabeau Haute";
    text.innerHTML = "Es una curva a derecha alta (por esto recibe la denominzación 'haute') que se encuentra justo antes de la horquilla. Recibe su nombre junto a la curva 7, por el cercano Hotel Mirabeau.";
    image.src = "images/interactive-map/turn-5.jpg";
    video.src = "https://www.youtube.com/embed/m3-D_6Tygls?start=24";
    video_description.innerHTML = "En un momento polémico en la clasificación de 2014, Nico Rosberg cometió un error entrado a esta curva. Esto causo banderas amarillas que no permitieron que su compañero Lewis Hamilton mejorara su tiempo y le quitara la pole."
}

function clickT6(){
    // Encontrar los elementos a cambiar en el documento y almacenarlos en variables
    title = document.getElementById("map-section-title");
    text = document.getElementById("map-section-text");
    image = document.getElementById("map-section-image");
    video = document.getElementById("map-section-video");
    video_description = document.getElementById("map-section-description");
    // Modificar el contenido usando las variables
    title.innerHTML = "Curva 6: Horquilla del gran hotel";
    text.innerHTML = "Horquilla muy cerrada hacia la izquierda. Es una de las curvas más reconocibles del cicuito. Su nombre ha cambiado muchas veces junto con el nombre del hotel adyacente. Se le considera la curva más lenta de toda la temporada";
    image.src = "images/interactive-map/turn-6.jpg";
    video.src = "https://www.youtube.com/embed/i3U9aBg0W_E";
    video_description.innerHTML = "En las primeras vueltas se suele poner muy apretado el paso por la horquilla al estar tan cerca las autos. Por ejemplo así fue el paso en la vuelta 1 del gran premio de 2013."
}

function clickT7(){
    // Encontrar los elementos a cambiar en el documento y almacenarlos en variables
    title = document.getElementById("map-section-title");
    text = document.getElementById("map-section-text");
    image = document.getElementById("map-section-image");
    video = document.getElementById("map-section-video");
    video_description = document.getElementById("map-section-description");
    // Modificar el contenido usando las variables
    title.innerHTML = "Curva 7: Mirabeau Bas";
    text.innerHTML = "Curva a derecha que se toma de bajada. Nombrada de manera similar que la curva 5, es la curva baja proxima al Hotel Mirabeau. Es una curva a derecha que lleva hacia la bahía de Mónaco.";
    image.src = "images/interactive-map/turn-7.jpg";
    video.src = "aaaaaa";
    video_description.innerHTML = "aaaaaa"
}

function clickT8(){
    // Encontrar los elementos a cambiar en el documento y almacenarlos en variables
    title = document.getElementById("map-section-title");
    text = document.getElementById("map-section-text");
    image = document.getElementById("map-section-image");
    video = document.getElementById("map-section-video");
    video_description = document.getElementById("map-section-description");
    // Modificar el contenido usando las variables
    title.innerHTML = "Curva 8: Portier";
    text.innerHTML = "Es una curva a derecha de velocidad media que lleva hacia el túnel. Su nombre viene del barrio de Mónaco adyacente al mar. El nombre del barrio viene del nivel más bajo de una antigua orden católica.";
    image.src = "images/interactive-map/turn-8.jpg";
    video.src = "aaaaaa";
    video_description.innerHTML = "aaaaaa"
}

function clickT9(){
    // Encontrar los elementos a cambiar en el documento y almacenarlos en variables
    title = document.getElementById("map-section-title");
    text = document.getElementById("map-section-text");
    image = document.getElementById("map-section-image");
    video = document.getElementById("map-section-video");
    video_description = document.getElementById("map-section-description");
    // Modificar el contenido usando las variables
    title.innerHTML = "Curva 9: El túnel";
    text.innerHTML = "Más que una curva, es una recta un poco inclinada. Al estar cubierta suele tener condiciones diferentes al resto de circuito. Los pilotos suelen preparar los adelantamientos desde el túnel dado que a su salida está una de las pocas oprtunidades de pasar.";
    image.src = "images/interactive-map/turn-9.jpg";
    video.src = "https://www.youtube.com/embed/RtzyI5fbiAc";
    video_description.innerHTML = "En 2004 en esta curva ocurrió un extraño accidente entre Michael Schumacher y Juan Pablo Montoya, en condiciones de Safety Car."
}

function clickT10(){
    // Encontrar los elementos a cambiar en el documento y almacenarlos en variables
    title = document.getElementById("map-section-title");
    text = document.getElementById("map-section-text");
    image = document.getElementById("map-section-image");
    video = document.getElementById("map-section-video");
    video_description = document.getElementById("map-section-description");
    // Modificar el contenido usando las variables
    title.innerHTML = "Curvas 10 y 11: Nouvelle Chicane";
    text.innerHTML = "Siempre ha habido una chicana en esta parte del circuito. Es 'nueva' desde su remodelación en 1986. La mayoría de intentos de adelantamientos se dan en la fuerte frenada antes de la curva 10.";
    image.src = "images/interactive-map/turn-10.jpg";
    video.src = "aaaaaa";
    video_description.innerHTML = "aaaaaa"
}

function clickT12(){
    // Encontrar los elementos a cambiar en el documento y almacenarlos en variables
    title = document.getElementById("map-section-title");
    text = document.getElementById("map-section-text");
    image = document.getElementById("map-section-image");
    video = document.getElementById("map-section-video");
    video_description = document.getElementById("map-section-description");
    // Modificar el contenido usando las variables
    title.innerHTML = "Curva 12: Tabac";
    text.innerHTML = "Es una fuerte curva a la izquierda que se toma con una velocidad considerable. Su nombre viene de una pequeña tienda de tabaco justo afuera de la curva. En la costa junto a la pista se pueden obsevar los yates que siempre están en el fin de semana de carrera.";
    image.src = "images/interactive-map/turn-12.jpg";
    video.src = "aaaaaa";
    video_description.innerHTML = "aaaaaa"
}

function clickT13(){
    // Encontrar los elementos a cambiar en el documento y almacenarlos en variables
    title = document.getElementById("map-section-title");
    text = document.getElementById("map-section-text");
    image = document.getElementById("map-section-image");
    video = document.getElementById("map-section-video");
    video_description = document.getElementById("map-section-description");
    // Modificar el contenido usando las variables
    title.innerHTML = "Curvas 13 y 14: Entrada al complejo de la piscina";
    text.innerHTML = "Antes de 1973, esta sección era una larga recta, pero tras la construcción de una piscina municipal, se agregaron dos chicanas para pasar alrededor. Las curvas 13 y 14 son la primera de estas chicanas, y se toman a velocidad considerable.";
    image.src = "images/interactive-map/turn-13.jpg";
    video.src = "aaaaaa";
    video_description.innerHTML = "aaaaaa"
}

function clickT15(){
    // Encontrar los elementos a cambiar en el documento y almacenarlos en variables
    title = document.getElementById("map-section-title");
    text = document.getElementById("map-section-text");
    image = document.getElementById("map-section-image");
    video = document.getElementById("map-section-video");
    video_description = document.getElementById("map-section-description");
    // Modificar el contenido usando las variables
    title.innerHTML = "Curvas 15 y 16: Salida del complejo de la piscina";
    text.innerHTML = "La chicana de las curvas 15 y 16 es mucho más cerrada que la anterior. Los pilotos suelen ir al límite en esta zona, pasando lo más cerca que pueden de las protecciones laterales para sacar provecho de toda el espacio posible y ganar tiempo. Es por esto que muchos accidentes suelen ocurrir en estas curvas.";
    image.src = "images/interactive-map/turn-15.png";
    video.src = "https://www.youtube.com/embed/ani7FaCFaUk";
    video_description.innerHTML = "Los piltos a veces pasan a milimetros de las protecciones, como se puede ver en este caso con Sergio Pérez y su Red Bull en 2021."
}

function clickT17(){
    // Encontrar los elementos a cambiar en el documento y almacenarlos en variables
    title = document.getElementById("map-section-title");
    text = document.getElementById("map-section-text");
    image = document.getElementById("map-section-image");
    video = document.getElementById("map-section-video");
    video_description = document.getElementById("map-section-description");
    // Modificar el contenido usando las variables
    title.innerHTML = "Curva 17: La Rascasse";
    text.innerHTML = "Es una cerrada curva a la izquierda que requiere de una frenada fuerte. Su nombre viene de un pez cubierto de espinas que habita el Mediterraneo. Se rumora que antiguamente había un bar con este nombre en la zona y que de allí viene la denominación del lugar. Hoy en día existe un restaurante nuevo con el mismo nombre dentro de la curva.";
    image.src = "images/interactive-map/turn-18.jpg";
    video.src = "aaaaaa";
    video_description.innerHTML = "aaaaaa"
}

function clickT18(){
    // Encontrar los elementos a cambiar en el documento y almacenarlos en variables
    title = document.getElementById("map-section-title");
    text = document.getElementById("map-section-text");
    image = document.getElementById("map-section-image");
    video = document.getElementById("map-section-video");
    video_description = document.getElementById("map-section-description");
    // Modificar el contenido usando las variables
    title.innerHTML = "Curvas 18 y 19: Virage Antony Noghes";
    text.innerHTML = "La última curva del circuito es un giro a la derecha con una salida ligeramente hacia la izquierda. Antiguamente, la curva final era otra horquilla, hasta su rediseño en la década de los 70s. Fue nombrada en honor a Antony Noghes, el fundador del Gran Premio de Mónaco. Desde esta curva los autos salen recto hacía la línea de meta para iniciar una nueva vuelta.";
    image.src = "images/interactive-map/turn-19.jpg";
    video.src = "aaaaaa";
    video_description.innerHTML = "aaaaaa"
}

function clickStraight(){
    // Encontrar los elementos a cambiar en el documento y almacenarlos en variables
    title = document.getElementById("map-section-title");
    text = document.getElementById("map-section-text");
    image = document.getElementById("map-section-image");
    video = document.getElementById("map-section-video");
    video_description = document.getElementById("map-section-description");
    // Modificar el contenido usando las variables
    title.innerHTML = "Recta Principal";
    text.innerHTML = "Desde la recta principal del circuito inician todos los autos la carrera. Es de las pocas zonas de aceleración continua del circuito. Tiene una muy ligera inclinación. Al final de la carrera, los autos de los tres primeros se estacionan en la recta y se monta el podio a un lado de la misma.";
    image.src = "images/interactive-map/straight.jpg";
    video.src = "aaaaaa";
    video_description.innerHTML = "aaaaaa"
}

function clickPits(){
    // Encontrar los elementos a cambiar en el documento y almacenarlos en variables
    title = document.getElementById("map-section-title");
    text = document.getElementById("map-section-text");
    image = document.getElementById("map-section-image");
    video = document.getElementById("map-section-video");
    video_description = document.getElementById("map-section-description");
    // Modificar el contenido usando las variables
    title.innerHTML = "Zona de pits";
    text.innerHTML = "En la zona de pits es donde los mecánicos de los equipos trabajan en los autos, y en donde se realizan los cambios de neumáticos durante la carrera. La entrada a los pits en este circuito se encuentra antes de la curva 19, y la salida pasa por dentro de la curva 1 y va a dar a la curva 2.";
    image.src = "images/interactive-map/pits.webp";
    video.src = "https://www.youtube.com/embed/hvA36U1ed4Q";
    video_description.innerHTML = "Al ser tan difícil pasar en este circuito, las carreras muchas veces se deciden por la estrategia en las paradas en pits, y los errores en la parada pueden ser muy caros. Esto le paso a Daniel Ricciardo en 2016, cuando una falta de coordinación de su equipo le costo la victoria y contra Lewis Hamilton."
}