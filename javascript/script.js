var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("#main")
var css = document.querySelector("h3")

function getGradient(){
	body.setAttribute("style","background:linear-gradient(to right,"+color1.value +","+color2.value+");");
	css.textContent = "css syntx:-"+" "+"background:linear-gradient(to right,"+color1.value +","+color2.value+");"
}

color1.addEventListener("input", getGradient);
color2.addEventListener("input", getGradient);