// getAllItems
import itemList from "./itemList.js"

const queries = new URLSearchParams(window.location.search)
let currentPage = parseInt(queries.get("page")) || 1

let prev = document.getElementsByClassName("prev")[0];
let next = document.getElementsByClassName("next")[0];
let pageLinks = document.getElementsByClassName("links")[0]

console.log(prev.href)

const limit = 27
let offset = (limit * currentPage) - limit

function getAllItems(){
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`) ///?limit=21
    .then(function(response){
        if(response.status !== 200){
            console.log("nææhh") //TODO: bedre brugebesked
            return []
        }
        return response.json()
    })
    .then (function(data){

        const pages = Math.ceil(data.count / limit)

    
        let i = 1
        while(i <= pages){
            let link = `<a class="link" href="?page=${i}">${i}</a> `
            pageLinks.innerHTML += link;
            i++
        }
        
        prev.href = `?page=${currentPage - 1}`
        next.href = `?page=${currentPage + 1}`

        if(currentPage >= pages){
            currentPage = pages
            prev.href = `?page=${currentPage - 1}`
            next.href = `?page=${currentPage}`
        }
        if(currentPage <= 1){
            currentPage = 1
            prev.href = `?page=${currentPage}`
            next.href = `?page=${currentPage + 1}`
        }


        console.log(pages, currentPage)

        console.log(data.results)
        itemList(data.results)
    })
}
export default getAllItems

//getAllMovies