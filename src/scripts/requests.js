async function consomePokeAPI() {
  const loading = document.querySelector('.loading')
  loading.style.display = 'block'
  const pokemonsDaAPI = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=151',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
    .then(response => response.json())
    .then(response => {
      // const carregado = document.querySelector('.loading')
      // carregado.className = 'carregado'
      return response
    })
    .catch(error => console.log(error))
    loading.style.display = 'none'
  return pokemonsDaAPI
}

async function pesquisaPokemon(nomePokemon) {
  const loading = document.querySelector('.loading')
  loading.style.display = 'block'
  const pokemonPesquisa = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
    .then(response => response.json())
    .then(response => {
      //   renderizaPokemons(response)
      // console.log(response)
      return response
    })
    .catch(error => console.log(error)) 
    loading.style.display = 'none'
    renderizaUmPokemon(pokemonPesquisa)

  return pokemonPesquisa
}

function pesquisa() {
  const input = document.querySelector('.input')
  const btn = document.getElementById('botaoPesquisa')

  btn.addEventListener('click', () => {
    console.log(input.value)
    console.log(input.value == '')
    if(input.value == ''){
      renderizaPokemons()
    } else{
    pesquisaPokemon(input.value.toLowerCase().trim())
    }
  })
}
pesquisa()
