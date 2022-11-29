let navbar = document.querySelector('.navbar');
let logo = document.querySelector('.logo');
let nav_buttons = document.querySelector('.nav_buttons')
let nav_link = document.getElementsByClassName('nav_link')
let mostrado = 0;

navbar.style.height = (logo.clientHeight) + 'px'


// expandir y animacion del navbar 
function boton() {

    if (mostrado == 0) {
        navbar.style.height = (logo.clientHeight + nav_buttons.clientHeight) + 'px'
        for (let i = 0; i < nav_link.length; i++) {
            nav_link[i].style.animationName = 'slideIn'
            nav_link[i].style.animationDelay = i * 100 + 'ms'
        }
        mostrado = 1;
    } else {
        navbar.style.height = (logo.clientHeight) + 'px'
        for (let i = 0; i < nav_link.length; i++) {
            nav_link[i].style.animationName = ''
        }
        mostrado = 0;
    }
}

//barra de navegacion scroll
if (window.scrollY > 20) {
    navbar.classList.add('nav-bg');
} else {
    navbar.classList.remove('nav-bg');
}

window.onscroll = () => {
    if (window.scrollY > 20) {
        navbar.classList.add('nav-bg');
    } else {
        navbar.classList.remove('nav-bg');
    }
};

//seleccion de juegos
const button_info = document.getElementsByClassName("show_info");
const game = document.getElementsByClassName("game");
let selected_game = document.getElementsByClassName("selected_game");
let tiempo_ocultar;
let juego_mostrado = 0;

for (let j = 0; j < button_info.length; j++) {
    button_info.item(j).addEventListener("click", function() {mostrar_juego(j)})
}


//mostrar juego
function mostrar_juego(i) {
    for (let j = 0; j < game.length; j++) {
        game.item(j).setAttribute("style","display: none");
    }
    selected_game.item(0).classList.add('sg_active');
    game.item(i).setAttribute("style","display: flex");
    if (juego_mostrado == 1) {
        scroll_juego();
    } else {
        setTimeout(scroll_juego, 250);
        juego_mostrado = 1;
    }
    clearTimeout(tiempo_ocultar);
    tiempo_ocultar = setTimeout(ocultar_juego, 10000);

    if (window.innerWidth <= 768 && mostrado == 1) {
        boton();
    }
}


// scroll de juegos 
let home = document.querySelector('.home')
let game_section = document.querySelector('.game_section')
let aside = document.querySelector('.offers')

function scroll_juego() {
    if (window.innerWidth > 768) {
        window.scrollTo({
            top: ((home.clientHeight + game_section.clientHeight) - (window.innerHeight / 3)),
            behavior: 'smooth'
        })
    } else {
        window.scrollTo({
            top: ((home.clientHeight + game_section.clientHeight + aside.clientHeight) - (window.innerHeight / 3)),
            behavior: 'smooth'
        })
    }
}

// ocultar el juego 
function ocultar_juego() {
    for (let j = 0; j < game.length; j++) {
        game.item(j).setAttribute("style","display: none");
    }
    selected_game.item(0).classList.remove('sg_active');
    juego_mostrado = 0;
}