do{

let modelo = Number(prompt("Digite el modelo de su automóvil para verificar si está defectuoso"))

switch(modelo){
    case 119 : console.log("Automóvil defectuso, llevar a garantía")
    break
    case 179 : console.log("Automóvil defectuso, llevar a garantía")
    break
    case 189 : console.log("Automóvil defectuso, llevar a garantía")
    break
    case 195 : console.log("Automóvil defectuso, llevar a garantía")
    break
    case 221 : console.log("Automóvil defectuso, llevar a garantía")
    break
    case 780 : console.log("Automóvil defectuso, llevar a garantía")
    break
    default : console.log("Su automóvil no está defectuoso")
}

let volver =  Number(prompt("Desea probar con otro modelo de auto (1). Desea salir (2)"))
    switch(volver){
        case 1 : iniciar = true
        break

        case 2 : iniciar = false
                    window.location.href = "index.html"
        break

        default : iniciar = true
                    console.log("Ha ocurrido un error en el sistema")
    }

}while(iniciar)