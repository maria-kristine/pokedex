function getPokemon(pokemonId) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(function (response) {
            if (response.status !== 200) {
                console.log("nææhh") //TODO: bedre brugebesked
                return []
            }
            return response.json()
        })
        .then(function (pokemon) {
            const types = pokemon.types.map(
                (type) => "<li>" + type.type.name + "</li>"
            );
            /*
            const movie = data.titles.find(element => element.sku === sku)
            if(!movie){
                window.location.href = "/404.html"
                return
            }
            document.title += " - " + movie.name
*/
            const output = `<article class="getPokemon">   
                
                <img class="getPokemon__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.name}" title="${pokemon.name}">
                <section class="getPokemon__Section">
                    <h1 class="getPokemon__heading">${pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h1>
                    <div class="getPokemon__Line"></div>
                    <div class="getPokemon__div">
                        <p class="getPokemon__HP">HP ${pokemon.stats[0].base_stat}/200</p>
                        <p class="getPokemon__XP">XP ${pokemon.base_experience}</p>
                    </div>
                    <button class="getPokemon__Button">TRANSFER</button>
                    <div class="getPokemon__div">
                        <div>
                            <p class="getPokemon__Text">#${pokemon.id.toString().padStart(3, "0")}</p>
                            <p>Id</p>
                        </div>
                        <div>
                            <ul class="getPokemon__List">${types.join("/")}</ul>
                            <p>Type</p>
                        </div>
                        <div>
                            <p class="getPokemon__Text">${(pokemon.weight * 0.1).toFixed(0)} kg</p>
                            <p>Weight</p>
                        </div>
                        <div>
                            <p class="getPokemon__Text">${pokemon.height / 10} m</p>
                            <p>Heigth</p>
                        </div>
                    </div>
                </section>
            </article>`

            document.getElementsByClassName("singlePokemon")[0].innerHTML += output
        })
}
export default getPokemon