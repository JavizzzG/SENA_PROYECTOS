do{
    let cantidad = Number(prompt("Cuantas copias desea imprimir"))

if(cantidad < 500){
    precioTotal = 120 * cantidad
    console.log("El valor de la copia es $120 y el valor total del pedido es $"+precioTotal.toLocaleString())

}else if(cantidad >= 500 && cantidad < 750){
    precioTotal = 100 * cantidad
    console.log("El valor de la copia es $100 y el valor total del pedido es $"+precioTotal.toLocaleString())

}else if(cantidad >= 750 && cantidad < 1000){
    precioTotal = 80 * cantidad
    console.log("El valor de la copia es $80 y el valor total del pedido es $"+precioTotal.toLocaleString())

}else{
    precioTotal = 50 * cantidad
    console.log("El valor de la copia es $50 y el valor total del pedido es $"+precioTotal.toLocaleString())
}

let volver = Number(prompt("Desea volver a elegir la cantidad a imprimir (1). Desea salir (2)"))
    switch(volver){
        case 1: iniciar = true
        break

        case 2: iniciar = false
                window.location.href = "index.html"
        break

        default :
                iniciar = true
                console.log("Error en el sistema")
    }
}while(iniciar)