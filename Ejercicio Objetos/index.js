let activo = true //Ejecuta el primer while, el principal
//Objetos ------------------------------------------------------------------
let jugador = {
    status: {
        vida: 20,
        hambre: 20,
        daño: 2
    },
    inventario: {
    },
    armadura: {
        casco: 0,
        pechera: 0,
        pantalon: 0,
        botas: 0
    }
}

let mobs = {
    hostiles: {
        araña: {
            daño: 1,
            vida: 3
        },
        esqueleto: {
            daño: 3,
            vida: 5
        },
        zombie: {
            daño: 2,
            vida: 6
        },
        dragon : {
            "daño minimo" : 2,
            "daño normal" : 4,
            "daño maximo" : 8,
            "daño esquivado" : 0,
            get dañoDragon(){
                let num = random()
                return num >= 90 ? this["daño esquivado"] : num >= 50 ? this["daño normal"] : num >= 20 ? this["daño maximo"] : this["daño minimo"]
            },
            vida : 50
        }
    },
    pacifico: {
        oveja: {
            vida: 3,
            comida: 4
        },
        vaca: {
            vida: 4,
            comida: 4
        },
        cerdo: {
            vida: 3,
            comida: 4
        }
    }
}

let materiales = {
    recursos: {
        madera: {
            resistencia: 4
        }
    },
    menas: {
        oro: {
            cantidad : 1
        },
        hierro: {
            cantidad : 1
        },
        diamante: {
            cantidad : 1
        }
    }
}

let estructuras = {
    aldea: {
        perla: 1,
        espada: 5
    },
    mina: {
        ...materiales.menas
    },
    portalEnd: {
        perla: 3
    }
}

//Fin objetos -------------------------------------------------------------------

// funcion numero aleatorio

function random() {
    return Math.floor(Math.random() * 100) + 1
}

// funcion para saber si ese objetoo existe

function verExistencia(objeto) {
    if(!jugador.inventario[objeto]){
        jugador.inventario[objeto] = 0
    }
    return
}

//Inicio funciones de generación ------------------------------------------------------------------------------

function generarEstructura() {
    let num = random()
    if (num <= 5) {
        alert(`Apareció un Portal`)
        let actuar = Number(prompt("Desea entrar 1, ignorar 2"))
        if(actuar == 1){
            verExistencia("perla")
            if(jugador.inventario.perla >= 3){
                actuar = confirm(`Estas seguro que quieres entrar con ${jugador.status.vida} de vida y los siguiente items en el inventario?:\n${verInventario()}`)
                if(!actuar){
                    window.location.href = "inicio.html"
                }
                jugador.inventario.perla -= 3
                alert("Has entrado al End, Preparate para la pelea")
                alert(`La vida del dragón es ${mobs.hostiles.dragon.vida}\nTu vida es ${vidaTotal}`)
                activo = false
                while(mobs.hostiles.dragon.vida > 0 && vidaTotal > 0){
                    let decision = Number(prompt("Quiere atacarlo 1, Quiere alimentarse 2"))
                    if(decision === 1){
                        vidaTotal -= mobs.hostiles.dragon.dañoDragon
                        if(vidaTotal > 0){
                            mobs.hostiles.dragon.vida -= jugador.status.daño
                            if(mobs.hostiles.dragon.vida > 0){
                                alert(`Vida restante del jugador ${vidaTotal}`)
                                alert(`Vida restante del dragon ${mobs.hostiles.dragon.vida}`)
                            }else{
                                alert(`Vida restante del jugador ${vidaTotal}`)
                                alert("Dragon muerto")
                                alert("Ganaste el juego")
                                activo = false
                                window.location.href = "index.html"
                            }
                        }else{
                            alert("Jugador muerto")
                            activo = false
                            window.location.href = "index.html"
                        }
                    }else if(decision === 2){
                        alimentarse()
                    }else{
                        alert("Elija una opcion correcta")
                    }
                }
            }else{
                alert("Perlas insuficientes")
            }
        }else{
            window.location.href = "inicio.html"
        }
    }else if(num <= 30){
        alert(`Apareció una aldea`)
        let actuar = Number(prompt("Desea saquear 1, ignorar 2"))
        if(actuar < 1 || actuar > 2){
            alert("Seleccione la opcion correcta")
            actuar = Number(prompt("Desea picar 1, ignorar 2"))
        }
        if(actuar == 1){
            let num = random()
            if(num > 85){
                verExistencia("perla")
                jugador.inventario.perla += estructuras.aldea.perla
                alert(`Obtuviste una perla y ahora tienes ${jugador.inventario.perla} perlas`)
            }else if(num > 60){
                if(!jugador.inventario.espada){
                    verExistencia("espada")
                    jugador.inventario.espada += estructuras.aldea.espada
                    jugador.status.daño += jugador.inventario.espada
                    alert(`Obtuviste una espada y ahora tienes ${jugador.inventario.espada} daño adicional`)
                }else{
                    alert("Ya tienes una espada en tu inventario")
                }
            }else if(num >40){
                if(jugador.armadura.casco === 0){
                    jugador.armadura.casco += 5
                    jugador.armadura.pechera += 5
                    jugador.armadura.pantalon += 5
                    jugador.armadura.botas += 5
                    vidaTotal = vidaEstatica()
                    alert("Armadura agregada correctamente")
                }else{
                    alert("Ya tienes armadura")
                }
            }else{
                alert("No se encontró nada")
            }
        }
    }else{
        alert(`Apareció una mina`)
        let actuar = Number(prompt("Desea picar 1, ignorar 2"))
        if(actuar < 1 || actuar > 2){
            alert("Seleccione la opcion correcta")
            actuar = Number(prompt("Desea picar 1, ignorar 2"))
        }
        if(actuar === 1){
            let decision = Number(prompt("Desea picar Oro 1, Desea picar Hierro 2, Desea picar Diamante 3"))
            if(decision === 1){
                verExistencia("oro")
                jugador.inventario.oro += materiales.menas.oro.cantidad
                alert("Usted ha obtenido Oro")
            } 
            else if(decision === 2){
                verExistencia("hierro")
                jugador.inventario.hierro += materiales.menas.hierro.cantidad
                alert("Usted ha obtenido Hierro")
            }
            else if(decision === 3){
                verExistencia("diamante")
                jugador.inventario.diamante += materiales.menas.diamante.cantidad
                alert("usted ha obtenido Diamante")
            }
        }else if(actuar === 2){
            window.location.href = "inicio.html"
        }
    }
}

