//itemliste
const item_section = document.getElementsByClassName("items")[0]

const colors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};

const pokemonEl = document.querySelectorAll(".main__articleList li");

async function itemList(items) {
    const pokemons = await Promise.all(
        items.map(function (item) {
            return fetch(`${item.url}`)
                .then(function (response) {
                    if (response.status !== 200) {
                        console.log("fejl")
                        return []
                    }
                    return response.json()
                })
        })
    );

    pokemons.forEach(function (pokemon) {
        const types = pokemon.types.map(
            (type) => "<li>" + type.type.name + "</li>"
        );
        const output =
            `<article class="main__article" onclick="window.location.href='/pokemon.html?id=${pokemon.id}'">
            <p class="main__articleId">#${pokemon.id.toString().padStart(3, "0")}</p>
            <img class="main__articleImg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.name}" title="${pokemon.name}">
            <h1 class="main__articleHeading">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
            <ul class="main__articleList"> ${types.join("")}</ul>
        </article>`

        item_section.innerHTML += output

    })
    createTypeColor();
};

function createTypeColor() {
    const pokemonEl = document.querySelectorAll(".main__articleList li");

    pokemonEl.forEach(function(pokemonType){
        
    })
    console.log(pokemonEl)
    console.log(colors)

}

export default itemList

//getMovies

//<p class="main__articleText"> Weight: ${(pokemon.weight*0.1).toFixed(0)} kg</p>
//<p class="main__articleText">Height: ${pokemon.height/10} m</p>
