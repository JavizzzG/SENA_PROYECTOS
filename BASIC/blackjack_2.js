let nj1 = 0
let nj2 = 0
let currentJ = 1
let plantadoJ1 = false
let plantadoJ2 = false



function nrandom(){
    if(currentJ === 1 && plantadoJ1 || currentJ === 2 && plantadoJ2){
        console.log("EL JUGADOR "+currentJ+" HA DECIDIDO PLANTARSE")
        currentJ = 3 - currentJ
        return
    }
    const nr = Math.floor(Math.random()*10)+1

    if(currentJ === 1){
        nj1 += nr
    
        console.log("El jugador 1 lleva "+nj1+" puntos en total")
    }else{
        nj2 += nr
    
        console.log("El jugador 2 lleva "+nj2+" puntos en total")
    }

    if(confirm("¿Jugador "+currentJ+" desea plantarse?")){
        if(currentJ === 1){
            plantadoJ1 = true
        }else{
            plantadoJ2 = true
        }
    }
    
    if(currentJ === 1 && !plantadoJ1 || currentJ === 2 && !plantadoJ2){
        currentJ = 3 - currentJ
    }

    if(nj1 > 21 || nj2 > 21 || (plantadoJ1 && plantadoJ2)){
        finDelJuego()
    }
}

function finDelJuego(){
    if(nj1 > 21 && nj2 > 21){
        console.log("Los dos jugaores se han pasado de 21. Es empate")
    }else if(nj1 > 21){
        console.log("El jugador 2 gana la partida")
    }else if(nj2 > 21){
        console.log("El jugador 1 gana la partida")
    }else if(nj1 > nj2){
        console.log("El jugador 1 gana la partida")
    }else if(nj2 > nj1){
        console.log("El jugador 2 gana la partida")
    }else{
        console.log("Hay empate")
    }

    nj1 = 0
    nj2 = 0
    currentJ = 1
    plantadoJ1 = false
    plantadoJ2 = false

    console.log("NUEVA PARTIDA")

}


const jugador1 = document.getElementById("jugador1")
const jugador2 = document.getElementById("jugador2")

jugador1.addEventListener("click", nrandom)
jugador2.addEventListener("click", nrandom)


