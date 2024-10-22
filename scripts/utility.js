// methode: 2

function hideElementById(elementId){
    const element = document.getElementById(elementId).classList
    const elementHide = element.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId).classList
    const elementShow = element.remove('hidden')
}


// continueGame Function

function getRandomAlphabet(){
    // get alphabate array
    const alphabateString = "abcdefghijklmnopqrstuvwxyz";
    const alphabates = alphabateString.split('')
    // get a random index
    const randomNumber = Math.random()*25
    const randomIndex = Math.round(randomNumber)
    const randomAlphabet = alphabates[randomIndex]
    return randomAlphabet
}


// add bg to keypads

function setBgtoKeys(keyId){
    const key = document.getElementById(keyId)
    key.classList.add('bg-orange-400')
}