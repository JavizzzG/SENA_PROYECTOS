function imprimirCopias(copias){
    if(copias < 500){
        return "El valor de la copia es $120 y el valor total del pedido es $"+(copias*120).toLocaleString()
    }else if(copias >= 500 && copias < 750){
        return "El valor de la copia es $100 y el valor total del pedido es $"+(copias*100).toLocaleString()
    }else if(copias >= 750 && copias < 1000){
        return "El valor de la copia es $80 y el valor total del pedido es $"+(copias*80).toLocaleString()
    }else{
        return "El valor de la copia es $50 y el valor total del pedido es $"+(copias*50).toLocaleString()
    }
}

do{
    let cantidad = Number(prompt("Cuantas copias desea imprimir"))

    console.log(imprimirCopias(cantidad))

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