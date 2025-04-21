do{

let tipoSandwich = Number(prompt("Elija el tipo de Sandwich: Grande (1) Pequeño (2)"))
let adicionales = true
adicionales = confirm("¿Desea pedir ingredientes adicionales?")

sandwichGrande = 12000
sandwichPequeno = 6000

switch(tipoSandwich){
    case 1 : 
    if(adicionales){
        let tocineta = true
        tocineta = confirm("¿Desea pedir tocineta?")
        let jalapeno = true
        jalapeno = confirm("¿Desea pedir jalapeños?")
        let pavo = true
        pavo = confirm("¿Desea pedir pavo?")
        let queso = true
        queso = confirm("¿Desea pedir queso?")
        precioTocineta = 3000
        precioJalapeno = 0
        precioPavo = 3000
        precioQueso = 2500
        if(tocineta && jalapeno && pavo && queso){
            precioTotal = precioTocineta + precioJalapeno + precioPavo + precioQueso + sandwichGrande
            console.log("Pedido de Sandwich con todo por un precio de $"+precioTotal.toLocaleString())
        }else if(tocineta && jalapeno && pavo) {
            precioTotal = precioTocineta + precioJalapeno + precioPavo + sandwichGrande
            console.log("Pedido de Sandwich con tocineta, jalapeños y pavo por un precio de $"+precioTotal.toLocaleString())
        }else if(tocineta && jalapeno && queso){
            precioTotal = precioTocineta + precioJalapeno + precioQueso + sandwichGrande
            console.log("Pedido de Sandwich con tocineta, jalapeños y queso por un precio de $"+precioTotal.toLocaleString())
        }else if(tocineta && pavo && queso){
            precioTotal = precioTocineta + precioPavo + precioQueso + sandwichGrande
            console.log("Pedido de Sandwich con tocineta, pavo y queso por un precio de $"+precioTotal.toLocaleString())
        }else if(jalapeno && pavo && queso){
            precioTotal = precioJalapeno + precioPavo + precioQueso + sandwichGrande
            console.log("Pedido de Sandwich con jalapeños, Pavo y Queso por un precio de $"+precioTotal.toLocaleString())
        }else if(tocineta && jalapeno){
            precioTotal = precioTocineta + precioJalapeno + sandwichGrande
            console.log("Pedido de Sandwich con tocineta y jalapeños por un precio de $"+precioTotal.toLocaleString())
        }else if(tocineta && pavo){
            precioTotal = precioTocineta + precioPavo + sandwichGrande
            console.log("Pedido de Sandwich con tocineta y pavo por un precio de $"+precioTotal.toLocaleString())
        }else if(tocineta && queso){
            precioTotal = precioTocineta + precioQueso + sandwichGrande
            console.log("Pedido de Sandwich con tocineta y queso por un precio de $"+precioTotal.toLocaleString())
        }else if(jalapeno && pavo){
            precioTotal = precioJalapeno + precioPavo + sandwichGrande
            console.log("Pedido de Sandwich con jalapeños y pavo por un precio de $"+precioTotal.toLocaleString())
        }else if(jalapeno && queso){
            precioTotal = precioJalapeno + precioQueso + sandwichGrande
            console.log("Pedido de Sandwich con jalapeños y queso por un precio de $"+precioTotal.toLocaleString())
        }else if(pavo && queso){
            precioTotal = precioPavo + precioQueso + sandwichGrande
            console.log("Pedido de Sandwich con pavo y queso por un precio de $"+precioTotal.toLocaleString())
        }else if(tocineta){
            precioTotal = precioTocineta + sandwichGrande
            console.log("Pedido de Sandwich con tocineta por un precio de $"+precioTotal.toLocaleString())
        }else if(jalapeno){
            precioTotal = precioJalapeno + sandwichGrande
            console.log("Pedido de Sandwich con jalapeños por un precio de $"+precioTotal.toLocaleString())
        }else if(pavo){
            precioTotal = precioPavo + sandwichGrande
            console.log("Pedido de Sandwich con pavo por un precio de $"+precioTotal.toLocaleString())
        }else{
            precioTotal = precioQueso + sandwichGrande
            console.log("Pedido de Sandwich con queso por un precio de $"+precioTotal.toLocaleString()) 
        }
    }else{
        precioTotal = sandwichGrande
        console.log("Pedido de Sandwich por un precio de $"+precioTotal.toLocaleString())
    }

    break

    case 2 :
        if(adicionales){
            let tocineta = true
            tocineta = confirm("¿Desea pedir tocineta?")
            let jalapeno = true
            jalapeno = confirm("¿Desea pedir jalapeños?")
            let pavo = true
            pavo = confirm("¿Desea pedir pavo?")
            let queso = true
            queso = confirm("¿Desea pedir queso?")
            precioTocineta =  3000
            precioJalapeno = 0
            precioPavo = 3000
            precioQueso = 2500
            if(tocineta && jalapeno && pavo && queso){
                precioTotal = precioTocineta + precioJalapeno + precioPavo + precioQueso + sandwichPequeno
                console.log("Pedido de Sandwich con todo por un precio de $"+precioTotal.toLocaleString())
            }else if(tocineta && jalapeno && pavo) {
                precioTotal = precioTocineta + precioJalapeno + precioPavo + sandwichPequeno
                console.log("Pedido de Sandwich con tocineta, jalapeños y pavo por un precio de $"+precioTotal.toLocaleString())
            }else if(tocineta && jalapeno && queso){
                precioTotal = precioTocineta + precioJalapeno + precioQueso + sandwichPequeno
                console.log("Pedido de Sandwich con tocineta, jalapeños y queso por un precio de $"+precioTotal.toLocaleString())
            }else if(tocineta && pavo && queso){
                precioTotal = precioTocineta + precioPavo + precioQueso + sandwichPequeno
                console.log("Pedido de Sandwich con tocineta, pavo y queso por un precio de $"+precioTotal.toLocaleString())
            }else if(jalapeno && pavo && queso){
                precioTotal = precioJalapeno + precioPavo + precioQueso + sandwichPequeno
                console.log("Pedido de Sandwich con jalapeños, Pavo y Queso por un precio de $"+precioTotal.toLocaleString())
            }else if(tocineta && jalapeno){
                precioTotal = precioTocineta + precioJalapeno + sandwichPequeno
                console.log("Pedido de Sandwich con tocineta y jalapeños por un precio de $"+precioTotal.toLocaleString())
            }else if(tocineta && pavo){
                precioTotal = precioTocineta + precioPavo + sandwichPequeno
                console.log("Pedido de Sandwich con tocineta y pavo por un precio de $"+precioTotal.toLocaleString())
            }else if(tocineta && queso){
                precioTotal = precioTocineta + precioQueso + sandwichPequeno
                console.log("Pedido de Sandwich con tocineta y queso por un precio de $"+precioTotal.toLocaleString())
            }else if(jalapeno && pavo){
                precioTotal = precioJalapeno + precioPavo + sandwichPequeno
                console.log("Pedido de Sandwich con jalapeños y pavo por un precio de $"+precioTotal.toLocaleString())
            }else if(jalapeno && queso){
                precioTotal = precioJalapeno + precioQueso + sandwichPequeno
                console.log("Pedido de Sandwich con jalapeños y queso por un precio de $"+precioTotal.toLocaleString())
            }else if(pavo && queso){
                precioTotal = precioPavo + precioQueso + sandwichPequeno
                console.log("Pedido de Sandwich con pavo y queso por un precio de $"+precioTotal.toLocaleString())
            }else if(tocineta){
                precioTotal = precioTocineta + sandwichGrande
                console.log("Pedido de Sandwich con tocineta por un precio de $"+precioTotal.toLocaleString())
            }else if(jalapeno){
                precioTotal = precioJalapeno + sandwichPequeno
                console.log("Pedido de Sandwich con jalapeños por un precio de $"+precioTotal.toLocaleString())
            }else if(pavo){
                precioTotal = precioPavo + sandwichPequeno
                console.log("Pedido de Sandwich con pavo por un precio de $"+precioTotal.toLocaleString())
            }else{
                precioTotal = precioQueso + sandwichPequeno
                console.log("Pedido de Sandwich con queso por un precio de $"+precioTotal.toLocaleString()) 
            }
        }else{
            precioTotal = sandwichPequeno
            console.log("Pedido de Sandwich por un precio de $"+precioTotal.toLocaleString())
        }
    
    break

    default : 
        console.log("Error en los datos, intente de nuevo")

}

let volver = Number(prompt("Desea pedir otro Sandwich (1). Desea salir (2)"))
    switch(volver){
        case 1: iniciar = true
        break

        case 2: iniciar = false
                window.location.href = "index.html"
        break

        default : iniciar = true
                    console.log("Lo sentimos, ha ocurrido un error al elegir una opción")
    }
}while(iniciar)
    