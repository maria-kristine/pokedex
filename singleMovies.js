import getPokemon from "./getMovie.js"

const querys = new URLSearchParams(window.location.search)
const id = querys.get("id")

if(!id){
    window.location.href = "/404.html"
} else {
    getPokemon(id)
}
