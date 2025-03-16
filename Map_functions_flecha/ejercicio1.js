let salir = false
let habitaciones = new Map([
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0]
])

let reservar = () => {
    for (let [habitacion, estado] of habitaciones) {
        if (estado === 0) {
            habitaciones.set(habitacion, 1);
            return 'Reservada correctamente la habitación ' + habitacion + '. \nEstado actual de las habitaciones ' + mostrarEstadoHabitaciones();
        }
    }
    return "Todas las habitaciones se encuentran ocupadas";
};



let liberar = (l) => {
    if (!habitaciones.has(l)) {
        return "La habitación " + l + " no existe.";
    }
    if (habitaciones.get(l) === 0) {
        return "La habitación " + l + " ya está libre.";
    }
    habitaciones.set(l, 0);
    return 'Liberada correctamente la habitación ' + l + '. \nEstado actual de las habitaciones ' + mostrarEstadoHabitaciones();
};

let mostrarEstadoHabitaciones = () => {
    let estado = "";
    for (let [habitacion, estadoHabitacion] of habitaciones) {
        estado += "Habitación " + habitacion + ": " + (estadoHabitacion === 0 ? "Libre" : "Ocupada") + "\n";
    }
    return estado;
};



while (salir == false) {
    alert(mostrarEstadoHabitaciones()); // Show the state of the rooms
    let estado = Number(prompt("Desea reservar (1), Desea liberar (2), Desea salir (3)"));

    switch (estado) {
        case 1:
            alert(reservar());
            break;

        case 2:
            let habitacionLiberar = Number(prompt("Que habitación desea liberar?"));
            alert(liberar(habitacionLiberar));
            break;

        case 3:
            salir = true;
            window.location.href = "index.html";
            break;

        default:
            alert("ERROR al seleccionar una opción");
    }
}