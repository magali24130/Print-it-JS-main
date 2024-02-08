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

//les variables globales
const dots=document.querySelector(".dots");
const arrowRight = document.querySelector("arrow_right");
const arrowLeft = document.querySelector("arrow arrow_left");
const img = document.querySelector("container-carousel img");
const tagLine = document.querySelector("container-tagLine");

let index = 0

function main(){
	displayDots();
	clickRight();
	clickLeft();
}

main();


//affichage des dots
	function displayDots(){
		for(let i=0;i<slides.length;i++){
		const dot=document.createElement("div");
		dot.classList.add("dot");
		dots .appendChild(dot);
		console.log(displayDots)

		}
	}

//affichage au clic droit*/
	function clickRight(){
		arrowRight.addEventListener("click",()=>{
			const arrayDots = document.querySelectorAll(".dots.dot");
			arrayDots [index].classList.remove("dot_selected");
			index ++;
			if(index>arrayslides.length -1){
				index = 0;
			}
			img.src= arrayslides[index].imageUrl;
			tagLine.textContent = arrayslides [index].title;
			arrayDots [index].classList.add("dot_selected");
		})
	}

//affichage au clic gauche*/
function clickLeft(){
	arrowLeft.addEventListener("click",()=>{
		const arrayDots = document.querySelectorAll(".dots.dot");
		arrayDots [index].classList.remove("dot_selected");
		index --;
		if (index < 0){
			index = arrayslides.length - 1;
		}
		img.src= arrayslides[index].imageUrl;
		tagLine.textContent = arrayslides [index].title;
		arrayDots [index].classList.add("dot_selected");
	})
}

