//var s = document.getElementById("square-input").innerHTML;

//var h = document.getElementById("square-input").innerHTML;

//var p1 = document.getElementById("percent1-input").innerHTML;

//var p2 = document.getElementById("percent2-input").innerHTML;

//var a = document.getElementById("square-input").innerHTML;

document.getElementById("square-button").addEventListener("click", function(){
	squareNumber(document.getElementById("square-input").value);
});

document.getElementById("half-button").addEventListener("click", function(){
	halfNumber(document.getElementById("half-input").value);
});

document.getElementById("percent-button").addEventListener("click", function(){
	percentOf(document.getElementById("percent1-input").value, document.getElementById("percent2-input").value);
});

document.getElementById("area-button").addEventListener("click", function(){
	areaOfCircle(document.getElementById("area-input").value);
});

function squareNumber(num) {
	//var num = document.getElementById("square-input").innerHTML;
	var square = num**2;

	var res = "The result of squaring the number " + num + " is " + square;
	document.getElementById("solution").innerHTML = res;

	console.log("The result of squaring the number", num, "is",  square);
	return square;
}

function halfNumber(num) {
	var half = num/2;

	var res = "Half of " + num + " is " + half;
	document.getElementById("solution").innerHTML = res;

	console.log("Half of", num, "is", half);
	return  half;
}

function percentOf (num1, num2) {
	var percent = (100 * num1)/num2;

	var res = num1 + " is " + percent + " % of " + num2;
	document.getElementById("solution").innerHTML = res;

	console.log(num1, "is", percent + "% of", num2);
	return percent;
}

function areaOfCircle(radius) {
	var area = Math.PI*(radius**2);
	var area_rounded = area.toFixed(2);

	var res = "The area for a circle with radius " + radius + " is " + area_rounded;
	document.getElementById("solution").innerHTML = res;

	console.log("The area for a circle with radius", radius, "is", area_rounded);
	return area_rounded;
}