//script.js

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

/* Variables */

const dotsContainer = document.querySelector(".dots");
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const img = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");

let index = 0;

function createDot(i){
	const dot= document.createElement("div");
	dot.classList.add("dot");
	dotsContainer.appendChild(dot);
	dot.addEventListener("click",0 => {
		updateCarousel (i);
	});
	if (i === index){
		dot.classList.add ("dot_selected");
	}

}


function displayDots(){
	for (let i = 0; i < slides.length; i++){
		createDot(i);
	}
}


function updateCarousel(i){
	const selectDots = document.querySelectorAll(".dots.dot");
	selectDots[index].classList.remove("dot_selected");
	index = i;
	img.src = slides[index].imageUrl;
	tagLine.innerHTML = slides[index].tagLine;
	selectDots[index].classList.add("dot_selected");
}

function slide(direction){
	const selectDots = document.querySelectorAll(".dots.dot");
	selectDots[index].classList.remove("dot_selected");
	if ( direction === "right"){
		index = (index - 1) % slides.length;
	} else {
		index = (index - 1 + slides.length) % slides.length;
	}
	tagLine.innerHTML = slides[index].tagLine;
	selectDots[index].classList.add("dot_selected");
}

function slideRight(){
	slide("right");
}

function slideLeft(){
	slide("left");
}

function autoSlide(){
	autoSlideInterval = setInterval (() => {
	slideRight();
}, 3000); /*3000 millisecondes = 3 secondes*/
}
	arrowRight.addEventListener("click", slideRight);
	arrowLeft.addEventListener("click", slideLeft);
	dotsContainer.addEventListener("click", ()=>{
		clearInterval(autoSlideInterval);
		autoSlide();
	});
	for (let i = 0; i<slides.length;i++){
		const imageObj = new Image();
		imageObj.src = slides[i].imageUrl;
}

preloadImages();
	autoSlide();
	displayDots();