let encendido = true
let cola = []

let registrarCliente = (n) => {
    if(cola.length < 7){
        cola.push(n)
        return "Cliente registrado correctamente en la cola"
    }else{
        return "La cola se encuentra llena, intente más tarde"
    }
}

let atenderCliente = () => {
    if(cola.length > 0){
        let atendiendo = cola.shift()
        return "Atendiendo a " + atendiendo
    }else{
        return "No hay clientes en la cola"
    }
}


while(encendido){
    let elegir = Number(prompt("Registrar cliente a la cola (1) \nAtender cliente (2) \nSalir (3)"))

    switch(elegir){
        case 1:
            let nombre = prompt("Ingrese su nombre")
            if(nombre.length > 0){
            alert(registrarCliente(nombre))
            }else{
                alert("Debe ingresar un nombre")
            }
        break

        case 2:
            alert(atenderCliente())
        break

        case 3:
            encendido = false
            window.location.href = "index.html"
        break

        default :
            alert("Ha ocurrido un error, intente de nuevo")
    }
}
