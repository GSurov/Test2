const API_KEY = "650c2e0e"; 

const output = document.getElementById("output");

function renderMovies(movies) {
  output.innerHTML = "";

  movies.forEach(movie => {
    const div = document.createElement("div");
    div.textContent = `${movie.Title} (${movie.Year})`;
    output.appendChild(div);
  });
}

document.getElementById("btn1").addEventListener("click", async () => {
  const res = await fetch(`https://www.omdbapi.com/?s=Batman&apikey=${API_KEY}`);
  const data = await res.json();

  console.log(data);
  renderMovies(data.Search || []);
});

document.getElementById("btn2").addEventListener("click", async () => {
  const res = await fetch(`https://www.omdbapi.com/?s=Harry%20Potter&apikey=${API_KEY}`);
  const data = await res.json();

  console.log(data);
  renderMovies(data.Search || []);
});

document.getElementById("btn3").addEventListener("click", async () => {
  const res = await fetch(`https://www.omdbapi.com/?s=Batman&y=2005&apikey=${API_KEY}`);
  const data = await res.json();

  console.log(data);
  renderMovies(data.Search || []);
});

document.getElementById("btn4").addEventListener("click", async () => {
  const res = await fetch(`https://www.omdbapi.com/?i=tt0372784&apikey=${API_KEY}`);
  const data = await res.json();

  console.log(data);

  output.innerHTML = `<div>${data.Title} (${data.Year})</div>`;
});