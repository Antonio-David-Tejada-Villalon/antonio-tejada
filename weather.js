console.log("It's working");

let day = Math.floor(Date.now() / 1000)
console.log(day);
let days = Date();
console.log(days);

//Calculating HMCA SHA256

const secretKey = `oaexjqlowi4ggfeluqducnul91fkofxy`;
let apiKey = `api-keyizws8qgco8lfybyi4oaufioeehvr8obo${day}`;
let signature = CryptoJS.HmacSHA256(apiKey, secretKey);
let base64 = signature.toString(CryptoJS.enc.hex);

console.log(base64);

let urlWeather = `https://api.weatherlink.com/v2/current/117989?api-key=izws8qgco8lfybyi4oaufioeehvr8obo&t=${day}&api-signature=82daa7dba5b506342690031373d83362792010ede4b9a62b65d00ee8d0a1fcb6`

console.log(urlWeather);

fetch('urlWeather')
  .then(response => response.json())
  .then(data => console.log(data));
