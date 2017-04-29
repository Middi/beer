function next() {
	
	var count = document.getElementById("high").textContent;
	
  if(count>1) {
		document.getElementById("high").innerHTML = count -1;
		document.getElementById("repeat").innerHTML = count -1;
		document.getElementById("low").innerHTML = count -2;
	}
}

