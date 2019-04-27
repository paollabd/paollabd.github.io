var img = document.getElementById("bone")

function showImg(event)
{ 
	var x = event.clientX;
	var y = event.clientY;
	//document.getElementById("bone").style.left = x+"px";
	// document.getElementById("bone").style.top = y+"px";
	// document.getElementById("bone").replace(x, y);
	img.style.display="block"; 
	img.style.left = x + 'px';
	img.style.top = y + 'px';
} 
