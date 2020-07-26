"use strict";
window.onload = function(){
	const startButton = document.getElementById("start");
	const stopButton = document.getElementById("stop");
	stopButton.disabled = true;
	
	const animation = document.getElementById("animation");
	const fontSize = document.getElementById("fontsize");
	const speed = document.getElementById("turbo");
	//set events
	startButton.onclick = onStartBtnClick;
	stopButton.onclick = onStopBtnClick;
	animation.onchange = animationChanged;
	fontSize.onchange = fontSizeChanged;
	turbo.onchange = speedChanged;
}

const DEFAULT_INTERVAL = 250;
const CUSTOM_INTERVAL = 50;
let animationInterval = DEFAULT_INTERVAL;
let startAnimationIntervalId = null;
let text = null;
let index = 0;
let frames = null;

function getItem(id){
	return document.getElementById(id);
}
// Start button click
function onStartBtnClick() {
	let textarea = getItem("main-text");
	text = textarea.value;
	
	let animation = getItem("animation");	
	frames = ANIMATIONS[animation.value].split("=====\n");
	index = 0;
	//disable buttons
	getItem("stop").disabled = false;
    getItem("start").disabled = true;
	
	startAnimationInterval();
	
}
//Stop button click
function onStopBtnClick() {
   getItem("main-text").value = text;
   //disable buttons
   getItem("stop").disabled = true;
   getItem("start").disabled = false;
   
   stopAnimationInterval();
}
//Change animation
function animationChanged() {
    let animationTxt = ANIMATIONS[getItem("animation").value];
    frames = animationTxt.split("=====\n");
    index = 0;
}
//Change font size
function fontSizeChanged() {
	getItem("main-text").style.fontSize = getItem("fontsize").value;
}
//Change speed
function speedChanged() {
    stopAnimationInterval();
	startAnimationInterval();
}
//Start interval
function startAnimationInterval() {
    let speed = getItem("turbo");
	startAnimationIntervalId = setInterval(function(){
		if(index == frames.length) index = 0;
		getItem("main-text").value = frames[index++];
	},speed.checked == false ? DEFAULT_INTERVAL: CUSTOM_INTERVAL);
}
//Stop interval
function stopAnimationInterval() {
   clearInterval(startAnimationIntervalId);
}






