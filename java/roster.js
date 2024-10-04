

/*
maybe try to add a feature on the roster list, that checks what class each item is, and add tags/picutres on
each profile div depending on what classes they have
*/

//const imageContainer = document.getElementById("image_placeholder")


var highAlphaImage = document.createElement("img")
highAlphaImage.setAttribute("src", "img/roles/highAlpha.png")
highAlphaImage.setAttribute("height", "50")
highAlphaImage.setAttribute("width", "50")
highAlphaImage.setAttribute("alt", "High Alpha Badge")

var highBetaImage = document.createElement("img")
highBetaImage.setAttribute("src", "img/roles/highBeta.jpg")
highBetaImage.setAttribute("height", "50")
highBetaImage.setAttribute("width", "50")
highBetaImage.setAttribute("alt", "High Beta Badge")

var highDeltaImage = document.createElement("img")
highDeltaImage.setAttribute("src", "img/roles/highDelta.jpg")
highDeltaImage.setAttribute("height", "50")
highDeltaImage.setAttribute("width", "50")
highDeltaImage.setAttribute("alt", "High Delta Badge")

var highEpsilonImage = document.createElement("img")
highEpsilonImage.setAttribute("src", "img/roles/highEpsilon.jpg")
highEpsilonImage.setAttribute("height", "50")
highEpsilonImage.setAttribute("width", "50")
highEpsilonImage.setAttribute("alt", "High Epsilon Badge")

var highGammaImage = document.createElement("img")
highGammaImage.setAttribute("src", "img/roles/highGamma.jpg")
highGammaImage.setAttribute("height", "50")
highGammaImage.setAttribute("width", "50")
highGammaImage.setAttribute("alt", "High Gamma Badge")

var highIotaImage = document.createElement("img")
highIotaImage.setAttribute("src", "img/roles/highIota.jpg")
highIotaImage.setAttribute("height", "50")
highIotaImage.setAttribute("width", "50")
highIotaImage.setAttribute("alt", "High Iota Badge")

var highKappaImage = document.createElement("img")
highKappaImage.setAttribute("src", "img/roles/highKappa.jpg")
highKappaImage.setAttribute("height", "50")
highKappaImage.setAttribute("width", "50")
highKappaImage.setAttribute("alt", "High Kappa Badge")

var highPhiImage = document.createElement("img")
highPhiImage.setAttribute("src", "img/roles/highPhi.jpg")
highPhiImage.setAttribute("height", "50")
highPhiImage.setAttribute("width", "50")
highPhiImage.setAttribute("alt", "High Phi Badge")

var highPiImage = document.createElement("img")
highPiImage.setAttribute("src", "img/roles/highPi.jpg")
highPiImage.setAttribute("height", "50")
highPiImage.setAttribute("width", "50")
highPiImage.setAttribute("alt", "High Pi Badge")

var highRhoImage = document.createElement("img")
highRhoImage.setAttribute("src", "img/roles/highRho.jpg")
highRhoImage.setAttribute("height", "50")
highRhoImage.setAttribute("width", "50")
highRhoImage.setAttribute("alt", "High Rho Badge")

var highSigmaImage = document.createElement("img")
highSigmaImage.setAttribute("src", "img/roles/highSigma.jpg")
highSigmaImage.setAttribute("height", "50")
highSigmaImage.setAttribute("width", "50")
highSigmaImage.setAttribute("alt", "High Sigma Badge")

var highTauImage = document.createElement("img")
highTauImage.setAttribute("src", "img/roles/highTau.jpg")
highTauImage.setAttribute("height", "50")
highTauImage.setAttribute("width", "50")
highTauImage.setAttribute("alt", "High Tau Badge")

var highThetaImage = document.createElement("img")
highThetaImage.setAttribute("src", "img/roles/highTheta.jpg")
highThetaImage.setAttribute("height", "50")
highThetaImage.setAttribute("width", "50")
highThetaImage.setAttribute("alt", "High Theta Badge")

var ritualPearlImage = document.createElement("img")
ritualPearlImage.setAttribute("src", "img/roles/ritualPearl.jpg")
ritualPearlImage.setAttribute("height", "50")
ritualPearlImage.setAttribute("width", "50")
ritualPearlImage.setAttribute("alt", "Ritual Pearl Badge")

var seniorRitImage = document.createElement("img")
seniorRitImage.setAttribute("src", "img/roles/seniorRit.jpg")
seniorRitImage.setAttribute("height", "50")
seniorRitImage.setAttribute("width", "50")
seniorRitImage.setAttribute("alt", "Senior Ritual Badge")




const profiles = document.getElementsByClassName("roster-profile")


