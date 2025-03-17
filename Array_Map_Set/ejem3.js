let encendido = true
let usuarios = new Map([
    [1, "Mauricio"],
    [2, "Abigaíl"]
])
let i = 3

let insertUser = (n) => {
    usuarios.set(i, n)
    i++
    return "Usuario ingresado correctamente"
}

let mostrarUsers = () => {
    let mostrar = "Los usuarios registrados son : \n"
    for(let [code, value] of usuarios){
        mostrar += `ID ${code}: ${value}\n`
    }
    return mostrar
}

while(encendido){
    let elegir = Number(prompt("Añadir nuevo usuario (1), Ver usuarios (2) o Salir (3)"))
    switch(elegir){
        case 1:
            let nombre = prompt("Ingrese el nombre del usuario que desea insertar")
            if(nombre.length > 1){
                alert(insertUser(nombre))
            }else{
                alert("Ingrese un nombre válido")
            }
        break

        case 2:
            alert(mostrarUsers())
        break

        case 3:
            encendido = false
            window.location.href = "index.html"
        break

        default : 
            alert("Ha ocurrido un error")
        break
    }
}