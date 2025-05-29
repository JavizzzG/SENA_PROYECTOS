function calcularCosto(tipoSandwich){
    if(tipoSandwich == 1){
        return costoTotal = 12000
    }else if(tipoSandwich == 2){
        return costoTotal = 6000
    }else{
        return "Error en los datos ingresados"
    }
}

function calcularIngredientes(tocineta, jalapeno, pavo, queso){
    costoIngrediente = 0
    if(tocineta){
        costoIngrediente += 3000
    }
    if(jalapeno){
        costoIngrediente += 0
    }
    if(pavo){
        costoIngrediente += 3000
    }
    if(queso){
        costoIngrediente += 2500
    }
    return costoIngrediente
}


do{

let tipoSandwich = Number(prompt("Elija el tipo de Sandwich: Grande (1) Pequeño (2)"))
let adicionales = true
adicionales = confirm("¿Desea pedir ingredientes adicionales?")
if(adicionales){
let tocineta = true
tocineta = confirm("¿Desea pedir tocineta?")
let jalapeno = true
jalapeno = confirm("¿Desea pedir jalapeños?")
let pavo = true
pavo = confirm("¿Desea pedir pavo?")
let queso = true
queso = confirm("¿Desea pedir queso?")

console.log("El costo total por el Sandwich es : $"+(calcularCosto(tipoSandwich) + calcularIngredientes(tocineta, jalapeno, pavo, queso)).toLocaleString())
}else{
    console.log("El costo total por el Sandwich es : $"+calcularCosto(tipoSandwich).toLocaleString())
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
    