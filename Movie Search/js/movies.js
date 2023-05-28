let page = 1;

function getMovieTitle() {
    let value = document.getElementById('movie-name').value;

    return encodeURIComponent(value);
}

async function runSearch() {

    let url = `https://www.omdbapi.com/?page=${page}&type=movie&s=[searchString]&apiKey=87dd0709`;
    url = url.replace('[searchString]', getMovieTitle());

    console.log('url', url)

    const response = await fetch(url);
    const data = await response.json();

    return data;
}

function displayResults(results) {

    const movieContainer = document.getElementById('movie-container');

    movieContainer.innerHTML = '';

    results.forEach((item) => {

        const titleElement = createMovieElement(item.Title);

        movieContainer.appendChild(titleElement);
    })

}

async function getResults() {

    showLoader()
    const result = await runSearch();
    hideLoader()

    displayResults(result.Search)
}


function createMovieElement(title) {

    const element = document.createElement('div');
    element.innerHTML = title;

    return element;
}

function showLoader() {
    const loder = document.querySelector('#loader');
    loder.classList.remove('inactive');
}

function hideLoader() {
    const loder = document.querySelector('#loader');
    loder.classList.add('inactive');
}

function onLoad() {
    console.log('Loaded!');

    const nextBtn = document.getElementById('next-button');
    nextBtn.addEventListener('click', async () => {
        page++;

        await getResults();
    });

    const prevBtn = document.getElementById('prev-button');
    prevBtn.addEventListener('click', async () => {
        page--;

        await getResults();
    });

    const button = document.getElementById('search-button');
    button.addEventListener('click', async () => {

        await getResults();
    })
}

window.addEventListener('load', onLoad);

