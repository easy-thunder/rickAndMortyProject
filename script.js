////////// 


const characterList = document.querySelector('#character_list');
characterList.classList = "slateBackground", "width"

characterList.classList = "displayFlex"

const breakLine = document.createElement('br')

let characterData;




function getCharacters(){
    fetch('http://localhost:3000/results?_limit=5')
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
    characterImage.addEventListener('mouseover', (e)=> {
    characterPopUp(character, characterImage)
})
}

function characterPopUp(character, image){
    let popUpName = document.createElement('h2')
    popUpName.classList = "shadow"
    let popUpStatus = document.createElement('h4')
    let popUpSpecies = document.createElement('h4')
    let popUpGender = document.createElement('h4')
    let card = document.createElement('div')
    card.classList = "popOut"
    let popUpImage = document.createElement('img')
    
    
    popUpImage.src = character.image
    popUpName.textContent = character.name
    popUpName.style.textShadow = ""
    popUpStatus.textContent = `Living?: ${character.status}`
    popUpSpecies.textContent = `species: ${character.species}`
    popUpGender.textContent = `gender: ${character.gender}`
    popUpName.append(breakLine, popUpImage, popUpStatus, popUpSpecies, popUpGender)
    card.append(popUpName)

    image.replaceWith(card)
    card.addEventListener("mouseout", e =>{
        card.replaceWith(image)
    })
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
    if(scoreTotal >= 50){
        console.log('IM RICK BITCH!')
        //callback function
    }else if (scoreTotal >= 40 && scoreTotal < 50){
        console.log('I am Summer and dont talk to me!')
        //callback function
    }else if (scoreTotal < 40 && scoreTotal >= 30){
        console.log("I- I guess I am M-Morty")
        //callback function
    }else if(scoreTotal < 30 && scoreTotal >= 20){
        console.log('Hi I am mom or I mean Beth!')
        //callback function
    } else if(scoreTotal < 20){
        console.log('oh man, I a Jerry...')
        //callback function
    }
    
})