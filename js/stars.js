let star_area = document.getElementsByClassName('star_area')[0];
let star = document.getElementsByClassName('star');

let star_count = 150; // Cantidad de estrellas


//---------- Estrellas ----------//

for (let i = 0; i < star_count; i++) {

    // Creación de estrellas
    let star_element = document.createElement('div');
    star_element.classList.add('star');
    star_area.appendChild(star_element);

    let star_posY = star_Y(); // Posicion aleatoria (eje Y)
    let size = starSize(); // Tamaño en px
    
    // Frecuencia de parpadeo


    star[i].style.width = size + 'px';
    star[i].style.height = size + 'px';

    star[i].style.top = '-' + star[i].clientHeight + 'px';
    star[i].style.right = '-' + star[i].clientWidth + 'px';
    star[i].style.transform = 'translateY(' + star_posY + 'px)';


    starMovement(i, star_posY, size);
}
//---------- Animacion de desplazamiento ----------//


// Desplazar estrellas
function starMovement(i, star_posY, size) {
    let travel_time = star_Timer() / (size * 2);

    star[i].style.transform = 'translateY(' + star_posY + 'px) translateX(-' + (star_area.clientWidth + star[i].clientWidth) + 'px)';
    star[i].style.transition = 'transform ' + travel_time + 'ms linear';
    
    setTimeout(function(){
        star_posY = star_Y();
        star[i].style.transform = 'translateY(' + star_posY + 'px)'
        star[i].style.transition = 'none'
        starMovement(i, star_posY, size);
    }, travel_time)
}

//---------- Funciones de tamaño, probabilidad y frecuencia de parpadeo, ----------//
//---------- posicion vertical, y duracion de desplazamiento ----------//

function starSize() {
    let size = Math.ceil(Math.random() * 4);
    return size;
}

function star_Y() {
    let positionY = Math.ceil(Math.random() * star_area.clientHeight);
    return positionY;
}

function star_Timer() {
    let timer = Math.ceil(Math.random() * (48000 - 24000) + 24000);
    return timer;
}
