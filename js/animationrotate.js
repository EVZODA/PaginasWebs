let d = document;

let $containerCards = d.querySelector('.container2')

let $fragment = d.createDocumentFragment();

let cards = [
    {
        title:"Bachillerato en Ciencias Sociales", 
        subtitle: "Colegio 9 de Julio",
        time: "2012 - 2017",
        img: "img/graduation_hat.png",
    },
    {
        title:"Tecnicatura en informatica de gestion",
        subtitle:"Universidad Nacional de la Pampa",
        time:"2018 - 2022",
        img: "img/graduation_hat.png",
    },
    {
        title:"Diplomatura en Desarrollo Web Full Stack",
        subtitle: "Academia Numen",
        time: "En curso",
        img: "img/graduation_hat.png",
    },
    {
        title: "Pasantía",
        subtitle: "IPAV",
        time: "2021 - 2021",
        img: "img/pc.png",
    },
    {
        title: "Reparador de PC",
        subtitle: "emprendimiento",
        time: "en curso",
        img: "img/pc.png",
    }
];



cards.forEach(function(el){
    let $cardEl = d.createElement('figure'),
    $inforEl = d.createElement('article'),
    $cardTitle = d.createElement('h3'),
    $cardSubtitle = d.createElement('h4'),
    $cardTime = d.createElement('h5'),
    $imgContainer = d.createElement('div'),
    $img = d.createElement('img')

    $cardEl.appendChild($inforEl);
    $inforEl.appendChild($cardTitle);
    $inforEl.appendChild($cardSubtitle);
    $inforEl.appendChild($cardTime);
    $cardEl.appendChild($imgContainer);
    $imgContainer.appendChild($img);

    $cardEl.classList.add('card-1');
    $inforEl.classList.add('infor');
    $imgContainer.classList.add('imgrotate')
    $imgContainer.classList.add('visible')

    $cardTitle.innerHTML = el.title;
    $cardSubtitle.innerHTML = el.subtitle;
    $cardTime.innerHTML = el.time;
    $img.setAttribute('src', el.img);

    $fragment.appendChild($cardEl);
});

$containerCards.appendChild($fragment)

let $card1 = d.querySelectorAll('.card-1'),
    $infor = d.querySelectorAll('.infor'),
    $imgrotate = d.querySelectorAll('.imgrotate');

for (let i = 0; i < $card1.length; i++){
    $card1[i].addEventListener('click', () => {animationrotat(i)})
}

function animationrotat(i){
   
    $card1[i].style.transform = "rotateX(90deg)"

setTimeout( () => {
    $imgrotate[i].classList.toggle('visible')
    $infor[i].classList.toggle('visible')
    $card1[i].style.transform = "rotateX(0deg)"
},300)
}