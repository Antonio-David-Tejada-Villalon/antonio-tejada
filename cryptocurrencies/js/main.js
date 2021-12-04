import {myApiKey, myApiHost} from './config.js';
import renderTable from './renderTable.js';

const coinUrl = "https://coinlore-cryptocurrency.p.rapidapi.com/api/tickers/?start=0&limit=100";

const tbody = document.getElementById("tbody");

window.data=[];

fetch(coinUrl, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": myApiHost,
		"x-rapidapi-key": myApiKey
	}
})
.then(response => response.json())
.then(d => {
	console.log(d);
	renderTable(d);
    const form = document.querySelector('#form');
    const button = document.querySelector('#button');
    const result = document.querySelector('#result');
	console.log(form);

    const tryToFilter = () => {
	result.innerHTML = '';
	console.log(form.value);
	const text = form.value.toLowerCase();
	for(let x of d.data){
		console.log(x);
		let name = x.name.toLowerCase();
		if(name.indexOf(text) !== -1){
			result.innerHTML += `<li class="list-group-item d-flex justify-content-between"><img src="https://c1.coinlore.com/img/25x25/${x.nameid}.png" alt="${x.nameid}" style="width:30px;"> <span class="badge bg-primary">${x.name}</span></li>
			<li class="list-group-item list-group-item-secondary d-flex justify-content-between">Price in USD: <span class="badge bg-secondary">$ ${x.price_usd}</li>`
		}
	}
	if(result.innerHTML === ''){
		result.innerHTML += `<li class="list-group-item list-group-item-danger">That coin doesn't exist! ... Try again</li>`
	}
}

button.addEventListener('click', tryToFilter)	
})
.catch(err => {
	console.error(err);
});

//searchFilter(".filter", ".filtering");