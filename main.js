function next() {
	
	var count = document.getElementById("high").textContent;
	
    document.getElementById("high").innerHTML = count -1;
	document.getElementById("repeat").innerHTML = count -1;
	document.getElementById("low").innerHTML = count -2;
}

