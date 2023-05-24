
function getMovieTitle() {
    let value = document.getElementById('movie-name').value;

    return encodeURIComponent(value);
}

async function runSearch() {

    let url = 'https://www.omdbapi.com/?type=movie&s=[searchString]&apiKey=87dd0709';
    url = url.replace('[searchString]', getMovieTitle());

    const response = await fetch(url);
    const data = await response.json();

    return data;
}

function createMovieElement(title) {

    const element = document.createElement('div');
    element.innerHTML = title;

    return element;
}

function onLoad() {
    console.log('Loaded!');

    const movieContainer = document.getElementById('movie-container');

    const button = document.getElementById('search-button');
    button.addEventListener('click', async () => {
        const result = await runSearch();


        movieContainer.innerHTML = '';

        result.Search.forEach((item) => {

            const titleElement = createMovieElement(item.Title);

            movieContainer.appendChild(titleElement);
        })
    })


    for (let item of ['text 1', 'text 2', 'text 3']) {

        const titleElement = createMovieElement(item);

        movieContainer.appendChild(titleElement);
    }
}

window.addEventListener('load', onLoad);