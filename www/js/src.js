const logo = document.querySelector(".logo");
const main = document.getElementById('#main');
const searchInput = document.querySelector('[data-search]');
const searchButton = document.querySelector('#submit');

let characters = [];

logo.addEventListener("click", () =>{
    clear();
    printCharacters();
    showButtons();
});
    

async function getCharacters(value) {
    const response = await fetch('https://rickandmortyapi.com/api/character', {});
    const data = await response.json();
    const results = data.results.filter(character => character.name.includes(value));
    return results;
};

async function printCharacters()  {
    const response = await fetch('https://rickandmortyapi.com/api/character', {});
    const data = await response.json();
    characters = data.results.forEach(character => {
        const article = document.createRange().createContextualFragment(
            `
            <article id="document-fragment">
                <div class="image__container">
                    <img src="${character.image}" alt="${character.name}">
                </div>
                <div class="info__container">
                    <h2>${character.name}</h2>
                    <span>${character.status}</span>
                    <div class="info__hidden">
                        <p>Species: ${character.species}</p>
                        <p>Origin: ${character.origin.name}</p>
                    </div>
                </div>
            </article>
            `);

            const main = document.querySelector("main");
            main.append(article);
        return {name: character.name};
    });
};

printCharacters();
searchButton.addEventListener("click", searchCharacter);

async function searchCharacter() {
    clear();
    hideButtons();
    const valueInput = searchInput.value;
    const valueUpperCase = valueInput[0].toUpperCase();
    const charResult = await getCharacters(valueUpperCase);    
    for(let i=0; i<charResult.length;i++){
        const article = document.createRange().createContextualFragment(
            `
            <article id="document-fragment">
                <div class="image__container">
                    <img src="${charResult[i].image}" alt="${charResult[i].name}">
                </div>
                <div class="info__container">
                    <h2>${charResult[i].name}</h2>
                    <span>${charResult[i].status}</span>
                    <div class="info__hidden">
                        <p>Species: ${charResult[i].species}</p>
                        <p>Origin: ${charResult[i].origin.name}</p>
                    </div>
                </div>
            </article>
            `);

            const main = document.querySelector("main");
            main.append(article);
    }

};

function clear() {
    document.querySelector("main").innerHTML= '';
}

// Pagination
const previousButton = document.querySelector('#pages__link__previous');
const nextButton = document.querySelector('#pages__link__next');

previousButton.addEventListener("click", previousPage);
nextButton.addEventListener("click", nextPage);

function previousPage(){
    console.log("To do");
}

function nextPage(){
    console.log("To do");
}

function hideButtons() {
    previousButton.className = 'hide';
    nextButton.className = 'hide';
}

function showButtons() {
    previousButton.className.remove('hide');
    nextButton.className.remove('hide');
}

// Easter egg -> Rick's burp
const rickButton = document.querySelector('.rick-icon');
const rickAudio = document.querySelector('#rick-burp');

rickButton.addEventListener("click", playAudio);

function playAudio() {
    rickAudio.play();
};
