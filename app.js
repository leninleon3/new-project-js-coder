const pokeContent = document.getElementById('pokemonContent');
let pokeForm = document.getElementById('searchPokemon');
let generationshow = 1
const modalSearch = document.getElementById('pokemonContent')
const divGeneration = document.getElementById('textGen')


const pokemon = []

class pokemoncard {
    constructor(nombre, tipo, npoke) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.npoke = npoke;
    }
}
// /*ordenar xr generacion*/
// /*Primera Gen 1-151*/
// /*Segunda Gen 152-251*/
// /*tercera Gen 252-386*/

// function showPokemonGen(gen) {
//     const pokemonGen = {
//         1: [1, 151],
//         2: [152, 251],
//         3: [252, 386]
//     };

//     const pokemonGenDefault = [1, 151];
//     const generacion = pokemonGen[gen] || pokemonGenDefault;
//     return generacion;

// }

// let pokemonGeneration = showPokemonGen(generationshow)


// /*cambiar de generacion*/

// let arrowRight = document.getElementById('arrow-right')
// arrowRight.addEventListener('click', e => {

//     if (generationshow < 4) {
//         modalSearch.innerHTML = '';
//         generationshow += 1
//         pokemonGeneration = showPokemonGen(generationshow)
//         divGeneration.innerHTML = 'Gen ' + generationshow
//         drawPokemon()
//     }
// })


// let arrowleft = document.getElementById('arrow-left').addEventListener('click', e => {

//     if (generationshow > 0) {
//         modalSearch.innerHTML = '';
//         generationshow -= 1
//         pokemonGeneration = showPokemonGen(generationshow)
//         divGeneration.innerHTML = 'Gen ' + generationshow
//         drawPokemon()
//         console.log(generationshow)
//     }
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



// /*Buscar pokemon*/

// pokeForm.addEventListener('submit', e => {
//     e.preventDefault();
//     let searchPokemon = document.getElementById('pokemon').value;
//     getPokemon(searchPokemon, true);
// })

// function exitModal() {
//     const modalPokemon = document.getElementById('modalPokemon');
//     modalPokemon.style.display = 'none'
//     drawPokemon()
// }

const btn = document.querySelector ("#btn")
btn.addEventListener ('click', () => {
    Swal.fire({
        imageUrl:  '<img src="img/pokeball.png" alt="pokeball">',
        imageWidth:'100 px' ,
        imageHeight:'100 px',
        title: pokemoncard.nombre,
        text: pokemoncard.tipo,
        footer: pokemoncard.npoke
    })
})


