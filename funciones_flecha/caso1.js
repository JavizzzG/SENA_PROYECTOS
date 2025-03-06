const numero = Number(prompt("Digite un numero para hallar el factorial"))
let cuenta = numero 
let respuesta = 1

let calcularFactorial = () =>{
    for(let i = cuenta; i > 1 ; i-- ){
        respuesta *= i
    }
    return "El factorial de "+numero+"! es "+respuesta
}

console.log(calcularFactorial())