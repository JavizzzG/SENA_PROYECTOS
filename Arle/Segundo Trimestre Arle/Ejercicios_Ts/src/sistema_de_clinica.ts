import * as readlineSync from 'readline-sync'

let patient_array: Patient[] = []
let doctor_array: Doctor[] = []
let appointment_array: Appointment[] = []


class Appointment{
    id_cita: number
    id_doctor: number
    id_paciente: number
    fecha: string
    hora: string
    especialidad_cita: string
    descripcion: string
    

    constructor(id_cita: number, id_doctor: number, id_paciente: number, fecha: string, hora: string, especialidad_cita: string, descripcion: string){
        this.id_cita = id_cita
        this.id_doctor = id_doctor
        this.id_paciente = id_paciente
        this.fecha = fecha
        this.hora = hora
        this.especialidad_cita = especialidad_cita
        this.descripcion = descripcion
    }
}

class Patient {
    id_paciente:  number
    nombre: string
    sexo: string
    fecha_nacimiento: string
    telefono: number

    constructor(id_paciente: number, nombre: string, sexo: string, fecha_nacimiento: string, telefono: number){
        this.id_paciente = id_paciente
        this.nombre = nombre
        this.sexo = sexo
        this.fecha_nacimiento = fecha_nacimiento
        this.telefono = telefono
    }

}

enum estado_doctor{
    disponible = "Disponible",
    no_disponible = "No disponible"
}

class Doctor {
    id_doctor:  number
    nombre: string
    especialidad: string
    telefono: number
    estado: estado_doctor
    

    constructor(id_doctor: number, nombre: string, especialidad: string, telefono: number, estado: estado_doctor){
        this.id_doctor = id_doctor
        this.nombre = nombre
        this.especialidad = especialidad
        this.telefono = telefono
        this.estado = estado
    }
}

function dataCreateDoctor(): Doctor | undefined {
    const id_doctor = readlineSync.questionInt("Ingrese el id del doctor: ")
    const nombre = readlineSync.question("Ingrese el nombre del doctor: ")
    const especialidad = readlineSync.question("Ingrese la especialidad del doctor: ")
    const telefono = readlineSync.questionInt("Ingrese el número de teléfono del doctor: ")
    
    let estado: estado_doctor | undefined
    while(estado == undefined) {
        const estado_dato = readlineSync.keyInSelect(["Disponible", "No disponible"], "Seleccione el estado del doctor: ")
        if(estado_dato == 0){
            estado = estado_doctor.disponible
        }else if(estado_dato == 1){
            estado = estado_doctor.no_disponible
        }else{
            console.log("Opción no válida. Seleccione una opción correcta")
        }
    }

    if(!id_doctor || !nombre || !especialidad || !telefono){
        console.log("Error: Todos los campos son obligatorios.")
        return
    }
    
    if(doctor_array.some(doctor => doctor.id_doctor === id_doctor)){
        console.log("Error: El id del doctor ya existe.")
        return
    }

    const newDoctor = new Doctor(id_doctor, nombre, especialidad, telefono, estado)
    doctor_array.push(newDoctor)
    console.log("Doctor creado exitosamente.")


    return newDoctor
}

function dataCreatePatient(): Patient | undefined {
    const id_paciente = readlineSync.questionInt("Ingrese el id del paciente: ")
    const nombre = readlineSync.question("Ingrese el nombre del paciente: ")

    let sexo: string | undefined
    while(sexo == undefined){
        const sexo_dato = readlineSync.keyInSelect(["Masculino", "Femenino"], "Seleccione el sexo del paciente: ")
        if(sexo_dato == 0){
            sexo = "Masculino"
        }else if(sexo_dato == 1){
            sexo = "Femenino"
        }else{
            console.log("Opción no válida. Seleccione una opción correcta")
        }
    }

    const fecha_nacimiento = readlineSync.question("Ingrese la fecha de nacimiento del paciente: ")
    const telefono = readlineSync.questionInt("Ingrese el número de teléfono del paciente: ")

    if(!id_paciente || !nombre || !sexo || !fecha_nacimiento || !telefono){
        console.log("Error: Todos los campos son obligatorios.")
        return
    }

    if(patient_array.some(patient => patient.id_paciente === id_paciente)){
        console.log("Error: El id del paciente ya existe.")
        return
    }

    const newPatient = new Patient(id_paciente, nombre, sexo, fecha_nacimiento, telefono)
    patient_array.push(newPatient)
    console.log("Paciente creado exitosamente.")


    return newPatient
}

