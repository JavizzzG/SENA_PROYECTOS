let encendido = true
let productos = new Set([1001, 1002, 1003])

while(encendido){
    let elegir = Number(prompt("Verificar si un producto se ha vendido (1) o Salir (2)"))
    switch(elegir){
        case 1:
            let codigo = Number(prompt("Ingrese el código del producto para verificar su venta"))
            if(codigo > 0){
                let verificar = productos.has(codigo)
                if(verificar == true){
                    alert("Producto vendido")
                }else{
                    alert("No se ha vendido el producto")
                }
            }else{
                alert("Ingrese un código válido")
            }
        break

        case 2:
            encendido = false
            window.location.href = "index.html"
        break

        default : 
            alert("Ha ocurrido un error")
        break
    }
}