class User {
    #first_name
    #last_name
    #email
    constructor({first_name, last_name, email}){
        this.setInfo({first_name, last_name, email})
        console.log("Usuario creado")
    }

    getInfo(){
        let first_name = this.#first_name
        let last_name = this.#last_name
        let email = this.#email
        return `Your info is:
        Name: ${first_name}
        Last Name: ${last_name}
        Email: ${email}`
    }

    setInfo({first_name, last_name, email}){
        if(this.tryNameLastEmail(first_name, last_name, email)){
        this.#first_name = first_name
        this.#last_name = last_name
        this.#email = email
        console.log("Info actualizada")
        }else{
            console.log("Error al intentar actualizar la información")
        }
    }
}

User.prototype.tryNameLastEmail = function(first_name, last_name, email){
    if(/^[A-Z][a-z]+$/.test(first_name) && /^[A-Z][a-z]+$/.test(last_name)){
        if(/[0-9]/.test(email) == false && /[@]/.test(email) == true){
            return true
        }else{
            console.log("Email no válido")
            return false
        }
    }else{
        console.log("Nombre o apellido no válidos")
        return false
    }
}

let user1 = new User({first_name: "Javier", last_name: "Galvis", email: "nolovoyaponer@gmail.com"})
let user2 = new User({first_name: "Javier", last_name: "Galvis", email: "nolovoyaponer@gmail.com"})
//console.log(user1.getInfo())
console.log(user1.setInfo({first_name: "Santiago", last_name: "Fajardo", email: "buenas@gmail.com"}))
console.log(user1.getInfo())