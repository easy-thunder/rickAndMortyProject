////////// getting constants from html and adding classes/////////////////


const characterList = document.querySelector('#character_list');
characterList.classList = "slateBackground", "width"
characterList.classList = "displayFlex"//note for some reason when I added these together they did not work//
const episodeList = document.querySelector('.episodes')
const breakLine = document.createElement('br')
let characterData;
// retrieving characters from json//
function getCharacters(getAddition = `results/?_limit=5`, render = renderCharacter){
    fetch(`http://localhost:3000/${getAddition}`)
    .then(r=>r.json())
    .then(characterResults => {characterData = characterResults;
        characterData.forEach(data => render(data));
    })}

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
    popUpName.append(episodeButton, breakLine, popUpImage, popUpStatus, popUpSpecies, popUpGender)
    card.append(popUpName)
    image.replaceWith(card)
    // add an event listener for mousingOut to just display the image//
    card.addEventListener("mouseout", e =>{
        card.replaceWith(image)
    })
    // this deletes any previous episodes and gets the new episodes
    episodeButton.addEventListener('click', e=> {
    episodeList.innerHTML="";
    character.episode.forEach(data => renderEpisodes(data))
    })

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
        initialValue
        );
        console.log(scoreTotal);

    
    let userName = e.target.name.value;
    let result;
    

    if(scoreTotal >= 50){
        result = 'Rick Sanchez';
        
    }else if (scoreTotal < 50 && scoreTotal >= 40){
        result = 'Summer Smith';
        
    }else if (scoreTotal < 40 && scoreTotal >= 30){
        result = 'Morty Smith';
        
    }else if(scoreTotal < 30 && scoreTotal >= 20){
        result = 'Beth Smith';
        
    } else if(scoreTotal < 20){
        result = 'Jerry Smith';
        
    }
    historyTable(userName, result)
    renderCard(userName, result)

    e.target.reset();
})

///////////////////////////////////////////
//////// fetching history info ////////////
///////////////////////////////////////////
let historyData;
let i;
fetch('http://localhost:3000/history')
.then(res => res.json())
.then(json => {
    historyData = json,
    historyData.forEach(renderHistory)
    i = ++historyData.length;
    console.log(i)
})



///////////////////////////////////////////
//////// rendering history form ///////////
///////////////////////////////////////////


function renderHistory(data){
    

    const trNew = document.createElement('tr');
    const tdNum = document.createElement('td');
    const tdName = document.createElement('td');
    const tdReview = document.createElement('td');
    const tdCharacter = document.createElement('td');

    tdCharacter.textContent = data.character;
    tdNum.textContent = data.id;
    tdName.textContent = data.user;
    tdReview.textContent = data.review;

    const table = document.getElementById('history-list');

    table.append(trNew);
    trNew.append(tdNum, tdName, tdCharacter, tdReview);
}





///////////////////////////////////////////
//////// updating history form ////////////
///////////////////////////////////////////


function historyTable(name, characterSelect) {
    if(characterSelect === undefined){
        alert('In Order to see your character, please answer all questions')
    }else{

    const trNew = document.createElement('tr');
    const tdNum = document.createElement('td');
    const tdName = document.createElement('td');
    const tdReview = document.createElement('td')
    const tdCharacter = document.createElement('td');


    tdNum.textContent = i;
    tdName.textContent = name;
    tdCharacter.textContent = characterSelect;
    tdReview.id = i;
    

    const table = document.getElementById('history-list');

    table.append(trNew);
    trNew.append(tdNum, tdName, tdCharacter, tdReview);


    let postObj = {
        character: characterSelect,
        user: name,
        review: "",
    }
    console.log(postObj)
    getPost(postObj)
    return i = i + 1;
    }
}

///////////////////////////////////////////
/////////// satisfied dropdown ////////////
///////////////////////////////////////////


const satisfiedDropdown = document.querySelector('#satisfied');
satisfiedDropdown.addEventListener('change', (e) => {
    let k = i - 1;
    console.log('change');
    let result = document.querySelector('#review').value;
    let satisfiedChange = document.getElementById(`${k}`);
    satisfiedChange.textContent = result;

    let patchObj = {
        review: result
    }

    getPatch(k, patchObj)
})







///////////////////////////////////////////
/////////// Render Card function //////////
///////////////////////////////////////////

function renderCard(userName, character) {
    let h2 = document.querySelector('#user-Name');
    let img = document.querySelector('#character-select');
    let h3 = document.querySelector('#character-bio');
    console.log(userName, character)
    h2.textContent = `${userName}, you are a ${character}`;
    let characterId;
    console.log(characterData)
    for(const element of characterData){
        //console.log(element.name)
        if(character === element.name){
            img.src = element.image;
            h3.textContent = element.bio;
        }
    }

}



///////////////////////////////////////////
/////////// Post function /////////////////
///////////////////////////////////////////

function getPost(obj) {
    fetch('http://localhost:3000/history', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(obj)
    })
    .then(res => res.json())
}

///////////////////////////////////////////
/////////// Patch function ////////////////
///////////////////////////////////////////

function getPatch(id, obj) {
    fetch(`http://localhost:3000/history/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(obj) 
    })
    .then(res => res.json())
}