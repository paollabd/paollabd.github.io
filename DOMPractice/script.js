function countFive(){
	var count = document.getElementById("first").getElementsByTagName("p").length;
	console.log(count);
	return count;	
}

function countSix(){
	var count = document.getElementById("second").getElementsByTagName("p").length;
	console.log(count);
	return count;	
}

function numCount(){
	var count = document.getElementsByTagName("p").length;
	console.log(count);
	return count;
}