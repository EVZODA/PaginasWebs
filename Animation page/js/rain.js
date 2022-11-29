let rain_bg = document.getElementsByClassName("rain_bg").item(0)
let rain = document.getElementsByClassName("rain")
let rain_count = 50

let rain_r = 15;

//creacion del div (rain)
for (let i=0; i< rain_count; i++){
    let rainelement = document.createElement("div")
    rainelement.classList.add("rain")
    rain_bg.appendChild(rainelement)
    
}

//inicio de la lluvia

for (let i=0; i< rain_count; i++){
    
    let posX = rain_x()
    rain[i].style.top = "-"+ rain[i].clientHeight+"px"
    rain[i].style.left = "-"+ rain[i].clientWidth+"px"
    rain[i].style.transform = "translateX("+posX+"px) rotate(" + rain_r + "deg)"
    rain_movement(i, posX);
}

var granizo = 0;

// setInterval(function(){
//     if (granizo == 0){
//         for (let i = 0; i < rain_count; i++){
//             rain[i].classList.add('granizo')
//             rain[i].style.top = "-"+ rain[i].clientHeight+"px"
            
//         }
//         granizo = 1;
//     } else {
//         for (let i = 0; i < rain_count; i++){
//             rain[i].classList.remove('granizo')
//             rain[i].style.top = "-"+ rain[i].clientHeight+"px"
//         }
//         granizo = 0;
//     }
// }, 3000)


// Funciones Random


function rain_x(){
    let posX = Math.ceil(Math.random() * (rain_bg.clientWidth + 100))
    return posX;
}

function rain_delay(){
    let delay = 0
    if (granizo == 0) {
        delay = Math.ceil(Math.random() * (900 - 450) + 450)
    } else {
        delay = Math.ceil(Math.random() * (600 - 300) + 300)
    }
    return delay;
}



//movimiento de la lluvia

function rain_movement(i, posX){
    let delay = rain_delay()
    rain[i].style.transform = "translateX("+(posX - 200)+"px) translateY("+(rain_bg.clientHeight + rain[i].clientHeight)+"px) rotate(" + rain_r + "deg)"
    rain[i].style.transition = "transform "+delay+"ms linear"
    
    setTimeout(function(){
        posX = rain_x()
        rain[i].style.transform = "translateX("+posX+"px) rotate(" + rain_r + "deg)"
        rain[i].style.transition = "none"
        rain_movement(i, posX);
    }, delay)
}