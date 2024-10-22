//  Methode: 1

/* function play(){
    // hiding home screen
    const homeScreen = document.getElementById('Home').classList
    homeScreen.add('hidden')
    // showing game screen
    const gameScreen = document.getElementById('Game').classList
    gameScreen.remove('hidden')
} */




function continueGame(){
    // step: 1 Generate a random alphabate
    const alphabate = getRandomAlphabet()
    // Show the random alphabate on the screen
    const screenlater = document.getElementById('currentAlphabate')
    screenlater.innerText = alphabate;
    // setting bg color
    setBgtoKeys(alphabate)
}


// Methode: 2 (from utility.js)

function play(){
    const removeElement = hideElementById('Home')
    const elementShow = showElementById('Game')
    continueGame()
}