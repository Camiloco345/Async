/**
 * The function callBack takes in three parameters, num1, num2, and calc. It then returns the result of
 * calc(num1, num2)
 * @param num1 - The first number to be passed into the callback function.
 * @param num2 - The second number to be used in the calculation.
 */
const suma = (num1, num2) =>{
    return num1 + num2;
}

const callBack = (num1, num2, calc ) => {
    return calc (num1, num2,);
}


console.log(callBack(2, 2, suma));

setTimeout(() =>{
    console.log('hola que hace');
    console.log(callBack(2, 2, suma));
}, 2000 )   


function saludo (name){
    console.log(`hola ${name}` )
} 

setTimeout(saludo, 2000, 'camilo');

saludo('Camilo');