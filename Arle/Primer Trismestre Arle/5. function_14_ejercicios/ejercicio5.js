function promediar(media, calificar){
    respuesta = "Tu porcentaje es "+media+"% y tu calificación es "+calificar
    return respuesta
}

let fisica = Number(prompt("Cual ha sido la calificación en Física"))
let quimica = Number(prompt("Cual ha sido la calificación en Química"))
let biologia = Number(prompt("Cual ha sido la calificación en Biología"))
let matematicas = Number(prompt("Cual ha sido la calificación en Matemáticas"))
let informatica = Number(prompt("Cual ha sido la calificación en Informática"))

promedio = (fisica + quimica + biologia + matematicas + informatica)/50*100

if(promedio < 60){
    calificacion = "Mala"
    console.log(promediar(promedio, calificacion))
}else if(promedio >= 60 && promedio <= 80){
    calificacion = "Buena"
    console.log(promediar(promedio, calificacion))
}else{
    calificacion = "Excelente"
    console.log(promediar(promedio, calificacion))
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
