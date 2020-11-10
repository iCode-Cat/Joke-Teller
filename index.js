const button = document.querySelector('.button');



//Call a function when click the button. 
button.onclick =  function() {
    const callJoke = joke()
    const audio = document.querySelector('audio')
    audio.play();
};

//It manages all functions. and calls voice API.

async function joke() {
    //Joke API
    const api = `https://sv443.net/jokeapi/v2/joke/Any?type=single`
    const jokes = await (await fetch(api)).json()
    const param = jokes.joke;
    
    //After fetch the joke call the speech function 


    speech(param)
}

async function speech(joke) {
    //Speech API
    const api = `http://api.voicerss.org/?key=3bd7b5e8615543119f5afe1c205b6b77&hl=en-us&c=MP3&src=${joke}`
    const speech = await fetch(api)
    //Call Audio function
    createAudio(speech.url);
}
    

//Create audio and source

function createAudio(source)  {

    //If there is audio element created before, remove and create new one.
    document.querySelector('source').src = source;
    console.log(source);
    
   
}


    