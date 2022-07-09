const promise = new Promise(function(resolve, reject) {
    resolve('hello world')
    reject('sorry world')
}   
)


const cows = 15;

const countCows = new Promise(function(resolve, reject) {
    if(cows>10){
        resolve(`yes we have ${cows} cows`)
    }
    else{
        reject('Sorry we don´t have cows');
    }
})

countCows
.then((result) => {
    console.log(result);
})
.catch((err) => {console.log(err);})
.finally(()=>{console.log('finally done')});

