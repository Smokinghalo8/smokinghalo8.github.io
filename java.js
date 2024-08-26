let totallyRealVariable = document.getElementById("variabled")
let tempInteger = 0;

var TempStringVar1= document.getElementById("tempTextPlace");
TempStringVar1.style.display="none";

function changeTextTemp() {
	if(tempInteger==0){
	totallyRealVariable.innerHTML = "Did I just change that? :o"
	tempInteger+=1;
	} else if(tempInteger==1){
		totallyRealVariable.innerHTML = "I did :)"
		tempInteger+=1;
	} else if(tempInteger==2){
		totallyRealVariable.innerHTML = "If you press that button one more time...."
		tempInteger+=1;
	} else if(tempInteger==3){
		//Hopefully this will now just toggle visibility of tempTextPlace
			if (TempStringVar1.style.display === "none"){
				TempStringVar1.style.display = "block";
			} else {
				TempStringVar1.style.display="none";
			}
		totallyRealVariable.innerHTML = "No more please :("
		//When coding this section, we need to remove old class and append new class, we can use
		//let tempVar = document.getElementById(""theOnlyButton"").className; <-- I also just made that ID name, so... who knows if it'll work XD
		//removeOldClass("variabled");  I dont know why but this one isn't working so yayyy, so much fun... yayyyyy :( 
	} else{
		totallyRealVariable.innerHTML = "Error in JavaScript! Function changeTextTemp() is broken!"
	}
}


/*

Booooooo, this code stinks and doesnt work for whatever reason :/

function removeOldClass(ID){
	if(document.getElementById(ID).className=="IncitingText"){
		totallyRealVariable.classList.remove("IncitingText")
	}
}


*/


//added rainbox text because I think it looks cool asf
window.addEventListener("load", function(){
	var elementalElements = document.getElementsByClassName("RainbowText");
	for (let i=0;i<elementalElements.length;i++){
		createColorfulText(elementalElements[i]);
	}
});

function createColorfulText(element){
	var text = element.innerText;
	element.innerHTML = "";
	for(let i = 0; i< text.length;i++){
		let CharacterElement = document.createElement("span");
		CharacterElement.style.color = "hsl(" + (360* i /text.length) + ",80%,50%)";
		CharacterElement.innerHTML = text[i];
		element.appendChild(CharacterElement);
	}

}






//Just trying a method of santizing input wip
//Did I finish this? Mostly. Am I going to use it? Hell no. Where would I even use it yknow?
function sanitizeInput(string) {
	const map = {
		'&':'&amp;',
		'<':'&lt;',
		'>':'&gt;',
		'"':'&quot;',
		"'":'&#x27;',
		"/":'&#x2F;',
	};
	const register = /[&<>"'/]/ig;
	return string.replace(register, (match)=>(map[match]));
}