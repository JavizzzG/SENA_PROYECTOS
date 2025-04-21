let dias = Number(prompt("Cuantos días desea asistir al gimnasio"))

if(dias <= 15){
    console.log("El costo del gimnasio por "+dias+" días es $18.000")
}else if(dias <= 30){
    console.log("El costo del gimnasio por "+dias+" días es $35.000")
}else if(dias <= 90){
    console.log("El costo del gimnasio por "+dias+" días es $86.000")
}else{
    console.log("NO EXISTE UN PLAN PARA TANTOS DÍAS, MÁXIMO 90 DÍAS (3 MESES)")
}