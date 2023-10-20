

var elem = document.querySelector('#coffeeimg');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.25;
	elem.style.transform = `rotate(${value}deg)`; 
});

var nav_list = document.querySelector('.nav-list');

var close = document.querySelector("#close");
close.addEventListener("click",()=>{
nav_list.style.transform = "translateX(-100%)";
})

var open = document.querySelector("#open");

open.addEventListener("click",()=>{
nav_list.style.transform = "translateX(0%)";
})
