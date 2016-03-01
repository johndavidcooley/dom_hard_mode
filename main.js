var one, two, three, four, five;
var six, seven, eight, nine, zero;
var plus, minus, multiply, divide;
var decimal, equals, display, clear;

one = document.querySelector('#one');
two = document.querySelector('#two');
three = document.querySelector('#three');
four = document.querySelector('#four');
five = document.querySelector('#five');
six = document.querySelector('#six');
seven = document.querySelector('#seven');
eight = document.querySelector('#eight');
nine = document.querySelector('#nine');
zero = document.querySelector('#zero');
plus = document.querySelector('#plus');
minus = document.querySelector('#minus');
multiply = document.querySelector('#multiply');
divide = document.querySelector('#divide');
decimal = document.querySelector('#decimal');
equals = document.querySelector('#equals');
display = document.querySelector('#display');
clear = document.querySelector('#clear');

function logOne() {
	// var toTheDisplay = event.currentTarget;
	display.textContent =  display.textContent + "1";
}

function logTwo() {
	// var toTheDisplay = event.currentTarget;
	display.textContent =  display.textContent + "2";
}

function logThree() {
	// var toTheDisplay = event.currentTarget;
	display.textContent =  display.textContent + "3";
}

function logFour() {
	// var toTheDisplay = event.currentTarget;
	display.textContent =  display.textContent + "4";
}

function logFive() {
	// var toTheDisplay = event.currentTarget;
	display.textContent =  display.textContent + "5";
}

function logSix() {
	// var toTheDisplay = event.currentTarget;
	display.textContent =  display.textContent + "6";
}

function logSeven() {
	// var toTheDisplay = event.currentTarget;
	display.textContent =  display.textContent + "7";
}

function logEight() {
	// var toTheDisplay = event.currentTarget;
	display.textContent =  display.textContent + "8";
}

function logNine() {
	// var toTheDisplay = event.currentTarget;
	display.textContent =  display.textContent + "9";
}

function logZero() {
	// var toTheDisplay = event.currentTarget;
	display.textContent =  display.textContent + "0";
}

function logPlus() {
	// var toTheDisplay = event.currentTarget;
	display.textContent =  display.textContent + "+";
}

function logMinus() {
	// var toTheDisplay = event.currentTarget;
	display.textContent =  display.textContent + "-";
}

function logMultiply() {
	// var toTheDisplay = event.currentTarget;
	display.textContent =  display.textContent + "*";
}

function logDivide() {
	// var toTheDisplay = event.currentTarget;
	display.textContent =  display.textContent + "/";
}

function logDecimal() {
	// var toTheDisplay = event.currentTarget;
	display.textContent =  display.textContent + ".";
}

function logClear() {
	display.textContent = "";
}

function logEquals() {
	display.textContent = eval(display.textContent);
}

one.addEventListener('click', logOne);
two.addEventListener ('click', logTwo);
three.addEventListener ('click', logThree);
four.addEventListener ('click', logFour);
five.addEventListener ('click', logFive);
six.addEventListener ('click', logSix);
seven.addEventListener ('click', logSeven);
eight.addEventListener ('click', logEight);
nine.addEventListener ('click', logNine);
zero.addEventListener ('click', logZero);
plus.addEventListener ('click', logPlus);
minus.addEventListener ('click', logMinus);
multiply.addEventListener ('click', logMultiply);
divide.addEventListener ('click', logDivide);
decimal.addEventListener ('click', logDecimal);
clear.addEventListener ('click', logClear);
equals.addEventListener ('click', logEquals);