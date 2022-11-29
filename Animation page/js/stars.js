let star_bg = document.getElementsByClassName("star_bg").item(0)
let star = document.getElementsByClassName("star")
let star_count = 100



// Creacion de estrellas
for (let i=0; i< star_count; i++){
    let starelement = document.createElement("div")
    starelement.classList.add("star")
    star_bg.appendChild(starelement)
}

// Probabilidad de parpadeos
function star_blink(){
    let blink = Math.ceil(Math.random() * 5)
    return blink;
}

// Tamaño de las estrellas y los planetas
let planeta = 0;
function star_size(i){
    let size = Math.ceil(Math.random() * 5)
    
if (planeta < 30) {
    star[i].style.width = size + 'px'
    star[i].style.height = size + 'px'
    planeta += 1
}else{
    size = size + 8
    star[i].style.width = (size + 130) +'px'
    star[i].style.height = (size + 130) + 'px'
    star[i].classList.add('planet')
    planeta = 0
}

    return size;
}

// Iniciacion de estrellas 
for (let i=0; i< star_count; i++){

    // Parpadeo
    let blink = star_blink()
    if (blink==1){
        star[i].style.animationName = "star_animation"
    }
    
    // Tamaño de las estrellas
    let size = star_size(i)

    // Posicion de estrella
    let posY = star_Y(i)
    star[i].style.top = "-"+ star[i].clientHeight+"px"
    star[i].style.right = "-"+ star[i].clientWidth+"px"
    star[i].style.transform = "translateY("+posY+"px)"
    star_movement(i, posY, size);
}




//----------- Funciones Random -----------//

// Altura de estrella
function star_Y(i){
    let posY = Math.ceil(Math.random() * (star_bg.clientHeight - star[i].clientHeight) + star[i].clientHeight)
    return posY;
}
// Tiempo de recorrido de la estrella
function star_delay(){
    let delay = Math.ceil(Math.random() * (72000 - 36000) + 36000)
    return delay;
}





function star_movement(i, posY, size){

    let delay = star_delay() / size; // Tiempo de recorrido
    star[i].style.transform = "translateY("+posY+"px) translateX(-"+(star_bg.clientWidth+ star[i].clientWidth)+"px)"
    star[i].style.transition = "transform "+delay+"ms linear"
    
    setTimeout(function(){

        // Reinicio de posicion
        posY = star_Y(i)
        star[i].style.transform = "translateY("+posY+"px)"
        star[i].style.transition = "none"
        star_movement(i, posY, size);
    }, delay)
}