function generarMob() {
    let num = random()
    if (num < 60) {
        let num = random()
        if (num < 40) {
            alert(`Apareció una oveja`)
            let decision = Number(prompt("Quiere matarla 1, Quiero ignorarla 2."))
            if(decision === 1){
                verExistencia("comida")
                jugador.inventario.comida += mobs.pacifico.oveja.comida
                alert("Ha recibido comida")
            }else{
                window.location.href = "inicio.html"
            }
        } else if (num < 70) {
            alert(`Apareció una vaca`)
            let decision = Number(prompt("Quiere matarla 1, Quiere ignorarla 2."))
            if(decision === 1){
                verExistencia("comida")
                jugador.inventario.comida += mobs.pacifico.vaca.comida
                alert("Ha recibido comida")
            }else{
                window.location.href = "inicio.html"
            }
        } else {
            alert(`Apareció un cerdo`)
            let decision = Number(prompt("Quiere matarla 1, Quiere ignorarla 2."))
            if(decision === 1){
                verExistencia("comida")
                jugador.inventario.comida += mobs.pacifico.cerdo.comida
                alert("Ha recibido comida")
            }else{
                window.location.href = "inicio.html"
            }
        }
    } else {
        let num = random()
        if (num < 40) {
            alert(`Apareció una araña`)
            let decision = Number(prompt("Quiere matarla 1, Quiere ignorarla 2."))
            if(decision === 1){
                while(decision === 1){
                    vidaTotal -= mobs.hostiles.araña.daño
                    if(vidaTotal > 0){
                        mobs.hostiles.araña.vida -= jugador.status.daño
                        if(mobs.hostiles.araña.vida <= 0){
                            alert(`Vida restante del jugador ${vidaTotal}`)
                            alert("Araña muerta")
                            mobs.hostiles.araña.vida = 3
                            decision = 2
                        }else{
                            alert(`Vida restante del jugador ${vidaTotal}`)
                            do{
                                decision = Number(prompt("Quiere volver a pegar 1, Quiere huir 2, Quiere alimentarse 3."))
                                if(decision < 1 || decision > 3){
                                    alert("Elija una opcion correcta")
                                    decision = Number(prompt("Quiere volver a pegar 1, Quiere huir 2, Quiere alimentarse 3."))
                                }
                                if(decision == 3){
                                    alimentarse()
                                }
                            }while(decision == 3)
                        }
                    }else{
                        alert("Jugador muerto")
                        decision = 2
                        activo = false
                        window.location.href = "index.html"
                    }
                }
            }else{
                mobs.hostiles.araña.vida = 3
                window.location.href = "inicio.html"
            }
        } else if (num < 70) {
            alert(`Apareció un esqueleto`)
            let decision = Number(prompt("Quiere matarl0 1, Quiere ignorarlo 2."))
            if(decision === 1){
                while(decision === 1){
                    vidaTotal -= mobs.hostiles.esqueleto.daño
                    if(vidaTotal> 0){
                        mobs.hostiles.esqueleto.vida -= jugador.status.daño
                        if(mobs.hostiles.esqueleto.vida <= 0){
                            alert(`Vida restante del jugador ${vidaTotal}`)
                            alert("Esqueleto muerto")
                            mobs.hostiles.esqueleto.vida = 5
                            decision = 2
                        }else{
                            alert(`Vida restante del jugador ${vidaTotal}`)
                            do{
                                decision = Number(prompt("Quiere volver a pegar 1, Quiere huir 2, Quiere alimentarse 3."))
                                if(decision < 1 || decision > 3){
                                    alert("Elija una opcion correcta")
                                    decision = Number(prompt("Quiere volver a pegar 1, Quiere huir 2, Quiere alimentarse 3."))
                                }
                                if(decision == 3){
                                    alimentarse()
                                }
                            }while(decision == 3)
                        }
                    }else{
                        alert("Jugador muerto")
                        decision = 2
                        activo = false
                        window.location.href = "index.html"
                    }
                }
            }else{
                mobs.hostiles.esqueleto.vida = 5
                window.location.href = "inicio.html"
            }
        } else {
            alert(`Apareció un zombie`)
            let decision = Number(prompt("Quiere matarlo 1, Quiere ignorarlo 2."))
            if(decision === 1){
                while(decision === 1){
                    vidaTotal -= mobs.hostiles.zombie.daño
                    if(vidaTotal > 0){
                        mobs.hostiles.zombie.vida -= jugador.status.daño
                        if(mobs.hostiles.zombie.vida <= 0){
                            alert(`Vida restante del jugador ${vidaTotal}`)
                            alert("Zombie muerto")
                            mobs.hostiles.zombie.vida = 6
                            decision = 2
                        }else{
                            alert(`Vida restante del jugador ${vidaTotal}`)
                            do{
                                decision = Number(prompt("Quiere volver a pegar 1, Quiere huir 2, Quiere alimentarse 3."))
                                if(decision < 1 || decision > 3){
                                    alert("Elija una opcion correcta")
                                    decision = Number(prompt("Quiere volver a pegar 1, Quiere huir 2, Quiere alimentarse 3."))
                                }
                                if(decision == 3){
                                    alimentarse()
                                }
                            }while(decision == 3)
                        }
                    }else{
                        alert("Jugador muerto")
                        decision = 2
                        activo = false
                        window.location.href = "index.html"
                    }
                }
            }else{
                mobs.hostiles.zombie.vida = 6
                window.location.href = "inicio.html"
            }
        }
    }
}
//FIn funciones generar ----------------------------------------------------------------------------------------------------

