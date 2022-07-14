const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(()=>resolve('valid'), 2000)
        : reject(new Error('Error'))
    })
}


const otherFunction = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('hello')
}    

console.log('before')
otherFunction()
console.log('after')