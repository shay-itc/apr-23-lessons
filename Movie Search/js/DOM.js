


function onload() {
    const element = document.createElement('h1');

    // element.style.color = 'red';
    element.classList.add('title1');
    element.classList.add('title2');
    // element.classList.remove('title')
    element.innerHTML = 'Hello world';

    document.getElementById('container').appendChild(element);

}

window.addEventListener('load', onload);

// [movieTitle] = input from the text field


// Create a form with an input and a button
// Once the button is clicked, send a request to the movie API and set the input value as 
// the s parameter
// Print the result


// https://www.omdbapi.com/?type=movie&s=spiderman&apiKey=87dd0709