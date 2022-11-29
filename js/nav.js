let navbar = document.querySelector('.navbar');
let logo = document.querySelector('.logo');
let burguerContainer = document.querySelector('.burguer');
let burguer = document.querySelector('.burguer-btn');
let nav_menu = document.querySelector('.nav_menu');
let nav_item = document.querySelectorAll('.nav_item');
let dropmenuContainer = document.querySelectorAll('.dropdown');
let dropdownmenu = document.querySelectorAll('.dropdown-menu');
let expanded = 0;



navbar.style.height = (logo.clientHeight) + 'px'
burguerContainer.style.height = logo.clientHeight + 'px'
let initialNavHeight = (logo.clientHeight)
let expandedNavHeight = (logo.clientHeight + nav_menu.clientHeight)

function expand() {
    if (expanded == 0) {
        navbar.style.height = expandedNavHeight + 'px';
        for (let i = 0; i < nav_item.length; i++) {
            nav_item[i].style.animationName = 'slideIn'
            nav_item[i].style.animationDelay = i * 100 + 'ms'
        }
        expanded = 1;
    } else {
        navbar.style.height = initialNavHeight + 'px';
        for (let i = 0; i < nav_item.length; i++) {
            nav_item[i].style.animationName = ''
        }
        expanded = 0;

        for (let i = 0; i < dropdownmenu.length; i++) {
        dropdownmenu[i].style.height = "0px";
        dropdownmenu[i].style.padding = "0px 3px 0px 3px";
        }
        
    }
}

burguer.addEventListener('click', () => {expand()})

for (let i = 0; i < dropmenuContainer.length; i++){
    dropmenuContainer[i].addEventListener('click', () => {dropdown(i)})
}

function dropdown(i) {
    if (dropdownmenu[i].clientHeight === 0) {
        dropdownmenu[i].style.height = (dropdownmenu[i].children.length * dropdownmenu[i].children[0].clientHeight) + 6 + "px";
        dropdownmenu[i].style.padding = "3px";

        if (window.innerWidth < 768) {
            navbar.style.height = (dropdownmenu[i].children.length * dropdownmenu[i].children[0].clientHeight) + expandedNavHeight + "px";
        }

        
    } else {
        dropdownmenu[i].style.height = "0px";
        dropdownmenu[i].style.padding = "0px 3px 0px 3px";

        if (window.innerWidth < 768) {
            navbar.style.height = expandedNavHeight + "px";
        }
    }
}

window.onresize = () => {
    expandedNavHeight = (logo.clientHeight + nav_menu.clientHeight)
}