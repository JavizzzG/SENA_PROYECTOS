let estadoSemaforo = true
estadoSemaforo = confirm ("¿Desea encender el semáforo?)")
let colorSemaforo = "amarilloasd"

if(estadoSemaforo == true){
a = colorSemaforo == "verde" ? "continúe" : colorSemaforo == "rojo" ? "parar" : colorSemaforo == "amarillo" ? "prepararse" : "está dañado"

console.log(a)

}else{
    console.log("el semáforo está apagado")
}
