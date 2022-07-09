const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://pokeapi.co/api/v2';

const fetchData = (urlApi, callback) => {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true); 
    xhttp.onreadystatechange = (event) => {
         if (xhttp.readyState === 4){
            if (xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }
            else{
                const error = new Error('Error: ' + urlApi)
                return callback(error, null);
            }
         }
    }
    xhttp.send();
}

fetchData(`${API}/pokemon`, (error1, data1)=>{
    if (error1){console.error(error1);}
        fetchData(`${API}/pokemon/${data1.results[0].name}`, (error2, data2)=>{ 
            if (error2){console.error(error2);}
            const pokemon = data2
            console.log(`Este es ${pokemon.name}`)
        })
} )