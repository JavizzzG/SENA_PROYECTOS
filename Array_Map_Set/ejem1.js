let encendido = false
let codigoLibros= [10, 25, 60 , 45, 80, 15, 70]

let filtrado = codigoLibros.filter( n => n > 50)

while(!encendido){
alert(filtrado)
    encendido = confirm("Desea salir?")
    if(encendido){
        window.location.href = "index.html"

    }
}