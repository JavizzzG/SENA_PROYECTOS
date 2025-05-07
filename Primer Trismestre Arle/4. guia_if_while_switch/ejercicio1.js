let iniciar = Number(prompt("Desea continuar (1). Desea salir al menú (2)"))

switch(iniciar) {
    case 1 :
        
    const nombre = prompt("Ingrese su nombre")
    let horas = Number(prompt("Horas trabajadas en la semana"))

    if(isNaN(horas)){
        console.log("Formato de hora no válido")
    }else if(horas <= 10){
        pago = horas * 30000

        console.log("Señor/a "+nombre+", el número de horas trabajadas es "+horas+" y su salario equivale a $"+pago.toLocaleString()+" pesos")
    }else{
        pago = horas * 33000

        console.log("Señor/a "+nombre+", el número de horas trabajadas es "+horas+" y su salario equivale a $"+pago.toLocaleString()+" pesos")
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