function dataCreateAppointment(): Appointment | undefined {
    const id_cita = appointment_array.length + 1
    const id_doctor = readlineSync.questionInt("Ingrese el id del doctor: ")
    const id_paciente = readlineSync.questionInt("Ingrese el id del paciente: ")
    const fecha = readlineSync.question("Ingrese la fecha de la cita: ")
    const hora = readlineSync.question("Ingrese la hora de la cita: ")
    const especialidad_cita = readlineSync.question("Ingrese la especialidad de la cita: ")
    const descripcion = readlineSync.question("Ingrese la descripción de la cita: ")

    if(!id_cita || !id_doctor || !id_paciente || !fecha || !hora || !especialidad_cita || !descripcion){
        console.log("Error: Todos los campos son obligatorios.")
        return
    }

    if(appointment_array.some(appointment => appointment.id_cita === id_cita)){
        console.log("Error: El id de la cita ya existe.")
        return
    }

    if(!doctor_array.some(doctor => doctor.especialidad === especialidad_cita)){
        console.log("Error: La especialidad no existe o no está disponible.")
        return
    }

    if(!doctor_array.some(doctor => doctor.id_doctor === id_doctor)){
        console.log("Error: El id del doctor no existe.")
        return
    }

    if(doctor_array.some(doctor => doctor.id_doctor === id_doctor && doctor.especialidad !== especialidad_cita)){
        console.log("Error: El doctor no tiene la especialidad requerida.")
        return
    }

    if(doctor_array.some(doctor => doctor.id_doctor === id_doctor && doctor.estado === estado_doctor.no_disponible)){
        console.log("Error: El doctor no está disponible.")
        return
    }

    if(!patient_array.some(patient => patient.id_paciente === id_paciente)){
        console.log("Error: El id del paciente no existe.")
        return
    }

    if(appointment_array.some(appointment => appointment.id_paciente === id_paciente && appointment.fecha === fecha && appointment.hora === hora)){
        console.log("Error: El paciente ya tiene una cita programada para esa fecha y hora.")
        return
    }

    if(appointment_array.some(appointment => appointment.id_doctor === id_doctor && appointment.fecha === fecha && appointment.hora === hora)){
        console.log("Error: El doctor ya tiene una cita programada para esa fecha y hora.")
        return
    }

    const newAppointment = new Appointment(id_cita, id_doctor, id_paciente, fecha, hora, especialidad_cita, descripcion)
    appointment_array.push(newAppointment)
    console.log("Cita creada exitosamente.")
    
    return newAppointment
}

function showAppointments(cita: string = "All", tipo_busqueda: string = "All"): void {
    if(appointment_array.length === 0){
        console.log("No hay citas registradas.")
        return
    }

    if(tipo_busqueda === "All"){
        console.log(`Registro de todas las citas:`)
        appointment_array.forEach(appointment => {
            const doctor = doctor_array.filter(doctor => doctor.id_doctor === appointment.id_doctor)
            const patient = patient_array.filter(patient => patient.id_paciente === appointment.id_paciente)
            console.log(`\nID Cita: ${appointment.id_cita}\nDoctor ${doctor[0].nombre} con CC ${doctor[0].id_doctor}\nID Paciente: ${patient[0].nombre} con CC ${patient[0].id_paciente}\nFecha: ${appointment.fecha}\nHora: ${appointment.hora}\nEspecialidad: ${appointment.especialidad_cita}\nDescripción: ${appointment.descripcion}\n`)
        })
    }else if(tipo_busqueda === "Especialidad"){
        if(!appointment_array.some(appointment => appointment.especialidad_cita == cita)){
            console.log("Error: La especialidad no existe.")
            return
        }
        console.log("Registro de citas por especialidad:")
        appointment_array.forEach(appointment => {
            if(doctor_array.some(doctor => doctor.id_doctor === appointment.id_doctor && doctor.especialidad === cita)){
                const doctor = doctor_array.filter(doctor => doctor.id_doctor === appointment.id_doctor)
                const patient = patient_array.filter(patient => patient.id_paciente === appointment.id_paciente)
                console.log(`\nID Cita: ${appointment.id_cita}\nDoctor ${doctor[0].nombre} con CC ${doctor[0].id_doctor}\nID Paciente: ${patient[0].nombre} con CC ${patient[0].id_paciente}\nFecha: ${appointment.fecha}\nHora: ${appointment.hora}\nEspecialidad: ${appointment.especialidad_cita}\nDescripción: ${appointment.descripcion}\n`)
            }
        })
    }else if(tipo_busqueda === "Fecha"){
        if(!appointment_array.some(appointment => appointment.fecha === cita)){
            console.log("Error: No hay citas registradas para esa fecha.")
            return
        }
        console.log("Registro de citas por fecha:")
        appointment_array.forEach(appointment => {
            if(appointment.fecha === cita){
                const doctor = doctor_array.filter(doctor => doctor.id_doctor === appointment.id_doctor)
                const patient = patient_array.filter(patient => patient.id_paciente === appointment.id_paciente)
                console.log(`\nID Cita: ${appointment.id_cita}\nDoctor ${doctor[0].nombre} con CC ${doctor[0].id_doctor}\nID Paciente: ${patient[0].nombre} con CC ${patient[0].id_paciente}\nFecha: ${appointment.fecha}\nHora: ${appointment.hora}\nEspecialidad: ${appointment.especialidad_cita}\nDescripción: ${appointment.descripcion}\n`)
            }
        })
    }else if(tipo_busqueda === "Paciente"){
        if(!appointment_array.some(appointment => appointment.id_paciente === parseInt(cita))){
            console.log("Error: No hay citas registradas para ese paciente.")
            return
        }
        console.log("Registro de citas por paciente:")
        appointment_array.forEach(appointment => {
            if(appointment.id_paciente === parseInt(cita)){
                const doctor = doctor_array.filter(doctor => doctor.id_doctor === appointment.id_doctor)
                const patient = patient_array.filter(patient => patient.id_paciente === appointment.id_paciente)
                console.log(`\nID Cita: ${appointment.id_cita}\nDoctor ${doctor[0].nombre} con CC ${doctor[0].id_doctor}\nID Paciente: ${patient[0].nombre} con CC ${patient[0].id_paciente}\nFecha: ${appointment.fecha}\nHora: ${appointment.hora}\nEspecialidad: ${appointment.especialidad_cita}\nDescripción: ${appointment.descripcion}\n`)
            }
        })
    }else{
        console.log("Error: Tipo de búsqueda no válida.")
        return
    }
}

