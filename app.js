
//query selectors
const pokeContent = document.getElementById('pokemonContent');
let pokeForm = document.getElementById('searchPokemon');
let generationshow = 1
const modalSearch = document.getElementById('pokemonContent')
const divGeneration = document.getElementById('textGen')
const pokemons_numero = 150;
const poke_container = document.getElementById('poke_container');


const pokemons = []

//pokeapi


const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_numero; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {
  const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  pokemons.push(pokemons)
  createPokemonCard(pokemon);
}

//cards pokemon

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  const { id, name, sprites, types } = pokemon;
  const type = types[0].type.name;
  console.log(type)
  const pokeInnerHTML = `
  <div class="img-container id=${pokemon.id}">
    <img src="${sprites.front_default}" alt="${name}" />
  </div>
  <div class="info">
    <button class="name" id="btnpokemon">${name}</button>
  </div>
  `;
  pokemonEl.innerHTML = pokeInnerHTML;
  pokeContent.appendChild(pokemonEl);
}



// const btn = document.querySelector ("#btnpokemon")
// btn.addEventListener ('click', () => {
//     Swal.fire(
//       "puta"
//     )
// })


// /*pintar card pokemon*/
// const colors = {
//     fire: '#FFA05D',
//     grass: '#8FD594',
//     electric: '#FFE43B',
//     water: '#7E97C0',
//     ground: '#CAAC4D',
//     rock: '#90642D',
//     poison: '#9D5B9B',
//     bug: '#EAFD71',
//     dragon: '#97b3e6',
//     psychic: '#FF96B5',
//     flying: '#CDCDCD',
//     fighting: '#FF5D5D',
//     normal: '#FFFFFF'
// }


fetchPokemons();

//generation

function showPokemonGen(gen) {
    const pokemonGen = {
        1: [1, 151],
        2: [152, 251],
        3: [252, 386]
    };

    const pokemonGenDefault = [1, 151];
    const generacion = pokemonGen[gen] || pokemonGenDefault;
    return generacion;

}

let pokemonGeneration = showPokemonGen(generationshow)

let arrowRight = document.getElementById('arrow-right')
arrowRight.addEventListener('click', e => {

    if (generationshow < 4) {
        modalSearch.innerHTML = '';
        generationshow += 1
        pokemonGeneration = showPokemonGen(generationshow)
        divGeneration.innerHTML = 'Gen ' + generationshow
        drawPokemon()
    }
})


let arrowleft = document.getElementById('arrow-left').addEventListener('click', e => {

    if (generationshow > 0) {
        modalSearch.innerHTML = '';
        generationshow -= 1
        pokemonGeneration = showPokemonGen(generationshow)
        divGeneration.innerHTML = 'Gen ' + generationshow
        drawPokemon()
        console.log(generationshow)
    }
})

// /*Buscar pokemon*/

pokeForm.addEventListener('submit', e => {
    e.preventDefault();
    let searchPokemon = document.getElementById('pokemon').value;
    getPokemon(searchPokemon, true);
})

function exitModal() {
    const modalPokemon = document.getElementById('modalPokemon');
    modalPokemon.style.display = 'none'
    drawPokemon()
}




