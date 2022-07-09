import fetch from "node-fetch";
const API = 'https://pokeapi.co/api/v2'

fetch(`${API}/pokemon`)
.then(response => response.json())
.then(data => {
        const bulbasaur = data.results[0] 
         return fetch(`${API}/pokemon/${bulbasaur.name}`)
         .then(response => response.json())
         .then(data => console.log(data.abilities))
        
    })