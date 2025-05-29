let encendido = true
let producto = new Map([
    [1, ["Doritos", 1, 0]],
    [2, ["Gaseosa", 1.2, 0]],
    [3, ["Agua", 0.5, 0]],
    [4, ["Cerveza", 2, 0]],
    [5, ["Galletas", 1.5, 0]]
])

let mostrarInventario = () => {
    let stock = "Los productos son: \n"
    for (let [code, [nombre, precio, cantidad]] of producto) {
        stock += `Código ${code}: ${nombre} por $${precio} : ${cantidad} unidades\n`
    }
    return stock
}

let mostrarStockRecomendado = () => {
    for (let [code, [nombre, precio, cantidad]] of producto) {
        if (cantidad > 0) {
            return nombre
        }
    }
    return "Ninguno, ya que no hay stock"
}

let pedirProducto = (cod, d) => {
    if (cod >= 1 && cod <= 5) {
        for (let [code, [nombre, precio, cantidad]] of producto) {
            if (code == cod) {
                if (cantidad > 0) {
                    if (d >= precio) {
                        cantidad -= 1
                        producto.set(code, [nombre, precio, cantidad])
                        return nombre + " entregado correctamente, devuelta de : $" + (d - precio)
                    } else {
                        return "No tiene suficiente dinero, devuelta del dinero ingresado : $" + d
                    }
                } else {
                    return "No hay productos disponibles, devuelta del dinero ingresado : $" + d + " \nAunque, puede pedir " + mostrarStockRecomendado()
                }
            }
        }
    }else{
        return "Producto no reconocido"
    }
}


let agregarStock = (add, cant) => {
    if (add >= 1 && add <= 5) {
        for (let [code, [nombre, precio, cantidad]] of producto) {
            if (code == add) {
                if (cant > 0) {
                    cantidad += cant
                    producto.set(code, [nombre, precio, cantidad])
                    return "Se ha agregado correctamente el stock de " + nombre + " con " + cant + " unidades"
                } else {
                    return "No se pueden agregar cantidades menores a 1"
                }
            }
        }
    }else{
        return "Producto no reconocido"
    }
}

while (encendido) {
    alert(mostrarInventario())
    let elegir = Number(prompt("Pedir producto (1) \nAumentar inventario (2) \nSalir (3) \nMostrar inventario (4)"))
    switch (elegir) {
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