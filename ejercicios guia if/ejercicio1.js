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
