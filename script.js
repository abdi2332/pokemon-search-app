const inputval=document.getElementById("search-input")
const btn=document.getElementById("search-button")
const display=document.getElementById("inside")
const pokemonName=document.getElementById("pokemon-name")
const pokemonId=document.getElementById("pokemon-id")
const pokemonWeight=document.getElementById("weight")
const pokemonHeight=document.getElementById("height")
const pokemonTypes=document.getElementById("types")
const Hp=document.getElementById("hp")
const attack=document.getElementById("attack")
const defence=document.getElementById("defense")
const specialAttack=document.getElementById("special-attack")
const specialDefence=document.getElementById("special-defense")
const speed=document.getElementById("speed")
const imageContainer=document.getElementById("image-container")
let alldata=[]

btn.addEventListener("click",()=>{
    getPokemon()
    pokemonTypes.innerHTML=" "  
    inputval.value=" "
   
})
function getPokemon(){ 
    if(inputval.value==="Red"){
        alert("Pokémon not found")
    }
    fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/"+inputval.value).then((response)=>response.json()).then((data)=>{
        console.log(data)
        alldata = data
        displayData(alldata)
    }).catch((err)=>{
        console.log("error")
    })
}
const displayData = (pokemon) => {
    const { height, weight, id, sprites, name, stats, types} = pokemon;
    pokemonHeight.innerHTML = `${height}`;
    pokemonWeight.innerHTML = `${weight}`;
    pokemonId.innerHTML = `${id}`;
    pokemonName.innerHTML = `${name.toUpperCase()}`;


    // Handle multiple types
    let typesString = "";
    types.forEach((typeData, index) => {
        console.log("Type Data:", typeData); // Log each type data for debugging
        typesString += typeData.type.name;
        if (index < types.length - 1) {
            typesString += " ";
        }
    });

     // Log the final types string for debugging

    pokemonTypes.innerHTML = `${typesString.toUpperCase()}`;
    

    // Add logic to handle sprites if needed
    if (sprites) {
        imageContainer.innerHTML += `<img id="sprite" src="${sprites.front_default}?size=70" alt="${name} front default sprite" style="width: calc(55% + 20px); height: calc(50% + 20px);">`;
    }

   


    Hp.innerHTML+=`${stats[0].base_stat}`
    attack.innerHTML+=`${stats[1].base_stat}`
    defence.innerHTML+=`${stats[2].base_stat}`
    specialAttack.innerHTML+=`${stats[3].base_stat}`
    specialDefence.innerHTML+=`${stats[4].base_stat}`
    speed.innerHTML+=`${stats[5].base_stat}`
    

};

function resetAll(){
    inputval.value=" "
    Hp.innerHTML=" "
    attack.innerHTML=" "
    defence.innerHTML=" "
    specialAttack.innerHTML=" "
    specialDefence.innerHTML=" "
    speed.innerHTML=" "
    imageContainer.innerHTML=""
    pokemonHeight.innerHTML=" "
    pokemonWeight.innerHTML=" "
    pokemonName.innerHTML=" "
    pokemonId.innerHTML=" "
   
}
