let qutoField = document.getElementById('quto-field');
let authorField = document.getElementById('author-field');
let Key =Math.floor(Math.random() * 49) + 1;

async function fetchQuote() {
	let response = await fetch('https://dummyjson.com/quotes/random');
	let data = await response.json();
	console.log(data);

    qutoField.innerText=data.quote;
    authorField.innerText=data.author;
}

fetchQuote();