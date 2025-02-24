let iniciar = Number(prompt("Desea continuar (1). Desea salir al menú (2)"))

function responder(name, hours){
    pago = hours * 30000
    mostrar = "Señor/a "+name+", el número de horas trabajadas es "+hours+" y su salario equivale a $"+pago.toLocaleString()+" pesos"
    return mostrar
}

function responder2(name, hours){
    pago = hours * 33000
    mostrar = "Señor/a "+name+", el número de horas trabajadas es "+hours+" y su salario equivale a $"+pago.toLocaleString()+" pesos"
    return mostrar
}

switch(iniciar) {
    case 1 :
        
    const nombre = prompt("Ingrese su nombre")
    let horas = Number(prompt("Horas trabajadas en la semana"))

    if(isNaN(horas)){
        console.log("Formato de hora no válido")
    }else if(horas <= 10){
        console.log(responder(nombre, horas))
    }else{
        console.log(responder2(nombre, horas))
    }

    setTimeout(() => {
        let volver = Number(prompt("Desea volver a iniciar (1). Desea salir al menú (2)"))

        if(volver == 1){
            window.location.href = "ejercicio1.html"
        }else if(volver == 2){
            window.location.href = "index.html"
        }else{
            console.log("Error en los datos, intente de nuevo")
        }

    }, 3000)

    break

    case 2 :
        window.location.href = "index.html"

    break

    default : console.log("Error en los datos, intente de nuevo")
}
