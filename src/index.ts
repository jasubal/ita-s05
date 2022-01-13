const links4Chists: string[] =
[
  'https://icanhazdadjoke.com/',
  'https://api.chucknorris.io/jokes/random',

]

console.log('Hello World');

const $jokeprint = document.getElementById('jokeprint');

function mostraChist() {

    fetch(links4Chists[0],
      { method: 'GET', headers: {'Accept': 'application/json'},
    })
    .then(response => response.json())
    //.then(json => console.log(json.joke)
    .then(json => document.getElementById('jokeprint')!.innerHTML = json.joke )
    //.then(json => $jokeprint.innerHTML = json.joke);

    console.log('un Chist');
    // print json to innerHTML
    //$jokeprint.innerHTML = '<p>' + (json.joke) + '</p>';

  }
