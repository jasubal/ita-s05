// Navigator Geolocation API
// agafarem la posició del usuari per a saber on està i després amb l'api de temps obtindrem la temperatura del lloc on està.
var lat:any, lon:any;
var options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };
function success(pos:any) {
  var crd = pos.coords;
  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');
  lat = crd.latitude;
  lon = crd.longitude;
  mostraTemps(lat, lon);
};
function error(err:any) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);



// Weather API
// from https://openweathermap.org/api
const wCityId = '1726701'; //Barcelona
const wAppId = '5004605256296592219da8902d48478d';
const wUnit = 'metric';
//const wApiCall = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+wAppId+'&units=' + wUnit;
//const wApiCall = 'https://api.openweathermap.org/data/2.5/weather?id=' + wCityId + '&appid=' + wAppId + '&units=' + wUnit;
function mostraTemps(lat:any, lon:any) {
const wApiCall = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+wAppId+'&units=' + wUnit;
fetch(wApiCall,
{ method: 'GET', headers: {'Accept': 'application/json'},
})
.then(res => res.json())
.then(jsonObj => { thenJasonWeather(jsonObj); } )
}
function thenJasonWeather(object: any): void {
  const $weatherTemp:any = document.getElementById('weatherTemp');
  const $weatherIcon:any = document.getElementById('weatherIcon');
  //console.log(object.main.temp);
  $weatherTemp.innerHTML = object.main.temp + '&deg;C';
  $weatherIcon.innerHTML = '<img src="http://openweathermap.org/img/w/' + object.weather[0].icon + '.png" alt="' + object.weather[0].description + '">';

}



//Jokes API
const links4Chists: string[] =
[
  'https://icanhazdadjoke.com/',
  'https://api.chucknorris.io/jokes/random',

]
var reportJokes:any = [];
var jokeID:string;
var jokeTxt:string;
var jokeScore:number;


function mostraChist() {
  fetch(links4Chists[0],
    { method: 'GET', headers: {'Accept': 'application/json'},
  })
  .then(res => res.json())
  //.then(json => console.log(json.joke)
  .then(jsonObj => { thenJasonJoke(jsonObj); } )
   buttonsDisabled('#buttonNext');
}

function thenJasonJoke(object: any): void {
  const $jokeprint:any = document.getElementById('jokeprint');
  jokeID  = object.id;
  jokeTxt = object.joke;

  reportJokes.push({
    id: jokeID ,
    joke: jokeTxt,
    score: 'not set yet',
    date: 'not set yet',
    });
  showPuntuaChist();
  $jokeprint.innerHTML = object.joke;
  console.log(reportJokes);
}

function addJokeData(jokeID: string) {
  const d = new Date();
  let d2ISO = d.toISOString();
  let jokeItem = reportJokes.find((element: { id: string; }) => element.id == jokeID);
  jokeItem.score = jokeScore;
  jokeItem.date = d2ISO;

  console.log(reportJokes);
}

function prepareData(el:any){
  resetActive('#puntuaChist li button');
  //alert(data.getAttribute("data-score"));
  jokeScore = el.getAttribute("data-score");
  //console.log(el);
  el.classList.add("active");
  //console.log(score);
  addJokeData(jokeID);
  //buttonsDisabled('#puntuaChist li button');
  buttonsEnabled('#buttonNext');
  const $buttonNext:any = document.getElementById('buttonNext');
  $buttonNext.innerHTML="Mostra un Nou acudit";
}

function showPuntuaChist() {
  const $puntuaChist:any = document.getElementById('puntuaChist');
  $puntuaChist.classList.remove("hidden");
  resetActive('#puntuaChist li button');
  buttonsEnabled('#puntuaChist li button');
  const $buttonNext:any = document.getElementById('buttonNext');
  $buttonNext.innerHTML="Puntúa l'acudit";
   //console.log('puntua Chist');
}

function resetActive(qSelector:any)  {
  document.querySelectorAll(qSelector).forEach(function(el:any){
  el.classList.remove("active");
  });
}
function buttonsDisabled(qSelector:any) {
  document.querySelectorAll(qSelector).forEach(function(el:any){
    el.disabled = true;
    });
}
function buttonsEnabled(qSelector:any) {
  document.querySelectorAll(qSelector).forEach(function(el:any){
    el.disabled = false;
    });
}
