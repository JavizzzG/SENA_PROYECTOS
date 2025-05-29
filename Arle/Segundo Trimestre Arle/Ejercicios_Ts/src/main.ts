import * as readlineSync from 'readline-sync'

interface BaseObject{
    id: number
}

interface Product extends BaseObject{
    name: string
    price: number
    description?: string
}

// Interfaces de vehiculos
interface Vehicle extends Product{
    model: string
    year: number
    color: string
}

interface Car extends Vehicle{
    mark: string
    seats: number
    hp: number
}

interface Motorcycle extends Vehicle{
    mark: string
    hp: number
}


// Interfaces de usuarios

interface User extends BaseObject{
    name: string
    age: number
}

interface Admin extends User{
    cargo?: string
}


// SECCIÓN DE GUARDADO DE DATOS

let objects: newVehicle[] = []
let users: NewUser[] = []


//Sección de creación de clases

class NewUser implements User{
    id: number
    name!: string
    age!: number
    cargo?: string
    
    constructor(name: string, age: number, cargo?: string){
        this.id = users.length + 1
        if(cargo){
            this.newUserSet(name, age, cargo)
        }else{
            this.newUserSet(name, age)
        }
        
        
    }

    newUserSet(name: string, age: number): void;
    newUserSet(name: string, age: number, cargo: string): void;
    newUserSet(name: string, age: number, cargo?: string): void{
        if(cargo !== undefined){
            this.cargo = cargo
        }
        this.name = name
        this.age = age
    }
}



//Clase de creación de nuevo producto
class newVehicle implements Vehicle{
    id: number
    type: string
    name!: string
    price!: number
    model!: string
    year!: number
    color!: string
    mark!: string
    hp!: number
    description: string | undefined
    seats?: number

    constructor(type: string, name: string, price: number, model: string, year: number, color: string, mark: string, hp: number, description: string, seats?: number) {
        this.id = objects.length + 1
        this.type = type
        if(seats){
            this.newVehicleSet(name, price, model, year, color, mark, hp, description, seats)
        }else{
            this.newVehicleSet(name, price, model, year, color, mark, hp, description)
        }
    }
    newVehicleSet(name: string, price: number, model: string, year: number, color: string, mark: string, hp: number, description: string): void;
    newVehicleSet(name: string, price: number, model: string, year: number, color: string, mark: string, hp: number, description: string, seats: number): void;
    newVehicleSet(name: string, price: number, model: string, year: number, color: string, mark: string, hp: number, description: string, seats?: number): void {
        if(seats){
            this.seats = seats
        }
        this.name = name
        this.price = price
        this.model = model
        this.year = year
        this.color = color
        this.mark = mark
        this.hp = hp
        this.description = description
    }
}


const vehicle = new newVehicle("Motorcycle", "Kia Karens", 50000, "suv", 2016, "gris", "Kia", 500, "Es un vehiculo de lujo")
objects.push(vehicle)
const vehicle2 = new newVehicle("Car", "Jac no se que", 70000, "mac", 2020, "rojo", "Jac", 700, "Es un vehiculo de lujo", 5)
objects.push(vehicle2)

const user = new NewUser("Juan Perez", 30, "Admin")
users.push(user)
const user2 = new NewUser("Maria Lopez", 25)
users.push(user2)



//Sección de interación y uso del sistema
    let activo: boolean = true
    while(activo){
        const option = readlineSync.keyInSelect(["Add new vehicle", "List all vehicles", "Add new user", "List all users", "Exit"], "Select an option:")
        switch(option){
            case 0:
                let type: number | string
                type = readlineSync.keyInSelect(["Car", "Motorcycle"], "Select a type of vehicle:")
                const name = readlineSync.question("Enter the name of the vehicle: ")
                const price = readlineSync.questionInt("Enter the price of the vehicle: ")
                const model = readlineSync.question("Enter the model of the vehicle: ")
                const year = readlineSync.questionInt("Enter the year of the vehicle: ")
                const color = readlineSync.question("Enter the color of the vehicle: ")
                const mark = readlineSync.question("Enter the mark of the vehicle: ")
                const hp = readlineSync.questionInt("Enter the horsepower of the vehicle: ")
                const description = readlineSync.question("Enter the description of the vehicle: ")
                let seats: number = 0
                if(type === 0){
                    seats = readlineSync.questionInt("Enter the number of seats of the vehicle: ")
                }

                if(type === 0 && seats <= 0){
                    console.log("Please fill the number of seats")
                    break
                }

                if(type == 0){
                    type = "Car"
                }else{
                    type = "Motorcycle"
                }

                if(!type || !name || !price || !model || !year || !color || !mark || !hp){
                    console.log("Please fill all the fields")
                    break
                }

                if(seats > 0){
                    const vehicle = new newVehicle(type, name, price, model, year, color, mark, hp, description, seats)
                    objects.push(vehicle)
                    console.log("Vehicle added successfully")
                    break
                }
                
                const vehicle = new newVehicle(type, name, price, model, year, color, mark, hp, description)
                objects.push(vehicle)

                console.log("Vehicle added successfully")
                break
            
            case 1:
                console.log("List of vehicles:")
                objects.forEach( v => {
                    console.log(`Type: ${v.type}\n Name: ${v.name}\n Price: ${v.price}\n Model: ${v.model}\n Year: ${v.year}\n Color: ${v.color}\n Mark: ${v.mark}\n ${!v.seats ? '': v.seats > 0 ? 'Seats: '+v.seats+'\n' :'' } HP: ${v.hp}\n Description: ${v.description != undefined ? v.description : 'Sin descripcion'}\n`)
                })
                break
            
            case 2:
                const nameUser = readlineSync.question("Enter the name of the user: ")
                const ageUser = readlineSync.questionInt("Enter the age of the user: ")
                let cargoUser: string | undefined = readlineSync.question("Enter the cargo of the user (optional): ")
                if(cargoUser === ""){
                    cargoUser = undefined
                }

                if(!nameUser || !ageUser){
                    console.log("Please fill all the fields")
                    break
                }

                if(cargoUser !== undefined){
                    const user = new NewUser(nameUser, ageUser, cargoUser)
                    users.push(user)
                    console.log("User added successfully")
                    break
                }

                const user = new NewUser(nameUser, ageUser)
                users.push(user)
                console.log("User added successfully")
            
                break

            case 3:
                console.log("List of users:")
                users.forEach( u => {
                    console.log(`ID: ${u.id}\n Name: ${u.name}\n Age: ${u.age}\n Cargo: ${u.cargo != undefined ? u.cargo : 'Sin cargo'}\n`)
                })
                break

            case 4:
                console.log("Exiting the system...")
                activo = false
                break

            default:
                console.log("Choose a valid option")
                break
        }
    }





//Sección de pruebas





