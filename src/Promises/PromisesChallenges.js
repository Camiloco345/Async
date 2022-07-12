import fetch from "node-fetch";
const API = 'https://pokeapi.co/api/v2'

let fetchData = (urlApi)=>{
    return fetch(urlApi)
};
//This is the first API calling to fetch a pokemon list
 fetchData(`${API}/pokemon`)
.then( response => response.json() )
.then(data => {
    const pokemon = data.results[0]
    console.log(`Name: ${pokemon.name}`)
    //This is a new addition to the url using the information we fetched from the API 
   return fetchData(`${API}/pokemon/${pokemon.name}`)
    .then(response => response.json() )
    .then(data2 => {
       const abilities = data2.abilities
       //here we accede to the object information and extract the ability information
       const ability = abilities[1]
       console.log(`Ability name: ${ability.ability.name}`)
       const abilityAPI = ability.ability.url
       //here we fetch the url to access the abilities description
        return fetchData(abilityAPI)
        .then(response => response.json())
        //here we finally get the ability information and description we want
        .then(description => {
            const effect = description.effect_entries[1].effect
            console.log(`Effect name: ${effect}`)
        })
    })
})


