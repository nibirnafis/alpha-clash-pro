function hideElementById(elementId){
    const element = document.getElementById(elementId).classList
    const elementHide = element.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId).classList
    const elementShow = element.remove('hidden')
}