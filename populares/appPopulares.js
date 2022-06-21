const mostraFilmesPopulares = (data) => {
    let dadosFilmesPopulares = JSON.parse(data.target.response)
    localStorage.setItem('db-populares', data.target.response)
    let dadosHTML = ''

    for (let i = 0; i < dadosFilmesPopulares.results.length; i++) {
        dadosHTML += `
        <div class="card col-lg-12" style="width: 18rem;">
            <img src="https://image.tmdb.org/t/p/w500${dadosFilmesPopulares.results[i].poster_path}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${dadosFilmesPopulares.results[i].title}</h5>
                <p class="card-title">Data de lançamento: ${dadosFilmesPopulares.results[i].release_date}</p>
                <p class="card-title">Data de lançamento: Linguagem original: ${(dadosFilmesPopulares.results[i].original_language).toUpperCase()}</p>
                <a href="/populares/detalhePopulares.html?id=${dadosFilmesPopulares.results[i].id}" class="btn btn-secondary">Veja mais sobre essa obra</a>
            </div>
        </div>
    </div>
        `
    }
    document.getElementById('divListaFilmes').innerHTML = dadosHTML
}

const initPopulares = () => {
    let xhr = new XMLHttpRequest
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=41fc467730e51850a8d00c25dadf9b31&language=pt-br"
    xhr.onload = mostraFilmesPopulares
    xhr.open('GET', url, true)
    xhr.send();
}
document.body.onload = initPopulares

function pesquisa()
{
    const filmesPesquisados = (data) => {
        let dadosPesquisados = JSON.parse(data.target.response)
        localStorage.setItem('db-pesquisado', data.target.response)
        let dadosHTML = ''
    
        for (let i = 0; i < dadosPesquisados.results.length; i++) {
            dadosHTML = `
            <div class="card col-lg-12" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500${dadosPesquisados.results[i].poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${dadosPesquisados.results[i].title}</h5>
                    <p class="card-title">Data de lançamento: ${dadosPesquisados.results[i].release_date}</p>
                    <p class="card-title">Data de lançamento: Linguagem original: ${(dadosPesquisados.results[i].original_language).toUpperCase()}</p>
                    <a href="/populares/detalhePopulares.html?id=${dadosPesquisados.results[i].id}" class="btn btn-secondary">Veja mais sobre essa obra</a>
                </div>
            </div>
        </div>
            `
        }
        document.getElementById('divListaFilmes').innerHTML = dadosHTML
    }
    
    const initPesquisados = () => {
        let texto = document.getElementById('campoBusca').value
        let xhr = new XMLHttpRequest
        let url = `https://api.themoviedb.org/3/search/movie?api_key=41fc467730e51850a8d00c25dadf9b31&language=pt-br&query=${texto}`
        xhr.onload = filmesPesquisados
        xhr.open('GET', url, true)
        xhr.send();
    }
    document.body.onload = initPesquisados
}