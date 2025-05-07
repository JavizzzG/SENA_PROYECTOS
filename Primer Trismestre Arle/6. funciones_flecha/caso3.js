let numero = Number(prompt("Digite un numero para hallar la suma de sus divisores"))
let resultado = 0
let sumarDivisores = () =>{
    for(let i = (numero - 1); i > 0 ; i--){
        if(numero % i == 0){
            resultado += i
        }
    }
    return resultado
}
console.log("El número introducido es "+numero+" y la suma de sus divisores es "+sumarDivisores())