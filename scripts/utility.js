// methode: 2

function hideElementById(elementId){
    const element = document.getElementById(elementId).classList
    elementHide = element.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId).classList
    elementShow = element.remove('hidden')
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

function setBgToKeys(keyId){
    const key = document.getElementById(keyId)
    key.classList.add('bg-orange-400')
}

// remove bg from keypads

function removeBgfromKeys(keyId){
    const key = document.getElementById(keyId)
    key.classList.remove('bg-orange-400')
}

// remove bg from keys after play again



// restart score/Life

function setScoreLifeById(scoreLifeId, value){
    const reScoreLife = document.getElementById(scoreLifeId)
    reScoreLife.innerText = value
}