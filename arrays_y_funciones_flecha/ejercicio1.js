let salir = false
let habitaciones = [0, 0, 0, 0, 0]

let reservar = () => {
    for (let i = 0; i < habitaciones.length; i++) {
        if (habitaciones[i] == 0) {
            habitaciones[i] = 1
            return 'Reservada correctamente la habitación ' + (i + 1) + '. \nEstado actual de las habitaciones ' + habitaciones
        }
        
    }
    let ocupadas = habitaciones.every(n => n == 1)
        if (ocupadas) {
            return "Todas las habitaciones se encuentran ocupadas"
        }
}


let liberar = (l) => {
    let libres = habitaciones.every(n => n == 0)
        if (libres) {
            return "Todas las habitaciones se encuentran libres"
        }
    habitaciones[l] = 0
    return 'Liberada correctamente la habitación ' + (l + 1) + '. \nEstado actual de las habitaciones ' + habitaciones
}


while (salir == false) {
    let estado = Number(prompt("Desea reservar (1), Desea liberar (2), Desea salir (3)"))

    switch (estado) {
        case 1:
            alert(reservar())
            break

        case 2:
            let habitacionLiberar = Number(prompt("Que habitación desea liberar?"))
            alert(liberar(habitacionLiberar))
            break

        case 3:
            salir = true
            window.location.href = "index.html"
            break

        default:
            alert("ERROR al seleccionar una opción")
    }
}