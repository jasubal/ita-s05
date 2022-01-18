"use strict";
const links4Chists = [
    'https://icanhazdadjoke.com/',
    'https://api.chucknorris.io/jokes/random',
];
var reportJokes = [];
var jokeID;
var jokeTxt;
var jokeScore;
function mostraChist() {
    fetch(links4Chists[0], { method: 'GET', headers: { 'Accept': 'application/json' },
    })
        .then(response => response.json())
        //.then(json => console.log(json.joke)
        .then(jsonObj => {
        thenJason(jsonObj);
    });
    buttonsDisabled('#buttonNext');
}
function thenJason(object) {
    jokeID = object.id;
    jokeTxt = object.joke;
    const $jokeprint = document.getElementById('jokeprint');
    reportJokes.push({
        id: jokeID,
        joke: jokeTxt,
        score: 'not set yet',
        date: 'not set yet',
    });
    showPuntuaChist();
    $jokeprint.innerHTML = object.joke;
    //console.log(object);
    console.log(reportJokes);
}
function addJokeData(jokeID) {
    const d = new Date();
    let d2ISO = d.toISOString();
    let jokeItem = reportJokes.find((element) => element.id == jokeID);
    jokeItem.score = jokeScore;
    jokeItem.date = d2ISO;
    console.log(reportJokes);
}
function prepareData(el) {
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
    const $puntuaChist = document.getElementById('puntuaChist');
    $puntuaChist.classList.remove("hidden");
    resetActive('#puntuaChist li button');
    buttonsEnabled('#puntuaChist li button');
    //console.log('puntua Chist');
}
function resetActive(qSelector) {
    document.querySelectorAll(qSelector).forEach(function (el) {
        el.classList.remove("active");
    });
}
function buttonsDisabled(qSelector) {
    document.querySelectorAll(qSelector).forEach(function (el) {
        el.disabled = true;
    });
}
function buttonsEnabled(qSelector) {
    document.querySelectorAll(qSelector).forEach(function (el) {
        el.disabled = false;
    });
}
//# sourceMappingURL=index.js.map