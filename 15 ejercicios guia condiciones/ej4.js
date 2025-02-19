let tempPromedio = 19
let estadoDia = "Nubado"

if(tempPromedio >= 26 && tempPromedio < 30 && estadoDia == "Soleado"){
    console.log("Hay buen clima con sol")
}else if(tempPromedio > 20 && tempPromedio < 26 && estadoDia == "Nubado"){
    console.log("Hay buen clima con nubes")
}else{
    console.log("No está a la temperatura idel para el estado del día")
}