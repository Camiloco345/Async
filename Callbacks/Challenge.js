let XMLHttprequest = require('xmlhttprequest').XMLHttpRequest;

let fetchData = (url_api, callBack)=>{
    let xhttp = new XMLHttprequest()
    xhttp.open('GET', url_api, true)
    xhttp.onreadystatechange = (event) =>{
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callBack(null, JSON.parse(xhttp.responseText))
            }else{
                const Error = new Error('Error' + url_api)
                return callBack(Error, null)
            }
        }
    }
    xhttp.send()
}