let encendido = true
let usuarios = new Map([
    [101, "Carlos"],
    [102, "María"],
    [103, "José"]
])

let verificarUser = (c) => {
    for(let [code, nombre] of usuarios){
        if(c == code){
            return `Usuario existente, Bienvenido ${nombre}`
        }
    }
    return "El usuario no existe. No puede ingresar"
}

while(encendido){
    let elegir = Number(prompt("Verificar si usuario existe (1) o Salir (2)"))
    switch(elegir){
        case 1:
            let codigo = prompt("Ingrese el código del usuario para verificar su existencia")
            if(codigo.length > 0){
                alert(verificarUser(codigo))
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