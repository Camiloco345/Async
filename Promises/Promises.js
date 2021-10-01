const somethingWillHappen =()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('Todo bien, todo correcto')
        }else{
            reject('No, algo salio mal')
        }
    })
}

const somethingWillHappen2 = () =>{
    return new Promise((resolve, reject) => {
        if(true){
           setTimeout(()=>{
               resolve('Sirve')
           }, 3000)
        }else{
            const error = new Error('UPS')
            reject('No sirvio')
        }
    })
}

somethingWillHappen()
.then(Response=>console.log(Response))
.catch(err => console.error(err))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('an array of results',response)
})

.catch(err => console.error(err))