let huespedes = []
let habitaciones = [
    [1, ["Doble", "Disponible", 200000, 2]],
    [2, ["Doble", "Disponible", 200000, 2]],
    [3, ["Doble", "Disponible", 200000, 2]],
    [4, ["Triple", "Disponible", 300000, 3]],
    [5, ["Triple", "Disponible", 300000, 3]],
    [6, ["Triple", "Disponible", 300000, 3]],
    [7, ["Cuadruple", "Disponible", 400000, 4]],
    [8, ["Cuadruple", "Disponible", 400000, 4]],
    [9, ["Cuadruple", "Disponible", 400000, 4]],
    [10, ["Quintuple", "Disponible", 500000, 5]],
    [11, ["Quintuple", "Disponible", 500000, 5]],
    [12, ["Quintuple", "Disponible", 500000, 5]]
]

//------------------------------------------
//----------------------------------Función completa para registrar un nuevo huesped--------------------------------------------
//------------------------------------------

let ingresarHuesped = (nombre, cantidadPersonas, fechaEntrada, nochesEstadia, ...habitacionesHuesped) => {
    nombre.trimLeft() // Para quitar espacio al inicio en el nombre
    nombre.trimRight() // Para quitar espacio al final en el nombre
    if (mostrarDisponibilidadTotal() >= cantidadPersonas) { //verifica que haya suficiente disponibilidad
        if (/[0-9]/.test(nombre) == false) {
            let verificarOcupacion = function () { //Verifica que la habitación introducida no esté ocupada
                for (let i = 0; i < habitacionesHuesped.length; i++) {
                    if (habitaciones[habitacionesHuesped[i] - 1][1][1] == "Ocupada") {
                        console.log(`La habitación ${habitacionesHuesped[i]} está ocupada`)
                        return false
                    }
                }
                return true
            }
            if (verificarOcupacion() == true) { //Realiza la acción para resistrar usuario luego de todas las verificaciones
                let costo = 0
                let mensaje = `Habitación `
                habitacionesHuesped.forEach(hab => {
                    mensaje += `${hab}, `
                    habitaciones[hab - 1][1][1] = "Ocupada"
                    costo += habitaciones[hab - 1][1][2]

                })
                reemplazo = /(\, )$/
                mensaje = mensaje.replace(reemplazo, "")
                huespedes.push([nombre, cantidadPersonas, fechaEntrada, nochesEstadia, mensaje, costo])
                mensaje = `Se ha reservado ${mensaje} para ${cantidadPersonas} personas. Reserva a nombre de ${nombre} entrando el ${fechaEntrada}, estancia de ${nochesEstadia} noches por un precio de ${costo} pesos la noche`
                console.log(mensaje)
            }
        } else {
            console.log("El nombre no puede contener números, vuelva  a intentarlo")
        }
    } else {
        console.log("No hay habitaciones disponibles")
        return
    }
}


//----------------------------------------
//-----------------------------------Funciones para verificar y mostrar disponibilidad de habitaciones --------------------------------------------------
//----------------------------------------


function verificarDisponibilidad(cantidadPersonas = 0) {
    if (mostrarDisponibilidadTotal() >= cantidadPersonas) { //verifica que la disponibilidad sea suficiente
        let habitacionesDisponibles = `Las habitaciones disponibles son:`
        for (let i = 11; i >= 0; i--) {
            if (habitaciones[i][1][1] == "Disponible") {
                habitacionesDisponibles += `\nHabitación ${habitaciones[i][0]}: ${habitaciones[i][1][0]} a ${habitaciones[i][1][2].toLocaleString()} la habitación`
            }
        }
        console.log(habitacionesDisponibles)
        return true
    } else {
        console.log("No hay habitaciones disponibles")
        return false
    }
}


//-----------------------------------------------
//-----------------------------------Funciones para mostrar registro de huespedes y estado de las habitaciones----------------------------------------------------
//-----------------------------------------------


let mostrarRegistro = (nombre = null) => {
    console.log("Registro de huéspedes:")
    if (nombre == null || nombre == "") {
        for (let i = 0; i < huespedes.length; i++) {
            console.log(`Nombre: ${huespedes[i][0]}
                Cantidad huéspedes: ${huespedes[i][1]}
                Fecha de ingreso: ${huespedes[i][2]}
                Noches de estadia: ${huespedes[i][3]}
                Habitaciones ocupadas: ${huespedes[i][4]}
                Costo por noche: ${huespedes[i][5].toLocaleString()}
                Costo total: ${(huespedes[i][5] * huespedes[i][3]).toLocaleString()}`)
        }
    } else {
        for (let i = 0; i < huespedes.length; i++) {
            if (huespedes[i][0] == nombre) {
                console.log(`Nombre: ${huespedes[i][0]}
                Cantidad huéspedes: ${huespedes[i][1]}
                Fecha de ingreso: ${huespedes[i][2]}
                Noches de estadia: ${huespedes[i][3]}
                Habitaciones ocupadas: ${huespedes[i][4]}
                Costo por noche: ${huespedes[i][5].toLocaleString()}
                Costo total: ${(huespedes[i][5] * huespedes[i][3]).toLocaleString()}`)
                return
            }
        }
        console.log("No existe un resgistro de huésped con ese nombre")
        return
    }
}

