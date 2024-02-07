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

const getPokemon = async () => {
    try{

        const response = await fetch(
            "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/"+inputval.value.toLowerCase()
        );
        const data = await response.json();
    
        // Set Pokémon info
        pokemonName.textContent = `${data.name.toUpperCase()}`;
        pokemonId.textContent = `#${data.id}`;
        pokemonWeight.textContent  = `Weight: ${data.weight}`;
        pokemonHeight.textContent = `Height: ${data.height}`;
        imageContainer.innerHTML = `
          <img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">
        `;
  
        // Set stats
        Hp.textContent= data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defence.textContent = data.stats[2].base_stat;
        specialAttack.textContent = data.stats[3].base_stat;
        specialDefence.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;
  
        // Set types
        pokemonTypes.innerHTML = data.types
          .map(obj => `<span class="type ${obj.type.name.toUpperCase()}">${obj.type.name.toUpperCase()}</span>`)
          .join("");

      
    }
    catch (err) {
        resetDisplay();
        alert("Pokémon not found");
        console.log(`Pokémon not found: ${err}`);
      };
  };
  

  const resetDisplay = () => {
    const sprite = document.getElementById("sprite");
    if (sprite) sprite.remove();
  
    // reset stats
    pokemonName.textContent = "";
    pokemonId.textContent = "";
    pokemonTypes.innerHTML = "";
    pokemonHeight.textContent = "";
    pokemonWeight.textContent = "";
    hp.textContent = "";
    attack.textContent = "";
    defence.textContent = "";
    specialAttack.textContent = "";
    specialDefence.textContent = "";
    speed.textContent = "";
  };
  
  btn.addEventListener("click", (e) => {
    getPokemon();
  });