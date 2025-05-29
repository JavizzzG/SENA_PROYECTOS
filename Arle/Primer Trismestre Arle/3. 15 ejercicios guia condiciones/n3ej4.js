const dia = true
const futbol = true
const natacion = true
const basketball = true

if(dia){
    if(futbol){
        console.log("Puedes practicar fútbol en el día")
    }
    if(natacion){
        console.log("Puedes practicar natación en el día")
    }
    if(basketball){
        console.log("Basketball no disponible en el día")
    }else{
        console.log("Seleccione un deporte")
    }
}else{
    if(futbol){
        console.log("Fútbol no disponible en la noche")
    }
    if(natacion){
        console.log("Natación no disponible en la noche")
    }
    if(basketball){
        console.log("Puedes practicar basketball en la noche")
    }else{
        console.log("Seleccione un deporte")
    }
}