function verificar(modelo){
    if(modelo == 119 || modelo == 179 || modelo == 189 || modelo == 195 || modelo == 221 || modelo == 780){
        return "Automóvil defectuso, llevar a garantía"
    }else{
        return "Su automóvil no está defectuoso"
    }
}

do{

let modelo = Number(prompt("Digite el modelo de su automóvil para verificar si está defectuoso"))

console.log(verificar(modelo))

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