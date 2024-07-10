const pokemonName = document.getElementById('pokemon-name');
const pokemonType = document.getElementById('pokemon-type');
const pokemonHeight = document.getElementById('pokemon-height');
const pokemonWeight = document.getElementById('pokemon-weight');
const pokemonImage = document.getElementById('pokemon-image');
const pokedetails = document.getElementById("pokedetails")
let data;
let isFlipped = false;

async function fetchPokemonDetails() {
  try {

    const fetchpoke = document.getElementById("fetchpoke").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${fetchpoke}`);
     data = await response.json();
    console.log(data)

    pokemonName.textContent = data.name;
    pokemonType.textContent = `Type: ${data.types.map(type => type.type.name).join(', ')}`;
    pokemonHeight.textContent = `Height: ${data.height} cm`;
    pokemonWeight.textContent = `Weight: ${data.weight} kg`;
    pokemonImage.src = data.sprites.front_default;
    document.getElementById("fetchpoke").value=""
    pokedetails.style.visibility="visible"
  } 
   catch (error) {
    console.error('Error fetching Pokemon details:', error);
  }
}

const rotatebtn = document.getElementById("rotatebtn")

rotatebtn.addEventListener("click",()=>{
  
  if (isFlipped) {
    pokemonImage.src = data.sprites.front_default;
    

  } else {
    pokemonImage.src = data.sprites.back_default;
    
  }
  isFlipped = !isFlipped;
  
})


