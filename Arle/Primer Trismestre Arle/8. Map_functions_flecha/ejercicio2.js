let cajeroEncendido = true
let registro = new Map([])
let saldo = 0
let claveRegistro = 0
let clavemovimiento = 0
let comprobarRegistro = []


let retirarDinero = (d) => {
    let dinero = 0 - d
    registro.set(claveRegistro, dinero)
    claveRegistro++
    comprobarRegistro = [...registro.values()]
    if(comprobarRegistro.length > 5){
        registro.delete(clavemovimiento)
        clavemovimiento++
    }
    saldo += dinero
    return "Se ha retirado correctamente la cantidad de " + d + " dolares"
}

let depositarDinero = (d) => {
    registro.set(claveRegistro, d)
    claveRegistro++
    comprobarRegistro = [...registro.values()]
    if(comprobarRegistro.length > 5){
        registro.delete(clavemovimiento)
        clavemovimiento++
    }
    saldo += d

    return "Se ha depositado correctamente la cantidad de " + d + " dolares"
}

let lastMoves = () => {
    let movimientos = "Los últimos 5 movimientos son: \n"
    let movimientosArray = Array.from(registro).reverse(); // Convert to array and reverse to get last movements
    let count = 0;

    if (movimientosArray.length === 0) {
        return "No hay movimientos registrados.";
    }

    for (let [clave, movimiento] of movimientosArray) {
        if (count >= 5) {
            break; // Stop after 5 movements
        }
        movimientos += `Movimiento ${clave}: ${movimiento > 0 ? "Depósito" : "Retiro"} de ${Math.abs(movimiento)} dólares\n`;
        count++;
    }
    return movimientos
}

while(cajeroEncendido){
    let elegir = Number(prompt("Desea retirar (1), Desea depositar (2), Ver saldo (3) o Deseao Salir (4) o Ver movimientos (5)?"))

    switch(elegir){
        case 1:
            let retirar = Number(prompt("Cuantos dolares desea retirar?"))
            if(retirar <= saldo){
            if(retirar <= 500 && retirar > 0){
                alert(retirarDinero(retirar))
            }else{
                alert("Nose pueden retirar montos mayores a 500 o menores a 1")
            }
            }else{
                alert("No tiene suficiente saldo")
            }
        break

        case 2:
            let depositar = Number(prompt("Cuantos dolares desea depositar?"))
            if(depositar > 0){
            alert(depositarDinero(depositar))
            }else{
                alert("No se pueden depositar montos menores a 1")
            }
        break

        case 3:
            alert("Su saldo es de " + saldo)
        break

        case 4:
            cajeroEncendido = false
            window.location.href = "index.html"
        break

        case 5:
            alert(lastMoves())
        break

        default :
            alert("Ha ocurrido un error, intente de nuevo")
    }
}