let mostrarEstadoHabitaciones = () => {
    console.log("Estado de las habitaciones:")
    for (let i = 0; i < habitaciones.length; i++) {
        console.log(`Habitación ${habitaciones[i][0]}: ${habitaciones[i][1][1]}`)
    }
}

function mostrarHabsRecomendadas(num) {
    if(mostrarDisponibilidadTotal() >= num){
    let habs = habitaciones.filter(hab => hab[1][1] == "Disponible")
    let recomendacion = `Habitaciones recomendadas:`
    let recomendacionPrueba = recomendacion
    for(let i= 0; i < habs.length; i++){
        if(habs[i][1][3] == num){
            recomendacion += `\nHabitación ${habs[i][0]}`
        }
    }
    return (function() {
        for(let i = 0; i < habs.length-1; i++){
            for(let k = i+1; k < habs.length; k++){
                if(habs[i][1][3] + habs[k][1][3] == num && habs[i][0] != habs[k][0]){
                    recomendacion += `\nHabitación ${habs[i][0]} y ${habs[k][0]}`
                }
            }
        }
        return (function() {
            for(let i = 0; i < habs.length-2; i++){
                for(let k = i+1; k < habs.length-1; k++){
                    for(let j = k+1; j < habs.length; j++){
                        if(habs[i][1][3] + habs[k][1][3] + habs[j][1][3] == num && habs[i][0] != habs[k][0] && habs[i][0] != habs[j][0] && habs[k][0] != habs[j][0]){
                            recomendacion += `\nSe recomiendan las habitaciones ${habs[i][0]}, ${habs[k][0]} y ${habs[j][0]}`
                        }
                    }
                }
            }
            if(recomendacionPrueba == recomendacion){
                return `No hay habitaciones recomendadas. Intente verificando la disponibilidad`
            }
            return recomendacion
        })()
    })()
    }else{
        return "No hay habitaciones disponibles"
    }
}


//---------------------------------------
//funciones complementarias que no han de ser llamdas como función principal
//---------------------------------------

function mostrarDisponibilidadTotal() {
    let habitacionesDisponibles = 0
    for (let i = 0; i < habitaciones.length; i++) {
        if (habitaciones[i][1][1] == "Disponible") {
            habitacionesDisponibles += habitaciones[i][1][3]
        }
    }
    return habitacionesDisponibles
}

let fecha = () => {
    let fechaIngreso = new Date()
    let fecha = fechaIngreso.getDate() + "/" + (mes(fechaIngreso.getMonth())) + "/" + fechaIngreso.getFullYear() + "  " + fechaIngreso.getHours() + ":" + fechaIngreso.getMinutes()
    return fecha

}

let mes = (mes) => {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    return meses[mes]
}

//---------------------------------------
//---------Parte de código de interacción con el usuario
//---------------------------------------


let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(pregunta) {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => resolve(respuesta));
    });
}

async function activar() {
    let activo = true

    while(activo){
    let opcion = await preguntar(`Que desea hacer:
        1. Registrar nuevo huésped
        2. Verificar disponibilidad de habitaciones
        3. Mostrar habitaciones recomendadas
        4. Mostrar registro de huéspedes
        5. Mostrar estado de habitaciones
        6. Salir
        `) 

    if(opcion == 1){
    let nombre = await preguntar('Nombre huésped: ');
    let cantidadPersonas = await preguntar('¿Cuántos huéspedes?: ');
    let nochesEstadia = await preguntar('¿Cuántas noches de estancia?: ');
    let habitaciones = await preguntar('¿Qúe habitaciones ocuparán?: ');
    let habitaciones2 = habitaciones
    habitaciones2 = habitaciones2.split(',')
    habitaciones2 = habitaciones2.map(i => parseInt(i.trim()))
    habitaciones2 = habitaciones2.filter(i => !isNaN(i)); // Asegura que solo pasen números válidos
    ingresarHuesped(nombre, parseInt(cantidadPersonas), fecha(), parseInt(nochesEstadia), ...habitaciones2)

    }else if(opcion == 2){
    let verificar = await preguntar('¿Cuántas personas?: ')
    verificarDisponibilidad(verificar) 

    }else if(opcion == 3){
    let recom = await preguntar("¿Cuantas personas?: ")
    console.log(mostrarHabsRecomendadas(recom))

    }else if(opcion == 4){
    let registroHuesped = await preguntar('¿Cuál es el nombre del huésped?: ')
    mostrarRegistro(registroHuesped)

    }else if(opcion == 5){
    mostrarEstadoHabitaciones()

    }else if(opcion == 6){
    activo = false
    console.log("Ejecución finalizada")

    }else{
        console.log("Opción no válida")
    }
    }
    rl.close();
}

activar()