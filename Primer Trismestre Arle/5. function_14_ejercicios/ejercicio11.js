function comprobarEstado(pitido, disco, unidad){
    if(pitido){
        if(disco){
            return "Está averiada la PC"
        }else if(unidad){
            return "Póngase en contacto con el ténico apoyo"
        }else{
            return "Verificar contactos de la unidad"
        }
    }else{
        if(!disco){
            return "Traiga la PC para reparala en la central"
        }else{
            return "Compruebe las conexiones de altavoces"
        }
    }
}

do{

let pitido = true
pitido = confirm("EL pc emite un pitido?")
let disco = true
disco= confirm("EL disco duro gira?")
let unidad = true
unidad = confirm("La unidad gira?")

console.log(comprobarEstado(pitido, disco, unidad))

let volver = Number(prompt("Desea volver a evaluar su pc? (1). Desea salir (2)"))
    switch(volver){
        case 1 : iniciar = true
        break

        case 2 : iniciar = false
                    window.location.href = "index.html"
        break

        default : iniciar = true
                    console.log("Hay un error en el sistema")

    }
}while(iniciar)