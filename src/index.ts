const links4Chists: string[] =
[
  'https://icanhazdadjoke.com/',
  'https://api.chucknorris.io/jokes/random',

]
var reportJokes:any = [];
var jokeID:string;
var jokeTxt:string;
var jokeScore:number;
//const $jokeprint:any = document.getElementById('jokeprint');
//const $puntuaChist: any = document.getElementById('puntuaChist');
//const $lisItems: any = document.querySelectorAll('#puntuaChist li');

function mostraChist() {
  fetch(links4Chists[0],
    { method: 'GET', headers: {'Accept': 'application/json'},
  })
  .then(response => response.json())
  //.then(json => console.log(json.joke)
  .then(jsonObj => {
    thenJason(jsonObj);
   } )
   buttonsDisabled('#buttonNext');
}

function thenJason(object: any): void {
  jokeID  = object.id;
  jokeTxt = object.joke;
  const $jokeprint:any = document.getElementById('jokeprint');
  reportJokes.push({
    id: jokeID ,
    joke: jokeTxt,
    score: 'not set yet',
    date: 'not set yet',
    });
  showPuntuaChist();
  $jokeprint.innerHTML = object.joke;
  //console.log(object);
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

}

function showPuntuaChist() {
  const $puntuaChist:any = document.getElementById('puntuaChist');
  $puntuaChist.classList.remove("hidden");
  resetActive('#puntuaChist li button');
  buttonsEnabled('#puntuaChist li button');
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
