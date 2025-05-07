let iniciar = Number(prompt("Desea continuar (1). Desea salir al menú (2)"))

function verificarNumero(number){
    numeroVerificado = number % 2
    return numeroVerificado
}

switch(iniciar) {
    case 1 :

const numero = prompt("Ingrese un número")

const numeroReal = parseInt(numero[numero.length-1])

if(isNaN(numero)){
    console.log("Formato de número no válido")
}else if(verificarNumero(numeroReal) == 0){
    console.log("El número es par")
}else{
    console.log("El número es impar")
}

setTimeout(() => {
    let volver = Number(prompt("Desea volver a iniciar (1). Desea salir al menú (2)"))

    switch(volver) {
        case 1 : 
            window.location.href = "ejercicio2.html"
        
        break

        case 2 : 
            window.location.href = "index.html"

        break

        default : console.log("Error en los datos, intente de nuevo")
        
    }
    }, 3000)


break

case 2 :


if(iniciar == 2){
    window.location.href = "index.html"
}else{
    console.log("Error en los datos, intente de nuevo")
}

break

default : console.log("Error en los datos, intente de nuevo")

}