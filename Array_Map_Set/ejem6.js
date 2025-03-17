let encendido = true
let miembros = new Set([5001, 5002, 5003])

while(encendido){
    let elegir = Number(prompt("Verificar si un miembro existe (1) o Salir (2)"))
    switch(elegir){
        case 1:
            let codigo = Number(prompt("Ingrese el código del miembro para verificar si puede ingresar"))
            if(codigo > 0){
                let verificar = miembros.has(codigo)
                if(verificar == true){
                    alert("Ya existe un miembro con ese código")
                }else{
                    miembros.add(codigo)
                    alert("Se ha agregado coreectamente el código "+codigo)
                }
            }else{
                alert("Ingrese un código válido")
            }
        break

        case 2:
            encendido = false
            window.location.href = "index.html"
        break

        default : 
            alert("Ha ocurrido un error")
        break
    }
}