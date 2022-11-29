let square = document.querySelectorAll('.square1');
let details = document.querySelector('.details');
let progress = document.querySelector('.progress')

for (let i = 0; i < square.length; i++){
    square[i].addEventListener('click', () => {squareAnim(i)});
}

function squareAnim(i){
    switch (i) {
        case 0:
             progress.style.width = "90%"
             progress.style.backgroundColor = "rgb(255, 51, 0)"
            break;
        case 1:
            progress.style.width = "85%"
            progress.style.backgroundColor = "rgb(0, 174, 255)"
            break;
        case 2:
            progress.style.width = "75%"
            progress.style.backgroundColor = "rgb(246, 217, 94)"
            break;
        case 3:
            progress.style.width = "80%"
            progress.style.backgroundColor = "rgb(0, 255, 255)"
            break;
        case 4:
            progress.style.width = "65%"
            progress.style.backgroundColor = "rgb(87, 166, 70)"
            break;
        case 5:
            progress.style.width = "65%"
            progress.style.backgroundColor = "rgb(93, 64, 55)"
            break;
        case 6:
            progress.style.width = "95%"
            progress.style.backgroundColor = "rgb(90, 66, 133)"
            break;
        case 7:
            progress.style.width = "90%"
            progress.style.backgroundColor = "rgb(0, 0, 0)"
            break;
       
    }
}







