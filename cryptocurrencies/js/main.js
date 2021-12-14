import {myApiKey, myApiHost} from './config.js';
import renderTable from './renderTable.js';

const coinUrl = "https://coinlore-cryptocurrency.p.rapidapi.com/api/tickers/?start=0&limit=100";

const tbody = document.getElementById("tbody");

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
			result.innerHTML += `<a href="#${x.rank}" class="list-group-item d-flex justify-content-between align-items-start"><span class="badge bg-primary sc1"><img src="https://c1.coinlore.com/img/25x25/${x.nameid}.png" alt="${x.nameid}" style="width:30px;"></span> <span class="badge bg-primary sc1">${x.name}</span> Price in USD: <span class="badge bg-secondary sc1">$ ${x.price_usd}</a>`
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

//Scroll up

document.getElementById('button-up').addEventListener("click", scrollUp);

function scrollUp(){
    let currentScroll = document.documentElement.scrollTop;
    if(currentScroll > 0){
        //window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, 0);
    }
}

const buttonUp = document.getElementById('button-up');

window.onscroll = function(){
    let scroll = document.documentElement.scrollTop;
    if(scroll > 100){
        buttonUp.style.transform = "scale(1)"; 
    }else if(scroll < 100){
        buttonUp.style.transform = "scale(0)";
    }
}