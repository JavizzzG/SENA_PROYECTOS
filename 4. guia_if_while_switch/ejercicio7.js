do{

let genero = prompt("Escriba su género: F para femenino, M para masculino")
let edad = Number(prompt("Digite su edad"))

switch(genero.toUpperCase()){
    case "M" : console.log("El valor de ayuda mensual es $40.000")
        break

    case "F" :
        
        if(edad > 50){
            console.log("El valor de ayuda mensual es $120.000")
        }else if(edad >=30 && edad <= 50 ){
            console.log("El valor de ayuda mensual es $100.000")
        }else{
            console.log("No tiene ayuda mensual")
        }

    break
    default :
        console.log("Error en la elección")
}

let volver = Number(prompt("Desea volver a verificar la información? (1). Desea sali? (2)"))
    switch(volver){
        case 1 : 
            iniciar = true
            break
        case 2 : 
            iniciar = false
            window.location.href = "index.html"
            break
        default :
        iniciar = true
            console.log("Error en la elección")
    }

}while(iniciar)