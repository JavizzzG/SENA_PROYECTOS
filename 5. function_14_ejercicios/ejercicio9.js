function hallarTriangulo(ang1, ang2, ang3){
    let triangulo = ang1 + ang2 +ang3
    return triangulo

}

function verificar(triangle){
    if(triangle == 180){
        return "Si es un triangulo válido"
    }else{
        return "Error, no cumple las condiciones"
    }
}

do{

let ang1 = Number(prompt("Ingrese el valor del Primer ángulo"))
let ang2 = Number(prompt("Ingrese el valor del Segundo ángulo"))
let ang3 = Number(prompt("Ingrese el valor del Tercer ángulo"))

console.log(verificar(hallarTriangulo(ang1, ang2, ang3)))

let volver = Number(prompt("Deseaa volver a intentar (1). Desea salir(2)"))
    switch(volver){
        case 1: iniciar = true
        break

        case 2: iniciar = false
                window.location.href = "index.html"
        break

        default : iniciar = true
                    console.log("Error en los datos ingresados")
    }

}while(iniciar)
