let ang1 = Number(prompt("Ingrese el valor del Primer ángulo"))
let ang2 = Number(prompt("Ingrese el valor del Segundo ángulo"))
let ang3 = Number(prompt("Ingrese el valor del Tercer ángulo"))

let triangulo = ang1 + ang2 +ang3

if(triangulo == 180){
    console.log("Si es un triangulo válido")
}else{
    console.log("Error, no cumple las condiciones")
}

