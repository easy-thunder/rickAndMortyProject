////////// 
// const renderImage = document.querySelector('#')
// const popUpGender = document.querySelector('#')
// const popUpName = document.querySelector('#')
// const popUpSpecies = document.querySelector('#')
// const popUpStatus = document.querySelector('#')






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










///////////////////////////////////////////
/// which character are you submit form ///
///////////////////////////////////////////
const questionForm =  document.querySelector('#question-form');
questionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let q1 = parseInt(e.target.question1.value);
    let q2 = parseInt(e.target.question2.value);
    let q3 = parseInt(e.target.question3.value);
    let q4 = parseInt(e.target.question4.value);
    let q5 = parseInt(e.target.question5.value);
    let q6 = parseInt(e.target.question6.value);
    let q7 = parseInt(e.target.question7.value);
    let q8 = parseInt(e.target.question8.value);
    let q9 = parseInt(e.target.question9.value);
    let q10 = parseInt(e.target.question10.value);
    let scoreArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
    const initialValue = 0;
    let scoreTotal = scoreArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue);
    console.log(scoreTotal)
    if(scoreTotal === 20){
        console.log('IM RICK BITCH!')
        //callback function
    }else if (scoreTotal >= 16 && scoreTotal < 20){
        console.log('I am Summer and dont talk to me!')
        //callback function
    }else if (scoreTotal < 16 && scoreTotal >= 12){
        console.log("I- I guess I am M-Morty")
        //callback function
    }else if(scoreTotal < 12 && scoreTotal >= 8){
        console.log('Hi I am mom or I mean Beth!')
        //callback function
    } else if(scoreTotal < 8){
        console.log('oh man, I a Jerry...')
        //callback function
    }
    
})