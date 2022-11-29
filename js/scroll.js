
let section2 = document.querySelector ('.section-2')
let tarjetanimation = document.querySelector ('.tarjetanimation')
let knowledge = document.querySelector ('.knowledge')
let container2 = document.querySelector ('.container2')
let studies = document.querySelector ('.studies')
let contact = document.querySelector ('.contact')
let gototop = document.querySelector ('.gototop')


tarjetanimation.addEventListener('click', () => {scrolleardo(1)})
knowledge.addEventListener('click', () => {scrolleardo(2)})
studies.addEventListener('click', () => {scrolleardo(3)})
contact.addEventListener('click', () => {scrolleardo(4)})
gototop.addEventListener('click', () => {GOTO()})


function scrolleardo (i) 
{

switch (i) {
    case 1:
          window.scrollTo({
          top: ((navbar.clientHeight)),
          behavior: 'smooth'
        }   )
        break;
    case 2:
        window.scrollTo({
            top: ((navbar.clientHeight + container.clientHeight)),
            behavior: 'smooth'
        }   )
        break;
    case 3:
            window.scrollTo({
                top: ((navbar.clientHeight + container.clientHeight + container2.clientHeight)),
                behavior: 'smooth'
            }   )
        break;

    case 4:
        window.scrollTo({
            top: ((navbar.clientHeight + container.clientHeight + section2.clientHeight + container2.clientHeight)),
            behavior: 'smooth'
        }   )
        break;
}

}


function GOTO () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}



if (window.scrollY < navbar.clientHeight) {
    gototop.classList.add('active');
} else {
    gototop.classList.remove('active');
}

window.onscroll = () => {
    if (window.scrollY < navbar.clientHeight) {
        gototop.classList.add('active');
    } else {
        gototop.classList.remove('active');
    }
};

