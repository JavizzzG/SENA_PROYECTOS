let pitido = true
pitido = confirm("EL pc emite un pitido?")
let disco = true
disco= confirm("EL disco duro gira?")
let unidad = true
unidad = confirm("La unidad gira?")

if(pitido){
    if(disco){
        console.log("Está averiada la PC")
    }else if(unidad){
        console.log("Póngase en contacto con el ténico apoyo")
    }else{
        console.log("Verificar contactos de la unidad")
    }
}else{
    if(!disco){
        console.log("Traiga la PC para reparala en la central")
    }else{
        console.log("Compruebe las conexiones de altavoces")
    }
}