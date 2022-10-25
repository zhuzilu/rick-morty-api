'use strict';
const main = document.getElementById('#main');
const searchInput = document.querySelector("[data-search");
let characters = [];


searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    console.log(value);
    console.log(characters);
    })
    characters.forEach(character => {
        const isVisible = character.name.toLowerCase.includes(value);
        character.element.classList.toggle("hide", !isVisible);
});

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
        return {name: character.name, element:article};
    });
});


