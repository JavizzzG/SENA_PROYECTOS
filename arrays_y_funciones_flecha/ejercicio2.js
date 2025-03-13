let cajeroEncendido = true
let registro = []
let saldo = 0

let retirarDinero = (d) => {
    let dinero = 0 - d
    registro.push(dinero)
    if(registro.length > 5){
        registro.shift()
    }
    saldo += dinero
    return "Se ha retirado correctamente la cantidad de " + d + " dolares"
}

let depositarDinero = (d) => {
    registro.push(d)
    if(registro.length > 5){
        registro.shift()
    }
    saldo += d

    return "Se ha depositado correctamente la cantidad de " + d + " dolares"
}

while(cajeroEncendido){
    let elegir = Number(prompt("Desea retirar (1), Desea depositar (2), Ver saldo (3) o Deseao Salir (4)?"))

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
            if(depositar > 0){
            let depositar = Number(prompt("Cuantos dolares desea depositar?"))
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

        default :
            alert("Ha ocurrido un error, intente de nuevo")
    }
}