let numberNow: number = 1
let numberBefore: number = 0
let total: number = 0

function calcularFibonacci(n: number): number{
    total = numberNow + numberBefore
    numberBefore = numberNow
    numberNow = total
    if(n > 1){
        n--
        console.log(total)
        calcularFibonacci(n)
    }
    return total
}

(async function(num){
    console.log(0)
    console.log(1)
    await calcularFibonacci(num)
    console.log(` /\\\n/  \\\n ||\nEste es el número que está en la posición ${num} en la secuencia de fibonacci`)
})(10)

