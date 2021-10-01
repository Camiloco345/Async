const doSomethingAsync = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=> resolve('doing simething'), 3000)
        : reject(new Error('ups'))
    })
}


const doSomething = async () =>{
    const some = await doSomethingAsync()
    console.log(some)
}

console.log('before')
doSomething()
console.log('after')


const anotherFunction = async () =>{
    try{
        const something = await doSomethingAsync()
        console.log(something)
    }
    catch(error){
        console.error(error)
    }
}

console.log('before1')
anotherFunction()
console.log('after1')
