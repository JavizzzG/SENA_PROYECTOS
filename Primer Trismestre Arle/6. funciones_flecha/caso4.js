let numero = Number(prompt("Digite un numero para comprobar si es primo"))
let resultado = 0
let sumarDivisores = () =>{
    for(let i = (numero - 1); i > 1 ; i--){
        if(numero % i == 0){
            resultado += i
        }
    }
    if(resultado == 0 && numero > 1){
        respuesta = true
    }else{
        respuesta = false
    }
    return respuesta
}

console.log(sumarDivisores())