let pruebaDoctor = new Doctor(1, "Juan Perez", "Cardiologia", 123456789, estado_doctor.disponible)
doctor_array.push(pruebaDoctor)
pruebaDoctor = new Doctor(2, "Ana Gomez", "Pediatria", 987654321, estado_doctor.disponible)
doctor_array.push(pruebaDoctor)

let pruebaPaciente = new Patient(1, "Maria Lopez", "Femenino", "01/01/1990", 987654321)
patient_array.push(pruebaPaciente)
pruebaPaciente = new Patient(2, "Carlos Sanchez", "Masculino", "01/01/1985", 123456789)
patient_array.push(pruebaPaciente)

let pruebaCita = new Appointment(1, 1, 1, "01/01/2023", "10:00", "Cardiologia", "Chequeo general")
appointment_array.push(pruebaCita)


let activo = true

while(activo){
    const option = readlineSync.keyInSelect(['Crear Doctor', 'Crear Paciente', 'Crear Cita', 'Mostrar Citas'], 'Seleccione una opcion: ')
    switch(option){
        case 0:
            console.log("Crear Doctor")
            dataCreateDoctor()
            console.log(doctor_array)
            break
        case 1:
            console.log("Crear Paciente")
            dataCreatePatient()
            break
        case 2:
            console.log("Crear Cita")
            dataCreateAppointment()
            break
        case 3:
            console.log("Mostrar Citas")
            let tipoBusquedaCita: string | undefined
            while(tipoBusquedaCita == undefined){
                let keySelectTipoCita = readlineSync.keyInSelect(['Todas', 'Por Especialidad', 'Por Fecha', 'Por Paciente'], 'Seleccione el tipo de búsqueda: ') 
                if(keySelectTipoCita == 0){
                    tipoBusquedaCita = "All"
                }else if(keySelectTipoCita == 1){
                    tipoBusquedaCita = "Especialidad"
                }else if(keySelectTipoCita == 2){
                    tipoBusquedaCita = "Fecha"
                }else if(keySelectTipoCita == 3){
                    tipoBusquedaCita = "Paciente"
                }else{
                    console.log("Opción no válida. Seleccione una opción correcta")
                }
            }
            if(tipoBusquedaCita === "All"){
                showAppointments()
            }else{
                const cita = readlineSync.question(`Ingrese el dato de búsqueda por ${tipoBusquedaCita}: `)
                showAppointments(cita, tipoBusquedaCita)    
            }
            break
        default:
            console.log("Opción no válida.")
            activo = false
            break
    }
}

console.log(doctor_array)
console.log(patient_array)
console.log(appointment_array)
