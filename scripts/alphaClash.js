//  Methode: 1

/* function play(){
    // hiding home screen
    const homeScreen = document.getElementById('Home').classList
    homeScreen.add('hidden')
    // showing game screen
    const gameScreen = document.getElementById('Game').classList
    gameScreen.remove('hidden')
} */



// Methode: 2 (utility.js)

function play(){
    const removeElement = hideElementById('Home')
    const elementShow = showElementById('Game')
}