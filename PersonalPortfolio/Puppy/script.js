var img = document.getElementById("bone")


function showImg(event)
{ 
	var x = parseInt(event.clientX);
	var y = parseInt(event.clientY);
	img.style.display="block";
	img.style.position = 'absolute';
	img.style.left  = x + 'px'; 
	img.style.top  =  y + 'px'; 
} 
