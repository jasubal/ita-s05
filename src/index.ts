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
}

function thenJason(object: any): void {
  jokeID  = object.id;
  jokeTxt = object.joke;
  const $jokeprint:any = document.getElementById('jokeprint');
  showPuntuaChist();
  $jokeprint.innerHTML = object.joke;
  //console.log(object);
}

function addJokeData(jokeID: string) {
  const d = new Date();
  let d2ISO = d.toISOString();
    reportJokes.push({
    id: jokeID ,
    sore: jokeScore,
    date: d2ISO,
    });
    console.log(reportJokes);
}



function prepareData(el:any){
  //alert(data.getAttribute("data-score"));
  jokeScore = el.getAttribute("data-score");
  //console.log(el);
  el.classList.add("active");
  //console.log(score);
  addJokeData(jokeID);
  buttonsDisabled();
}

function showPuntuaChist() {
  const $puntuaChist:any = document.getElementById('puntuaChist');
  $puntuaChist.classList.remove("hidden");
  resetActive();
  buttonsEnabled();
   //console.log('puntua Chist');

}

function resetActive()  {
  document.querySelectorAll('#puntuaChist li button').forEach(function(el:any){
  el.classList.remove("active");
  });
}
function buttonsDisabled() {
  document.querySelectorAll('#puntuaChist li button').forEach(function(el:any){
    el.disabled = true;
    });
}
function buttonsEnabled() {
  document.querySelectorAll('#puntuaChist li button').forEach(function(el:any){
    el.disabled = false;
    });
}
