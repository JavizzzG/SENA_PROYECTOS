let activo = true
class User {
    constructor({name, last_name, email, role}){
        this.name = name
        this.last_name = last_name
        this.email = email
        this.role = role
        this.mensajes = []
    }

    addCourse({course, level}){
        this[course] = {name: course, level: level}
        console.log(`Se añadió el curso ${course} con nivel ${level}`)
    }

    delCourse(course){
        if(this[course]){
            delete this[course]
            console.log(`Se eliminó el curso ${course}`)
        }else{
            console.log("The course doesn't exist")
        }
    }

    setCourse({course, level}){
        if(this[course]){
            this[course].level = level
            console.log(`Se cambió el nivel del curso ${course} a ${level}`)
        }else{
            console.log("The course doesn't exist")
        }
    }

    sendEmail({to, message}){
        if(to.name){
            let mensaje = `De ${this.name}.
                    Para ${to.name}.
                    Mensaje: ${message}`

                to.mensajes.push(mensaje)
                console.log("Se envió correctamente el siguiente mensaje")
                console.log(mensaje)
            }else{
                console.log("The user doesn't exist")
            }
    }

    seeMessageHistory(){
        for(let i = 0; i < this.mensajes.length; i++){
            console.log("Los mensajes del usuario son:")
            console.log(this.mensajes[i])
        }
    }
}

class Student extends User {
    constructor({name, last_name, email, role}){
        super({name, last_name, email, role})
    }
}

class Teacher extends User {
    constructor({name, last_name, email, role}){
        super({name, last_name, email, role})
    }
}

let Javier = new Student({name: "Javier", last_name: "Galvis", email: "nolovoyaponer@gmail.com", role: "student"})
let Fajis = new Teacher({name: "Fajis", last_name: "Fajardo", email: "nolovoyaponerFajis@gmail.com", role: "teacher"})

while(activo){
    let elegir = Number(prompt(`Elige una opción
        1: Añadir curso
        2: Eliminar curso
        3: Cambiar nivel de curso
        4: Enviar mensaje
        5: Ver historial de mensajes
        6: Salir`))

    switch(elegir){
        case 1:
            Javier.addCourse({course: "Matematicas", level: 4})
            Javier.addCourse({course: "Fisica", level: 3})
            break
        case 2:
            Javier.delCourse("Fisica")
            Javier.delCourse("Biologia")
            break
        case 3:
            Javier.setCourse({course: "Matematicas", level: 5})
            Javier.setCourse({course: "Fisica", level: 2})
            Javier.setCourse({course: "Biologia", level: 2})
            break
        case 4:
            Javier.sendEmail({to: Fajis, message: "Eo fajis, el negro"})
            Fajis.sendEmail({to: Javier, message: "Se supone que no existe"})
            break
        case 5:
            Javier.seeMessageHistory()
            Fajis.seeMessageHistory()
            break
        case 6:
            activo = false
            console.log("Ejecución finalzada")
            break
        default :
            console.log("Error, elija una opción válida")
    }
}

console.log(Javier.constructor.name)
console.log(Fajis.constructor.name)