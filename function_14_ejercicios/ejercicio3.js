let iniciar = Number(prompt("Desea continuar (1). Desea salir al menú (2)"))

function mostrarCostoNormal(cant, tipo, hours){
    costo = hours*cant*tipo
    return costo
}

function mostrarCostoDescuento(cant, tipo, hours){
    costo = hours*cant*tipo
    costoDescuento = costo*3/100
    costoVerdadero = costo - costoDescuento
    return costoVerdadero
}

switch(iniciar){

    case 1 :

let tipoLavadora = Number(prompt("Elija lavadora grande (1) o lavadora pequeña (2)"))
let cantidad = Number(prompt("Cuantas lavadoras desea alquilar?"))
let horas = Number(prompt("Durante cuantas horas las desea alquilar?"))

if(tipoLavadora == 1){
    tipo = 4000

    if(cantidad > 3){
    console.log("Costo total por alquilar "+cantidad+" lavadoras tipo "+tipoLavadora+" por "+horas+" horas: $"+mostrarCostoDescuento(cantidad, tipo, horas).toLocaleString())
    }else{
        console.log("Costo total por alquilar "+cantidad+" lavadoras tipo "+tipoLavadora+" por "+horas+" horas: $"+mostrarCostoNormal(cantidad, tipo, horas).toLocaleString())
    }
}else if(tipoLavadora == 2){
    tipo = 3000

    if(cantidad > 3){
 
        console.log("Costo total por alquilar "+cantidad+" lavadoras tipo "+tipoLavadora+" por "+horas+" horas: $"+mostrarCostoDescuento(cantidad, tipo, horas).toLocaleString())
    }else{
        console.log("Costo total por alquilar "+cantidad+" lavadoras tipo "+tipoLavadora+" por "+horas+" horas: $"+mostrarCostoNormal(cantidad, tipo, horas).toLocaleString())
    }
}else{
    console.log("Error en los datos, intente de nuevo")
}

setTimeout(() => {
    let volver = Number(prompt("Desea volver a iniciar (1). Desea salir al menú (2)"))

    if(volver == 1){
        window.location.href = "ejercicio3.html"
    }else if(volver == 2){
        window.location.href = "index.html"
    }else{
        console.log("Error en los datos, intente de nuevo")
    }

}, 3000)

break

case 2 :
    window.location.href = "index.html"

break

default : console.log("Error en los datos, intente de nuevo")

}