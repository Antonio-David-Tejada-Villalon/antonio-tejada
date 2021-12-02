import {myApiKey, myApiHost} from './config.js';

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
.then(response => {
	console.table(response);
	for(let i=0; i< response.data.length; i++){
		console.log(i);

		//creating elements
		let tr = document.createElement('tr');
		let rank = document.createElement('th');
		let icon = document.createElement('td');
		let coin = document.createElement('td');
		let price = document.createElement('td');
		let marketCap = document.createElement('td');
		let oneH = document.createElement('td');
		let tfourH = document.createElement('td');
		let link = document.createElement('td');
		let modal = document.createElement('div');

		//assign values
		rank.innerHTML = `<th scope="row">${response.data[i].rank}</th>`;
		icon.innerHTML = `<td><img src="https://c1.coinlore.com/img/25x25/${response.data[i].nameid}.png" alt="${response.data[i].nameid}" style="width:30px;"></td>`;
		coin.innerHTML =  `<td>${response.data[i].name}</td>`;
		price.innerHTML =  `<td>$ ${response.data[i].price_usd}</td>`;
		marketCap.innerHTML =  `<td>$ ${parseInt(response.data[i].market_cap_usd)}</td>`;
		if (parseFloat(response.data[i].percent_change_1h) >= 0.0) {
		  oneH.innerHTML = `<td><span class="badge text-success">${response.data[i].percent_change_1h}%</td>`;
		} else {
		  oneH.innerHTML = `<td><span class="badge text-danger">${response.data[i].percent_change_1h}%</td>`;
		}
		if (parseFloat(response.data[i].percent_change_24h) >= 0.0) {
		  tfourH.innerHTML = `<td><span class="badge text-success">${response.data[i].percent_change_24h}%</td>`;
		} else {
		  tfourH.innerHTML = `<td><span class="badge text-danger">${response.data[i].percent_change_24h}%</td>`;
		}
		link.innerHTML =  `<td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal--${response.data[i].rank}">Info</button></td>`;
	
		//modal
		modal.innerHTML =
		`<div class="modal fade" id="exampleModal--${response.data[i].rank}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div class="modal-dialog">
			<div class="modal-content">
			  <div class="modal-header d-flex justify-content-between">
			  <img src="https://c1.coinlore.com/img/25x25/${response.data[i].nameid}.png" class="rounded float-start" alt="${response.data[i].nameid}">
				<h5 class="modal-title" id="exampleModalLabel">${response.data[i].name}</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			  </div>
			  <div class="modal-body">
			  <ul class="list-group">
			  <li class="list-group-item d-flex justify-content-between">Symbol: <span class="badge bg-primary">${response.data[i].symbol}</span></li>
			  <li class="list-group-item list-group-item-primary d-flex justify-content-between">Name: <span class="badge bg-primary">${response.data[i].name}</span></li>
			  <li class="list-group-item list-group-item-secondary d-flex justify-content-between">Price in USD: <span class="badge bg-secondary">$ ${response.data[i].price_usd}</li>
			  <li class="list-group-item list-group-item-success d-flex justify-content-between">Change in 1 hs: <span class="badge bg-success">${response.data[i].percent_change_1h} %</li>
			  <li class="list-group-item list-group-item-danger d-flex justify-content-between">Change in 24 hs: <span class="badge bg-danger">${response.data[i].percent_change_24h} %</li>
			  <li class="list-group-item list-group-item-warning d-flex justify-content-between">Change in 7 days: <span class="badge bg-warning">${response.data[i].percent_change_7d} %</li>
			  <li class="list-group-item list-group-item-info d-flex justify-content-between">Price in BTC: <span class="badge bg-info">${response.data[i].price_btc} BTC</li>
			  <li class="list-group-item list-group-item-light d-flex justify-content-between">Market Cap: <span class="badge bg-dark">$ ${response.data[i].market_cap_usd}</li>
			  <li class="list-group-item list-group-item-dark d-flex justify-content-between">Volume in 24 hs: <span class="badge bg-dark">$ ${response.data[i].volume24.toFixed(2)}</li>
			  <li class="list-group-item d-flex justify-content-between">Circulating Supply: <span class="badge bg-primary">$ ${response.data[i].csupply}</span></li>
			  <li class="list-group-item list-group-item-primary d-flex justify-content-between">Total Supply: <span class="badge bg-primary">${response.data[i].tsupply}</span></li>
			  <li class="list-group-item list-group-item-secondary d-flex justify-content-between">Max Supply: <span class="badge bg-secondary">${response.data[i].msupply}</li>
			</ul>
			  </div>
			  <div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
			  </div>
			</div>
		  </div>
		</div>
		`;
	
		//adding modals to its wrapper
		document.getElementById("modals").appendChild(modal);

		//add elements to tr
		tr.appendChild(rank);
		tr.appendChild(icon);
		tr.appendChild(coin);
		tr.appendChild(price);
		tr.appendChild(marketCap);
		tr.appendChild(oneH);
		tr.appendChild(tfourH);
		tr.appendChild(link);
		
	
		//add tr to tbody
		tbody.appendChild(tr);
	}
})
.catch(err => {
	console.error(err);
});