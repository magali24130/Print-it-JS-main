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
 let numero = 0;

//les variables globales
const dots = document.querySelector(".dots");
const slide = ["slide 1", "slide 2", "slide 3", "slide 4"]


function main(){
	displayDots();
	ChangeSlide();
}

main();


//affichage des dots
	function displayDots(){
		for(let i=0;i<slides.length;i++){
		const dot=document.createElement("div");
		dot.classList.add("dot");
		dots .appendChild(dot);
		

		}
	}
à
function ChangeSlide(sens){
	numero = numero +  sens;
	if (numero>slides.length - 1 )
		numero = 0;
	if (numero < 0)
		numero = slides.length 0;

	document.getElementById ("slide").src ="slides/" + slide [numero];
}