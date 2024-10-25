//  Methode: 1

/* function play(){
    // hiding home screen
    const homeScreen = document.getElementById('Home').classList
    homeScreen.add('hidden')
    // showing game screen
    const gameScreen = document.getElementById('Game').classList
    gameScreen.remove('hidden')
} */


// Capturing keypress

function keyPress(event){
    const playerPressed = event.key.toUpperCase()
    const onDisplayKey = document.getElementById('currentAlphabate').innerText
    if(onDisplayKey === playerPressed){
        console.log('you got a point')
        
        // score update / (also can be done using function)
        const score = document.getElementById('current-score')
        const currentScoreText = score.innerText
        const currentScore = parseInt(currentScoreText)
        const newScore = currentScore + 1
        score.innerText = newScore;
        
        removeBgfromKeys(event.key)
        continueGame()
    }
    
    else{
        console.log('you lose a point')

        // life update / (also can be done using function)
        const life = document.getElementById('current-life')
        const currentLifeText = life.innerText
        const currentLife = parseInt(currentLifeText)
        const newLife = currentLife - 1
        life.innerText = newLife;

        // if life is 0
        if(newLife < 1){
            hideElementById('Game')
            showElementById('Final-Score')
            // final score page
            const lastScore = document.getElementById('current-score').innerText
            const finalScore = document.getElementById('finalScoreNumber')
            finalScore.innerText = lastScore;
        }
    }
}

document.addEventListener('keyup', keyPress);



// To continue the game

function continueGame(){
    // step: 1 Generate a random alphabate
    const alphabate = getRandomAlphabet()
    // Show the random alphabate on the screen
    const screenLater = document.getElementById('currentAlphabate')
    screenLater.innerText = alphabate;
    // setting bg color
    setBgToKeys(alphabate)
}


// Methode: 2 (from utility.js)

function play(){
    hideElementById('Home')
    showElementById('Game')
    continueGame()
}

// Play again

function playAgain(){
    hideElementById('Final-Score')
    showElementById('Game')
    setScoreLifeById('current-life', 5)
    setScoreLifeById('current-score', 0)
    // remove bg from the key
    const currentAlphabate = document.getElementById('currentAlphabate')
    removeBgfromKeys(currentAlphabate)
    continueGame()
}

