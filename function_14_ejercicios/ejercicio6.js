function comparar(a, b, c){
    if(a > b){
        if(a > c){
            if(b > c){
                return "EL ORDEN ES "+a+", "+b+" y "+c
            }else{
                return "EL ORDEN ES "+a+", "+c+" y "+b
            }
        }else{
            return "EL ORDEN ES "+c+", "+a+" y "+b
        }
    }else if(a < b){
        if(b > c){
            if(a > c){
                return "EL ORDEN ES "+b+", "+a+" y "+c
            }else{
                return "EL ORDEN ES "+b+", "+c+" y "+a
            }
        }else{
            return "EL ORDEN ES "+c+", "+b+" y "+a
        }
    }
}

do{    

let a = Number(prompt("Ingrese un primer número"))
let b = Number(prompt("Ingrese un segundo número"))
let c = Number(prompt("Ingrese un tercer número"))

console.log(comparar(a, b, c))

    let volver = Number(prompt("Desea volver a ingresar los números (1). Desea salir (2)"))

    switch(volver){
        case 1: 
            iniciar = 1
            break
        case 2: 
            iniciar = 2
            window.location.href = "index.html"
            break
        default : 
            iniciar = 1
            console.log("Opción no válida")
        }
        
        
    
}while(iniciar == 1)