for(let i=0; i<=profiles.length;i++){
  var x = 0

  let profileClassList = profiles[i].className /* This will return an array of classNames*/
  const profileArrayClasses = profileClassList.split(" ")


  const imageContainer = profiles[i].querySelector("#image_placeholder")//This used to be above


  /*For multiple classes, maybe switch the if statment or on the outside create a checking system that will compare the amount of 
  added images to how many classes the object has, and will keep running until the two numbers are the same?  */
  while(x < profileArrayClasses.length){
    x+=1
  if (profileArrayClasses.includes("roster-profile-beta")){/*check to see if the div already has the image, if so skip */

    const tempindex = profileArrayClasses.indexOf("roster-profile-beta")
    imageContainer.appendChild(highBetaImage)//Changing this so itll check profileArrayClasses for the tag, and then maybe pop it from the stack
    profileArrayClasses.slice(tempindex,1)
    delete(profileArrayClasses[tempindex])
    
  } else if(profileArrayClasses.includes("roster-profile-sweetheart")){ /*Main issue with this code now, is that there needs to be multiple image_placeholder(s) on screen */
    console.log("Sweetheart :)")
  } else if (profileArrayClasses.includes("roster-profile-theta")){
    const tempindex = profileArrayClasses.indexOf("roster-profile-theta")
    imageContainer.appendChild(highThetaImage)//Changing this so itll check profileArrayClasses for the tag, and then maybe pop it from the stack
    profileArrayClasses.slice(tempindex,1)
    delete(profileArrayClasses[tempindex])
  } else if (profileArrayClasses.includes("roster-profile-gamma")){
    const tempindex = profileArrayClasses.indexOf("roster-profile-gamma")
    imageContainer.appendChild(highGammaImage)//Changing this so itll check profileArrayClasses for the tag, and then maybe pop it from the stack
    profileArrayClasses.slice(tempindex,1)
    delete(profileArrayClasses[tempindex])
  } else if (profileArrayClasses.includes("roster-profile-tau")){
      const tempindex = profileArrayClasses.indexOf("roster-profile-tau")
      imageContainer.appendChild(highTauImage)//Changing this so itll check profileArrayClasses for the tag, and then maybe pop it from the stack
      profileArrayClasses.slice(tempindex,1)
      delete(profileArrayClasses[tempindex])
  } else if (profileArrayClasses.includes("roster-profile-iota")){
    const tempindex = profileArrayClasses.indexOf("roster-profile-iota")
    imageContainer.appendChild(highIotaImage)//Changing this so itll check profileArrayClasses for the tag, and then maybe pop it from the stack
    profileArrayClasses.slice(tempindex,1)
    delete(profileArrayClasses[tempindex])
  }  else if (profileArrayClasses.includes("roster-profile-rho")){
    const tempindex = profileArrayClasses.indexOf("roster-profile-rho")
    imageContainer.appendChild(highRhoImage)//Changing this so itll check profileArrayClasses for the tag, and then maybe pop it from the stack
    profileArrayClasses.slice(tempindex,1)
    delete(profileArrayClasses[tempindex])
  } else if (profileArrayClasses.includes("roster-profile-kappa")){
    const tempindex = profileArrayClasses.indexOf("roster-profile-kappa")
    imageContainer.appendChild(highKappaImage)//Changing this so itll check profileArrayClasses for the tag, and then maybe pop it from the stack
    profileArrayClasses.slice(tempindex,1)
    delete(profileArrayClasses[tempindex])
  } else if (profileArrayClasses.includes("roster-profile-delta")){
    const tempindex = profileArrayClasses.indexOf("roster-profile-delta")
    imageContainer.appendChild(highDeltaImage)//Changing this so itll check profileArrayClasses for the tag, and then maybe pop it from the stack
    profileArrayClasses.slice(tempindex,1)
    delete(profileArrayClasses[tempindex])
  } else if (profileArrayClasses.includes("roster-profile-phi")){
    const tempindex = profileArrayClasses.indexOf("roster-profile-phi")
    imageContainer.appendChild(highPhiImage)//Changing this so itll check profileArrayClasses for the tag, and then maybe pop it from the stack
    profileArrayClasses.slice(tempindex,1)
    delete(profileArrayClasses[tempindex])
  } else if (profileArrayClasses.includes("roster-profile-sigma")){
    const tempindex = profileArrayClasses.indexOf("roster-profile-sigma")
    imageContainer.appendChild(highSigmaImage)//Changing this so itll check profileArrayClasses for the tag, and then maybe pop it from the stack
    profileArrayClasses.slice(tempindex,1)
    delete(profileArrayClasses[tempindex])
  } else if (profileArrayClasses.includes("roster-profile-epsilon")){
    const tempindex = profileArrayClasses.indexOf("roster-profile-epsilon")
    imageContainer.appendChild(highEpsilonImage)//Changing this so itll check profileArrayClasses for the tag, and then maybe pop it from the stack
    profileArrayClasses.slice(tempindex,1)
    delete(profileArrayClasses[tempindex])
  } else if (profileArrayClasses.includes("roster-profile-pi")){
    const tempindex = profileArrayClasses.indexOf("roster-profile-pi")
    imageContainer.appendChild(highPiImage)//Changing this so itll check profileArrayClasses for the tag, and then maybe pop it from the stack
    profileArrayClasses.slice(tempindex,1)
    delete(profileArrayClasses[tempindex])
  } else if (profileArrayClasses.includes("roster-profile-ifc")){
    console.log("No image needed?")
  } else if (profileArrayClasses.includes("roster-profile-alumni-advisors")){
    console.log("No image needed?")
  } else if (profileArrayClasses.includes("roster-profile-alpha")){
    const tempindex = profileArrayClasses.indexOf("roster-profile-alpha")
    imageContainer.appendChild(highAlphaImage)//Changing this so itll check profileArrayClasses for the tag, and then maybe pop it from the stack
    profileArrayClasses.slice(tempindex,1)
    delete(profileArrayClasses[tempindex])
  } else if (profileArrayClasses.includes("roster-profile-alumni")){
    console.log("Alumni Badge needed")
  } else if (profileArrayClasses.includes("roster-profile-brother")){
    console.log("Brother Badge needed")
  } else {
    console.log("Error 1 - Error in Javascript appending images OR no image")
  }
}//end of the while loop

}
    //for each prfile 


