const inputval=document.getElementById("search-input")
const btn=document.getElementById("search-button")
const display=document.getElementById("inside")
const Hp=document.getElementById("hp")
const attack=document.getElementById("attack")
const defence=document.getElementById("defence")
const specialAttack=document.getElementById("special-attack")
const specialDefence=document.getElementById("special-defence")
const speed=document.getElementById("speed")

let alldata=[]

btn.addEventListener("click",getPokemon)
function getPokemon(){
    fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/"+inputval.value).then((response)=>response.json()).then((data)=>{
        console.log(data)
        alldata = data
        displayData(alldata)
    }).catch((err)=>{
        console.log("error")
    })
}
const displayData = (pokemon) => {
    const { height, weight, id, sprites, name, stats } = pokemon;

    display.innerHTML = `<p>Height: ${height}</p>
                         <p>Weight: ${weight}</p>
                         <p>ID: ${id}</p>
                         <p>Name: ${name}</p>
                         <p>stats: ${stats[0].base_stat}</p>`;

    // Add logic to handle sprites if needed
    if (sprites) {
        display.innerHTML += `<img src="${sprites.front_default}" alt="${name}">`;
    }
    Hp.innerHTML+=`${stats[0].base_stat}`
};