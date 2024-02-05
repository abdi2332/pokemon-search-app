function getPokemon(){
    fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon').then((response)=>response.json()).then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log("error")
    })
}