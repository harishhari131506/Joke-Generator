const btnel = document.getElementById("btn")
const jokel = document.getElementById("joke")

const apikey = "jRCrNBUda0kiqk+RIW/t5w==oviP5xmAH7I4k12I"

const options = {
    method:"GET",
    headers:{
        "X-Api-Key":apikey,
    },
};

const apiurl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getjoke(){


    try {

        jokel.innerText = "updating..."
        btnel.disabled = true;
        btnel.innerText = "Loading..";
        const response = await fetch(apiurl,options)
        const data = await response.json()
    
        btnel.disabled = false;
        btnel.innerText = "Tell me a joke";
    
        jokel.innerText = data[0].joke
        
    } catch (error) {
        
    }

   
}





btnel.addEventListener("click",getjoke)