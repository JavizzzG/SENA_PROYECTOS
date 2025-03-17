let encendido = true
let puntajes = [85, 92, 78, 95, 88]
let puntajesMap = new Map([])

let unirPuntajes = () => {
    for(let i = 0; i < puntajes.length; i++){
        puntajesMap.set(i, puntajes[i])
    }
}

let mostrarPuntajes = () => {
    let mostrar = "Los puntajes son : \n"
    puntajesMap.forEach((value, key) => {
        mostrar += `${key} : ${value} \n`
    })
    return mostrar
}

let ingresarPuntaje = (puntaje) => {
    puntajes.push(puntaje)
    unirPuntajes()
    return "Puntaje agregado"
}


while(encendido){
    unirPuntajes()
    let elegir = Number(prompt("Agregar nuevo puntaje (1), Ver puntajes (2), Salir (3)"))
    switch(elegir){
        case 1:
            let puntaje = Number(prompt("Ingrese el puntaje"))
            alert(ingresarPuntaje(puntaje))
        break

        case 2:
            alert(mostrarPuntajes())
        break

        case 3:
            encendido = false
            window.location.href = "index.html"
        break

        default:
            alert("Ha ocurrido un error")
    }
}