let wormsbg = document.getElementsByClassName("worm_bg").item(0)
let worms = document.getElementsByClassName("worms")
let wormcount = 20
let segmentcount = 5

// Creacion de gusanos
for (let i=0; i< wormcount; i++){
    let wormelement = document.createElement("div")
    wormelement.classList.add("worms")
    wormsbg.appendChild(wormelement)
    
    // Creacion de segmentos
    for (let j=0; j< segmentcount; j++){
        let segment = document.createElement("div")
        segment.classList.add("segment")
        segment.classList.add("float")
        worms[i].appendChild(segment)
    }
}
let anim_delay = 75; // Retraso de animacion entre un segmento y otro
let segment_l = 10; // Luminosidad entre un segmento y otro

for (let i=0; i< wormcount; i++){
    let extrad = extradelay()
    let color = randomcolor()
    
    for (let j=0; j<worms[i].children.length; j++){
        worms[i].children[j].style.animationDelay = (anim_delay* (j))-extrad+"ms"
        worms[i].children[j].style.background = "hsl("+color+",50%,"+ (segment_l*j)+"%)"
    }
    
    let posY = randomY()
    let direction = rightyleft(i)
    worms[i].style.top = "-"+ worms[i].clientHeight+"px"
    worms[i].style.transform = "translateY("+posY+"px)"
    movement(i,posY,direction);
}

//--------------- Funciones Random ---------------//

// Color de gusano
function randomcolor(){
    let color = Math.ceil(Math.random() * 360)
    return color;
}

// Posicion vertical de gusano
function randomY(){
    let posY = Math.ceil(Math.random() * wormsbg.clientHeight)
    return posY;
}

// Tiempo de recorrido de gusano
function randomTime(){
    let time = Math.ceil(Math.random() * (6000 - 3000) + 3000)
    return time;
}

// Retraso adicional para gusanos asincronicos
function extradelay(){
    let randomextra = Math.ceil(Math.random() * 1000)
    return randomextra;
}

// Posicion inicial de gusano (Izquierda o Derecha)
function rightyleft(i){    
    let direction = Math.ceil(Math.random() * 2)
        if (direction==1){
            worms[i].style.right = "-"+ worms[i].clientWidth+"px"
        } else {
            worms[i].style.left = "-"+ worms[i].clientWidth+"px"
            worms[i].style.flexDirection = "row-reverse"
        }
    return direction;
}


function movement(i,posY,direction){
    let time = randomTime();
    if (direction==1){
        worms[i].style.transform = "translateY("+posY+"px) translateX(-"+(wormsbg.clientWidth+ worms[i].clientWidth)+"px)"
    } else {
        worms[i].style.transform = "translateY("+posY+"px) translateX("+(wormsbg.clientWidth+ worms[i].clientWidth)+"px)"
    }
   worms[i].style.transition = "transform "+time+"ms linear"
    
    setTimeout(function(){
        posY = randomY()
        worms[i].style.transform = "translateY("+posY+"px)"
        worms[i].style.transition = "none"
        movement(i,posY,direction);
    }, time)
}