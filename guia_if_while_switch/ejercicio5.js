let fisica = Number(prompt("Cual ha sido la calificación en Física"))
let quimica = Number(prompt("Cual ha sido la calificación en Química"))
let biologia = Number(prompt("Cual ha sido la calificación en Biología"))
let matematicas = Number(prompt("Cual ha sido la calificación en Matemáticas"))
let informatica = Number(prompt("Cual ha sido la calificación en Informática"))
const calificacionMala = "Mala"
const calificacionBuena = "Buena"
const calificacionExcelente = "Excelente"

promedio = (fisica + quimica + biologia + matematicas + informatica)/50*100


if(promedio < 60){
    calificacion = calificacionMala
    console.log("Tu porcentaje es "+promedio+"% y tu calificación es "+calificacion)
}else if(promedio >= 60 && promedio <= 80){
    calificacion = calificacionBuena
    console.log("Tu porcentaje es "+promedio+"% y tu calificación es "+calificacion)
}else{
    calificacion = calificacionExcelente
    console.log("Tu porcentaje es "+promedio+"% y tu calificación es "+calificacion)
}

setTimeout(() => {
    let volver = Number(prompt("Desea volver a iniciar (1). Desea salir al menú (2)"))

    if(volver == 1){
        location.reload()
    }else if(volver == 2){
        window.location.href = "index.html"
    }else{
        console.log("Opción no válida")
    }
}, 3000)