//Funciones adicionales -----------------------------------------------------------------------------------------------------
/*function picarEstrucutra(direccion) {
    if (direccion.x == 10 && direccion.y == 10) {
        let decision = prompt("Desea picar la madera?")
        if (decision == "si") {
            let inventario = {...estructuras.materiales.madera}
        } else {
            alert("puede seguir avanzando")
        }
    }
}
*/



function moverPersonaje() {
    let numero = random()
    if (numero < 70) {
        generarMob()
    } else {
        generarEstructura()
    }
}

function verInventario (){
    let mensaje = ""
    for(let cosas in jugador.inventario){
        mensaje += `${cosas} : ${jugador.inventario[cosas]}\n`
    }
    return mensaje
}

function vidaEstatica (){
    jugador.status.vida = 20
    for(let cosa in jugador.armadura){
        jugador.status.vida += jugador.armadura[cosa]
    }
    return jugador.status.vida
}



function alimentarse(){
    verExistencia("comida")
    if(jugador.inventario.comida >= 4){
        if(vidaTotal < vidaEstatica()){
            vidaTotal += 4
            jugador.inventario.comida -= 4
            alert(`Has recuperdao 4 de vida. Ahora tienes:\n${vidaTotal} vida\n${jugador.inventario.comida} comida`)
        }else{
            alert("Tienes toda la vida")
        }
    }else{
        alert("deberas obtener mas comida")
    }
}

let vidaTotal = vidaEstatica()




//While principal --------------------------------------------------------------------------------------------------

while(activo){
    let hacerAlgo = Number(prompt("Moverse 1, Interactuar inventario 2, Comer 3, salir 4"))
    switch (hacerAlgo) {
        case 1:
            moverPersonaje()
            break
        case 2:
            alert(verInventario())
            break
        case 3:
            alimentarse()
            break
        case 4:
            activo = false
            window.location.href = "index.html"
            break
        default :
        break
    }
}
