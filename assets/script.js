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
	dotsContainer.appendChild(dot);
	dot.addEventListener("click")

}