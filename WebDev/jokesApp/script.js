

const fetchJoke = async () => {
    try{
        const result = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
        const joke = await result.json();
        console.log(joke);
        //clean the joke div before appending new joke
        document.getElementById('joke-div').innerHTML = '';
        if(joke.type === 'single'){
            document.getElementById('joke-div').append(`${joke.joke}`);
        }
        else{
            document.getElementById('joke-div').innerHTML = `${joke.setup} <br> ${joke.delivery}`;
        }
    }
    catch(error){
        console.error('Error fetching joke:', error);
    }
}


const jokeButton = document.getElementById('btn').addEventListener('click', fetchJoke);