import fetch from "node-fetch";
const API = 'https://pokeapi.co/api/v2'

fetch(`${API}/pokemon`)
.then(response => response.json())
.then(async data => {
        const bulbasaur = data.results[0] 
         const response = await fetch(`${API}/pokemon/${bulbasaur.name}`);
        const data_1 = await response.json();
        return console.log(data_1.abilities);
        
    })