let sum = (num1, num2) => {return num1 + num2}

let calc = (num1, num2,  callBack) => {
    return callBack(num1, num2)
}

console.log(calc(2, 2, sum))

