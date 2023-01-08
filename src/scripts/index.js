async function renderizaPokemons() {
  const ulTag = document.querySelector('.pokemons_container')
  ulTag.innerHTML = ''
  const listaDePokemons = await consomePokeAPI()
  console.log(listaDePokemons)
  listaDePokemons.results.forEach(pokemon => {
    const numeroNaPokedex = pokemon.url.slice(34, -1)
    ulTag.insertAdjacentHTML(
      'beforeend',
      `
            <li class="pokemon_div">
                <img class="pokemon_img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
                <h3 class="pokemon_nome">${pokemon.name}</h3>
            </li>
        `
    )
  })
}
renderizaPokemons()

async function renderizaUmPokemon(nomePokemon) {
  const ulTag = document.querySelector('.pokemons_container')
  ulTag.innerHTML = ''
  console.log(nomePokemon)
    ulTag.insertAdjacentHTML(
      'beforeend',
      `
            <li class="pokemon_div">
                <img class="pokemon_img" src=${nomePokemon.sprites.front_default} alt=${nomePokemon.name}>
                <h3 class="pokemon_nome">${nomePokemon.name}</h3>
            </li>
        `
    )
  
}



