////////// 
const characterList = document.querySelector('#character_list')
// const popUpGender = document.querySelector('#')
// const popUpName = document.querySelector('#')
// const popUpSpecies = document.querySelector('#')
// const popUpStatus = document.querySelector('#')

let characterData;




function getCharacters(){
    fetch('http://localhost:3000/characters')
    .then(r=>r.json())
    .then(json => {characterData = json;
        characterData.forEach(data => {
        renderCharacter(data);
        
        },
        
        )
})
}
getCharacters()

function renderCharacter(character){
    
const characterImage = document.createElement('img')
    characterImage.src = character.image;
    characterList.append(characterImage)
    // console.log(characterData[2]);
    // renderImage.addEventListener('mouseover', ()=> {
    // console.log("I've been mouseOvered")
    // characterPopUp(character)
// })
}

function characterPopUp(character){
    popUpName = character.name
    popUpStatus = character.status
    popUpSpecies = character.species
    popUpGender = character.gender
}










