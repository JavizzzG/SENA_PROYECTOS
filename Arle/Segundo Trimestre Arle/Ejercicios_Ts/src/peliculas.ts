import * as readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let peliculas: CrearPelicula[] = []


abstract class InfoPelicula{
    protected abstract id: number
    abstract titulo: string
    abstract duracion: number
    abstract director: string
    abstract categoria: string
    abstract filtrarCategoria(name: string): void
}


class CrearPelicula extends InfoPelicula{
    protected id: number
    titulo: string
    duracion: number
    director: string
    categoria: string

    constructor(id: number, titulo: string, duracion: number, director: string, categoria: string){
        super()
        this.id = id
        this.titulo = titulo
        this.duracion = duracion
        this.director = director
        this.categoria = categoria
    }

    filtrarTitulo(name: string): void{
        const filtradas = peliculas.filter(d => d.titulo == name)
        if(filtradas.length > 0){
            console.log(`Peliculas relacionadas con: ${name}\n\n`)
            filtradas.forEach(d => {
                console.log(`Nombre: ${d.titulo}\nDuracion: ${d.duracion}\nDirector: ${d.director}\nCategoria: ${d.categoria}`)
            })
        }else{
            console.log("No hay peliculas con ese título")
        }
    }

    filtrarDirector(name: string): void{
        const filtradas = peliculas.filter(d => d.director == name)
        if(filtradas.length > 0){
            console.log(`Peliculas dirigidas por: ${name}\n\n`)
            filtradas.forEach(d => {
                console.log(`Nombre: ${d.titulo}\nDuracion: ${d.duracion}\nDirector: ${d.director}\nCategoria: ${d.categoria}`)
            })
        }else{
            console.log("No hay peliculas dirigidas por ese director")
        }
    }

    filtrarCategoria(name: string): void{
        const filtradas = peliculas.filter(d => d.categoria == name)
        if(filtradas.length > 0){
            console.log(`Peliculas de la categoria: ${name}\n\n`)
            filtradas.forEach(d => {
                console.log(`Nombre: ${d.titulo}\nDuracion: ${d.duracion}\nDirector: ${d.director}\nCategoria: ${d.categoria}`)
            })
        }else{
            console.log("No hay peliculas de esa categoria")
        }
    }
}

function preguntar(pregunta: string): Promise<string>{
    return(new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => resolve(respuesta))
    })
)
}

//Pruebas
peliculas.push(new CrearPelicula(peliculas.length + 1, "Cars", 90, "John Lasseter", "Animacion"))
peliculas.push(new CrearPelicula(peliculas.length + 1, "Titanic", 195, "James Cameron", "Drama"))

//Fin pruebas


async function activar(){
    let activo = true
    while(activo){
        const option = Number(await preguntar(`
            1. Crear pelicula
            2. Filtrar pelicula por titulo
            3. Filtrar pelicula por director
            4. Filtrar pelicula por categoria
            5. Salir

            Seleccione una opcion:  `))
        switch(option){
            case 1:
                const name = await preguntar("\nIngrese el nombre de la pelicula:  ")
                const duration = Number(await preguntar("\nIngrese la duracion de la pelicula(en minutos):  "))
                const director = await preguntar("\nIngrese el director de la pelicula:  ")
                const category = await preguntar("\nIngrese la categoria de la pelicula:  ")
                peliculas.push(new CrearPelicula(peliculas.length + 1, name, duration, director, category))
                console.log("Pelicula creada con exito")
                break
            case 2:
                const title = await preguntar("\nIngrese el titulo de la pelicula: ")
                peliculas[0].filtrarTitulo(title)
                break
            case 3:
                const directorName = await preguntar("\nIngrese el nombre del director: ")
                peliculas[0].filtrarDirector(directorName)
                break
            case 4:
                const categoria = await preguntar("\nIngrese la categoría que desea buscar: ")
                peliculas[0].filtrarCategoria(categoria)
                break
            case 5:
                activo = false
                console.log("Cerrando programa...")
                break
            default:
                console.log("Opcion invalida")
                break
        }
    }
    rl.close()
}

activar()