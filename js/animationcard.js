let container = document.querySelector(".container");
let card = document.querySelectorAll(".card");
let time = 18000
let delay = time / card.length;

for (let i = 0; i < card.length; i++){
    card[i].style.animationName = "movement";
    card[i].style.animationTimingFunction = "linear"
    card[i].style.animationIterationCount = 'infinite'
    card[i].style.animationDuration = time + 'ms';
    card[i].style.animationDelay = (-delay * i) + 'ms';
}