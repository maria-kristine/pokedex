import itemList from "./itemList.js"

function findMovie(keyword){
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=898`)
    .then (function(response){
        if(response.status !== 200){
            console.log("nææhh") //TODO: bedre brugebesked
            return []
        }
        return response.json()
    })
    .then (function(data){
        const results = data.results.filter(pokemon => 
            pokemon.name.toLowerCase().includes(keyword.toLowerCase())
            //|| pokemon.id.toLowerCase().includes(keyword.toLowerCase())
        )
        if(results.length){
            itemList(results)
        }else{
            document.getElementsByClassName("items")[0].innerHTML += "<p>Der er ingen søgeresultater</p>"
        }
        
    })
}
export default findMovie