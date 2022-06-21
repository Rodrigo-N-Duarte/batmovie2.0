const params = new URLSearchParams(location.search)
let id = params.get('id')

let dadosFilmesPopulares = JSON.parse(localStorage.getItem('db-populares'))
let idxFilme = dadosFilmesPopulares.results.findIndex((elem) => elem.id == id)
if (idxFilme > -1)
{
    let filme = dadosFilmesPopulares.results[idxFilme]
    document.getElementById('divDetalheFilme').innerHTML = `<div class="card mb-3">
    <img src="https://image.tmdb.org/t/p/w500${dadosFilmesPopulares.results[idxFilme].backdrop_path}" class="card-img-top" alt="" id="img">
    <div class="card-body">
      <h5 class="card-title" id="titulo">${dadosFilmesPopulares.results[idxFilme].title}</h5>
      <p class="card-text" id="descricao">Descrição: <br>${dadosFilmesPopulares.results[idxFilme].overview}</p>
      <p class="card-title" id="linguagem">Linguagem original: ${(dadosFilmesPopulares.results[idxFilme].original_language).toUpperCase()}</p>
      <p class="card-title" id="idade">Idade apropriada: ${dadosFilmesPopulares.results[idxFilme].genre_ids[idxFilme]}</p>
      <p class="card-text" id="nota"><small class="text-muted"> Nota geral: ${dadosFilmesPopulares.results[idxFilme].vote_average}</small></p>
    </div>
  </div>`
}
else 
alert('ERRO')
