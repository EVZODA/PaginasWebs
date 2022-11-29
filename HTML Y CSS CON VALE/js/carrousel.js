'use strict'

const big = document.querySelector(".big");
const dot = document.querySelectorAll(".dot");

dot.forEach( ( eachdot, i )=> {
    dot[i].addEventListener("click",()=>{

        let position = i
        let operacion = position * -50

        big.style.transform = `translateX(${operacion}%)`

        dot.forEach ( (eachdot, i )=>{
            dot[i].classList.remove("active")
        } )
        dot[i].classList.add("active")
    })
} )
