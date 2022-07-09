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
    console.log(data1.results);

    // fetchData(`${API}/pokemon/${data1.results}`, (error2, data2)=>{
    //     if (error2){console.error(error2); }

    //     fetchData(`${API}/results/${data2?.results[0]}`, (error3, data3)=>{
    //         if (error3){console.error(error3); }
    //         console.log(data1[0]); 
    //         console.log(data2.name);
    //         console.log(data3.forms);
    //     })
    // })
} )