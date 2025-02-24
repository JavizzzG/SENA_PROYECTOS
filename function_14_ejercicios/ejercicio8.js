do{

let dias = Number(prompt("Cuantos días desea asistir al gimnasio"))

if(dias < 1){
    console.log("Error en el sistema")
}else if(dias <= 15){
    console.log("El costo del gimnasio por "+dias+" días es $18.000")
}else if(dias <= 30){
    console.log("El costo del gimnasio por "+dias+" días es $35.000")
}else if(dias <= 90){
    console.log("El costo del gimnasio por "+dias+" días es $86.000")
}else{
    console.log("NO EXISTE UN PLAN PARA TANTOS DÍAS, MÁXIMO 90 DÍAS (3 MESES)")
}

let volver = Number(prompt("Desea cambiar los días de asistencia? (1). Desea salir? (2)"))
    switch(volver){
        case 1:
            iniciar = true
            break
        case 2:
            iniciar = false
            window.location.href = "index.html"
            break
        default :
            iniciar = true
            console.log("Error en el sistema")
    }

}while(iniciar)
