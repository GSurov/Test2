const api = "650c2e0e"

const searchBtn = document.getElementById("searchBtn")
const input = document.getElementById("searchInput")
const results = document.getElementById("results")

// Загрузка последнего поиска при открытии страницы
window.addEventListener("load", () => {
    const lastSearch = localStorage.getItem("lastSearch")
    if (lastSearch) {
        input.value = lastSearch
    }
})

searchBtn.addEventListener("click", searchMovies)

async function searchMovies() {
    let text = input.value.trim()

    if (!text) return

    localStorage.setItem("lastSearch", text)

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${api}&s=${text}`)
        const data = await response.json()

        results.innerHTML = ""

        if (data.Search) {
            data.Search.forEach(element => {
                results.innerHTML += `
                    <div class="movie-card"> 
                        <img src="${element.Poster}" alt="Картинка">
                        <h2>${element.Title}</h2>
                        <h3>${element.Year}</h3>
                    </div>
                `
            })
        } else {
            results.innerHTML = `<h1>Movie Not Found!</h1>`
        }

    } catch (e) {
        console.log(e)
        results.innerHTML = `<h1>Ошибка загрузки</h1>`
    }
}