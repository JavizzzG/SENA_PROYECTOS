let encendido = true
let productos = ["Doritos", "Gaseosa", "Agua", "Cerveza", "Galletas"]
let precios = [1, 1.2, 0.5, 2, 1.5]
let inventario = [0, 0, 0, 0, 0]
let codigoProducto = [0, 1, 2, 3, 4]

let mostrarInventario = () => {
    for(let i = 0; i < productos.length; i++){
        alert((i+1)+". "+productos[i]+" por $"+precios[i]+" : "+inventario[i]+" unidades")
    }
}

let mostrarStockRecomendado = () => {
    for(let i = 0; i < productos.length; i++){
        if(inventario[i] > 0){
            return productos[i]
        }
    }
    return "Ninguno, ya que no hay stock"
}

let pedirProducto = (cod, d) => {
    let codChange = cod - 1
    if(codigoProducto[codChange] >= 0 && codigoProducto[codChange] <= 4){
        if(inventario[codChange] > 0){
            if(d >= precios[codChange]){
                inventario[codChange] -= 1
                return productos[codChange]+" entregado correctamente, devuelta de : $"+(d-precios[codChange])
            }else{
                return "No tiene suficiente dinero, devuelta del dinero ingresado : $"+d
            }
        }else{
            return "No hay productos disponibles, devuelta del dinero ingresado : $"+d+" \nAunque, puede pedir "+mostrarStockRecomendado()
        }
    }else{
        return "Producto no reconocido, devuelta del dinero ingresado : $"+d
    }
}

let agregarStock = (add, cant) => {
    let addChange = add - 1
    if(codigoProducto[addChange] >= 0 && codigoProducto[addChange] <= 4){
        if(cant > 0){
            inventario[addChange] += cant
            return "Se ha rellenado correctamente el stock de "+productos[addChange]+" con "+cant+" unidades"
        }else{
            return "No se pueden agregar cantidades menores a 1"
        }
    }else{
        return "Producto no reconocido"
    }
}

while(encendido){
    mostrarInventario()
    let elegir = Number(prompt("Pedir producto (1) \nAumentar inventario (2) \nSalir (3) \nMostrar inventario (4)"))
    switch(elegir){
        case 1:
            let dinero = Number(prompt("Introduzca la cantidad de monedas de $1 necesarias para pedir el producto"))
            let pedir = Number(prompt("Introduzca el codigo del producto que desea pedir"))
            alert(pedirProducto(pedir, dinero))
        break

        case 2:
            let agregar = Number(prompt("Introduzca el codigo del producto al que desea aumentarle el stock"))
            let cantidadAgregada = Number(prompt("Introduzca la cantidad a agregar"))
            alert(agregarStock(agregar, cantidadAgregada))
        break

        case 3:
            encendido = false
            window.location.href = "index.html"
        break

        case 4:
        break

        default:
            alert("Ha ocurrido un error, intente nuevamente")
    }
}