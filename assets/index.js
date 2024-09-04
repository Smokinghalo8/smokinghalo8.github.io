let responseField = document.getElementById("responsefield")
let clickAmountField = document.getElementById("amountOfClicks")
let clickAmount = 1

let responseArray = [
    "Try again Later",
    "Almost Certainly",
    "Hell naw",
    "I guess.... you shouldn't",
    "You 100% should",
    "I heard that one before"
]

//responseArray["rn1"] = "response1";//rn==responseNumber


/*
    key/dictionary example
    let dictionary = {};
   dictionary["key1"] = "value1";
   dictionary["key2"] = "value2";
   console.log(dictionary);
*/

function newResonse(){
    if(clickAmount==10){
        clickAmountField.innerHTML = "Wow, you sure like risking your life choices on a black ball!"
    }else if(clickAmount==100){
        clickAmountField.innerHTML = "You have a problem"
    }else if(clickAmount==1000){
        clickAmountField.innerHTML = "....please.... stop."
    }else if(clickAmount>=1000){
        clickAmountField.innerHTML = ""
    }else{
        clickAmountField.innerHTML = "You've clicked the button "+clickAmount+" times!"
    }
    //let generateRandomNumber = getRandomInt(1,4)
    clickAmount+=1
    let response = getResponse()
    responseField.innerHTML = response
}


//remake my own
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

function getResponse(){
    //Switch the font color maybe to color background instead to make it look better
    let tempRando = getRandomInt(0,6)
    if(tempRando==1){
        responseField.style.color = "red"
    }else if(tempRando==2){
        responseField.style.color = "yellow"
    }else if(tempRando==3){
        responseField.style.color = "green"
    }else if(tempRando==4){
        responseField.style.color = "orange"
    }else if(tempRando==5){
        responseField.style.color = "blue"
    }else if(tempRando==6){
        responseField.style.color = "purple"
    }else{
        responseField.style.color = "black"
    }
    return responseArray[tempRando]

}