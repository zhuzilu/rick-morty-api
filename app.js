const main = document.getElementById('#main');
const searchInput = document.querySelector("[data-search");
let characters = [];

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    console.log(characters);
    /* My first option for the searchbar that doesn't work :'( */
    
    })
    characters.forEach(character => {
        const isVisible = character.name.toLowerCase.includes(value);
        character.element.classList.toggle("hide", !isVisible);
});

/* My first option -> it works and shows the list of all characters */

function getCharacters(done) {
    const results = fetch('https://rickandmortyapi.com/api/character');
    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });
};

getCharacters(data => {
    characters = data.results.map(character => {
        const article = document.createRange().createContextualFragment(
            `
            <article>
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

    });
});




    /* Another option that doesn't work */
    /*
    const filteredCharacters = characters.filter((character) => {
        return(
            character.name.toLowerCase().includes(value));
    });  
    getCharacters(filteredCharacters);
    */
    

/* Second option */

/*
const loadCharacters = async () => {
    try {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        characters = await res.json();
    } catch (error) {
        console.log(error);
    }
};

const getCharacters = (characters) => {
    const card = characters
        .map((character) => {
            return `
            <article>
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
            `;
        })
        .join('');
        main.innerHTML = card;
};

loadCharacters();

*/