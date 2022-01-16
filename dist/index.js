"use strict";
const links4Chists = [
    'https://icanhazdadjoke.com/',
    'https://api.chucknorris.io/jokes/random',
];
var reportJokes = [];
var jokeID;
var jokeTxt;
var jokeScore;
//const $jokeprint:any = document.getElementById('jokeprint');
//const $puntuaChist: any = document.getElementById('puntuaChist');
//const $lisItems: any = document.querySelectorAll('#puntuaChist li');
function mostraChist() {
    fetch(links4Chists[0], { method: 'GET', headers: { 'Accept': 'application/json' },
    })
        .then(response => response.json())
        //.then(json => console.log(json.joke)
        .then(jsonObj => {
        thenJason(jsonObj);
    });
}
function thenJason(object) {
    jokeID = object.id;
    jokeTxt = object.joke;
    const $jokeprint = document.getElementById('jokeprint');
    showPuntuaChist();
    $jokeprint.innerHTML = object.joke;
    //console.log(object);
}
function addJokeData(jokeID) {
    const d = new Date();
    let d2ISO = d.toISOString();
    reportJokes.push({
        id: jokeID,
        sore: jokeScore,
        date: d2ISO,
    });
    console.log(reportJokes);
}
function prepareData(el) {
    //alert(data.getAttribute("data-score"));
    jokeScore = el.getAttribute("data-score");
    //console.log(el);
    el.classList.add("active");
    //console.log(score);
    addJokeData(jokeID);
    buttonsDisabled();
}
function showPuntuaChist() {
    const $puntuaChist = document.getElementById('puntuaChist');
    $puntuaChist.classList.remove("hidden");
    resetActive();
    buttonsEnabled();
    //console.log('puntua Chist');
}
function resetActive() {
    document.querySelectorAll('#puntuaChist li button').forEach(function (el) {
        el.classList.remove("active");
    });
}
function buttonsDisabled() {
    document.querySelectorAll('#puntuaChist li button').forEach(function (el) {
        el.disabled = true;
    });
}
function buttonsEnabled() {
    document.querySelectorAll('#puntuaChist li button').forEach(function (el) {
        el.disabled = false;
    });
}
//# sourceMappingURL=index.js.map