const links4Chists: string[] =
[
  'https://icanhazdadjoke.com/',
  'https://api.chucknorris.io/jokes/random',

]
//console.log('Hello World');
function thenJason(theJoke: string) {
  const $jokeprint = document.getElementById('jokeprint');
  $jokeprint!.innerHTML = theJoke
  //document.getElementById('jokeprint')!.innerHTML = json.joke

}


function mostraChist() {

    fetch(links4Chists[0],
      { method: 'GET', headers: {'Accept': 'application/json'},
    })
    .then(response => response.json())
    //.then(json => console.log(json.joke)
    .then(json => {
      const theJoke = json.joke;
      thenJason(theJoke);
      //const $jokeprint = document.getElementById('jokeprint');
      //$jokeprint!.innerHTML = json.joke
      //document.getElementById('jokeprint')!.innerHTML = json.joke
     } )
    //.then(json => jokeprint.innerHTML = json.joke);

    console.log('un Chist');
    // print json to innerHTML
    //$jokeprint.innerHTML = '<p>' + (json.joke) + '</p>';

  }
