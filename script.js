////////// 
const renderImage = document.querySelector('#')
const popUpGender = document.querySelector('#')
const popUpName = document.querySelector('#')
const popUpSpecies = document.querySelector('#')
const popUpStatus = document.querySelector('#')






function getCharacters(){
    fetch('http://localhost:3000/characters')
    .then(r=>r.json())
    .then(characterData => characterData.forEach(character => renderCharacter(character)))
}
getCharacters()

function renderCharacter(character){
    renderImage.src = character.image;
    renderImage.addEventListener('mouseover', ()=> {
    console.log("I've been mouseOvered")
    // characterPopUp(character)
})
}

function characterPopUp(character){
    popUpName = character.name
    popUpStatus = character.status
    popUpSpecies = character.species
    popUpGender = character.gender
}










