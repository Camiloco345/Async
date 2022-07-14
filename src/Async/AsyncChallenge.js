import fetch from "node-fetch";
const API = 'https://pokeapi.co/api/v2'

async function fetchData(urlApi) {
    const response = await fetch(urlApi)
    const data = await response.json();
    return data;
}

const anotherFunction = async (urlApi) => {
    try{
        const pokemon = await fetchData(`${API}/pokemon`)
        const first = pokemon.results[0]
        const Bulbasaur = await fetchData(`${API}/pokemon/${first.name}`)
        console.log(`Name: ${Bulbasaur.name}`)
        const BulbasaurAbility = Bulbasaur.abilities[1]
        const ability = BulbasaurAbility.ability
        console.log(`Ability: ${ability.name}`)
        const abilityAPI = ability.url
        const description = await fetchData(abilityAPI)
        const effect = description.effect_entries[1]
        console.log(`Effect: ${effect.effect}`)
       
    } 
    catch{
        console.error(new Error);
    }
}

anotherFunction(API)