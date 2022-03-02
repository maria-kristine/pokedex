// getAllItems
import itemList from "./itemList.js"

function getAllItems(){
    fetch(`https://pokeapi.co/api/v2/pokemon`) ///?limit=21
    .then(function(response){
        if(response.status !== 200){
            console.log("nææhh") //TODO: bedre brugebesked
            return []
        }
        return response.json()
    })
    .then (function(data){
        console.log(data.results)
        itemList(data.results)
    })
}
export default getAllItems

//getAllMovies