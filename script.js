////////// getting constants from html and adding classes/////////////////


const characterList = document.querySelector('#character_list');
characterList.classList = "slateBackground", "width"
characterList.classList = "displayFlex"//note for some reason when I added these together they did not work//
const episodeList = document.querySelector('.episodes')
const breakLine = document.createElement('br')
let characterData;
// retrieving characters from json//
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
// places images along image bar//
function renderCharacter(character){
const characterImage = document.createElement('img')
    characterImage.src = character.image;
    characterList.append(characterImage)
    //this is where the hoverOver function is/////
    characterImage.addEventListener('mouseover', (e)=> {
    characterPopUp(character, characterImage)
})
}
/// on hoverOver of image will display details about character///
function characterPopUp(character, image){
    // defining the elements that go in the pop-up card//
    let popUpName = document.createElement('h2')
    popUpName.classList = "shadow"
    let popUpStatus = document.createElement('h4')
    let popUpSpecies = document.createElement('h4')
    let popUpGender = document.createElement('h4')
    let card = document.createElement('div')
    card.classList = "popOut"
    let popUpImage = document.createElement('img')
    let episodeButton = document.createElement('button')
    episodeButton.textContent = `${character.name}'s episode's`
    episodeButton.style.alignSelf = "center"
    episodeButton.style.color = "blue"
    episodeButton.style.backgroundColor = "yellow"
    episodeButton.style.cursor = "pointer"
    
    // connect popup elements with the json//
    popUpImage.src = character.image
    popUpName.textContent = character.name
    popUpStatus.textContent = `Living?: ${character.status}`
    popUpSpecies.textContent = `species: ${character.species}`
    popUpGender.textContent = `gender: ${character.gender}`
    //append elements to name (wouldn't work with appending everything to card) and appended the name to the card////
    popUpName.append( episodeButton, popUpImage, popUpStatus, popUpSpecies, popUpGender, )
    card.append(popUpName)
    image.replaceWith(card)
    // add an event listener for mousingOut to just display the image//
    card.addEventListener("mouseout", e =>{
        card.replaceWith(image)
    })
    // this deletes any previous episodes and gets the new episodes
    episodeButton.addEventListener('click', e=> {postEpisodes(character)
    episodeList.innerHTML=""
        
    })

}

// the post for posting the episodes from json to episodes in html//
function postEpisodes(character){
    fetch(`http://localhost:3000/results/${character.id}`)
    .then(r=>r.json())
    .then(cartoon => cartoon.episode.forEach(episode=>{renderEpisodes(episode)
    
    }))
}
// renders the episode to dom note that the link isn't working so instead I sliced the last part of the link to only append the episode.
function renderEpisodes(episode){
    const episodes = document.createElement("li")

    episodes.textContent = episode
    alteredEpisode = document.createElement('li')
    alteredEpisode.textContent = episodes.textContent.slice(episodes.textContent.length - 10)
    
    episodeList.append(alteredEpisode);
    console.log(episodes.textContent);
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