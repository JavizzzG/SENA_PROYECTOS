let encendido= false
let precioProductos= [500, 1200, 300, 1000, 800]

let preciosAltos = precioProductos.some( n => n > 1000)

while(!encendido){
    alert(`${preciosAltos ? "Hay al menos un producto costoso" : "No hay ningún producto costoso"}`)
        encendido = confirm("Desea salir?")
        if(encendido){
            window.location.href = "index.html"
        }
    }