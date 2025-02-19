const numero = prompt("Ingrese un número")

const numeroReal = parseInt(numero[numero.length-1])

if(isNaN(numero)){
    console.log("Formato de número no válido")
}else if(numeroReal % 2 == 0){
    console.log("El número es par")
}else{
    console.log("El número es impar")
}