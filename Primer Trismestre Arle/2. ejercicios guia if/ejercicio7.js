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
}