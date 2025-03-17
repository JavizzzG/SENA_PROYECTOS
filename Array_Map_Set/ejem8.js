let encendido = true
let proyectos = [
    new Map([["nombre", "Poyecto A"], ["presupuesto", 5000]]),
    new Map([["nombre", "Poyecto B"], ["presupuesto", 8000]])
]

let ingresarProyectos = (n, pr) => {
    proyectos.push(new Map([["nombre", n], ["presupuesto", pr]]))
    return "Proyecto agregado"
}

let mostrarProyectos = () => {
    let mostrar = "Los proyectos actuales son : \n"
    for(let i = 0; i < proyectos.length; i++){
        mostrar += `Nombre: ${proyectos[i].get("nombre")}, Presupuesto: $${proyectos[i].get("presupuesto")} \n`
    }
    return mostrar
} 


while(encendido){
    let elegir = Number(prompt("Agregar nuevo proyecto (1), Ver proyectos (2), Salir (3)"))
    switch(elegir){
        case 1:
            let nombre = prompt("Ingrese el nombre del proyecto")
            let presupuesto = Number(prompt("Ingrese el presupuesto del proyecto"))
            if(nombre.length > 0 && presupuesto > 0){
                alert(ingresarProyectos(nombre, presupuesto))
            }else{
                alert("Ha ocurrido un error, intente de nuevo")
            }
        break

        case 2:
            alert(mostrarProyectos())
        break

        case 3:
            encendido = false
            window.location.href = "index.html"
        break

        default:
            alert("Ha ocurrido un error, intente de nuevo")


    }   
}