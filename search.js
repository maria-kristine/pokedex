import findMovie from "./findMovie.js";

const input = document.querySelector("input[name=keyword]")

const querys = new URLSearchParams(window.location.search)
const keyword = querys.get("keyword")

if(keyword){
   findMovie(keyword) 
   input.value = keyword
}