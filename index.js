const button = document.querySelector('.button');
const audio = document.querySelector('.audio');


//Call a function when click the button. 
button.onclick = joke;

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
    const api = `http://api.voicerss.org/?key=b2d244be347447ad84a5745a3388dbaf&hl=en-us&c=MP3&src=${joke}`
    const speech = await fetch(api)
    const audios = document.querySelector('audio')
    if(audios) {
        audios.remove()
    }

    const audioController = document.createElement('audio');
    audioController.setAttribute('controls', '');
    const sourceCreate = document.createElement('source');
    sourceCreate.setAttribute('src', speech.url)
    document.body.appendChild(audioController)
    audioController.appendChild(sourceCreate)

}   


