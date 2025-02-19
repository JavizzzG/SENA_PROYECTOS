let pensionada = true
const edad = 99

if(pensionada){
    if(edad >= 40 && edad <= 80){
        console.log("Una buena pensionada")
    }else if(edad < 40){
        console.log("No es una pensionada")
    }else{
        console.log("Ya no aguanta")
    }
}else{
    console.log("No es una pensionada")
}