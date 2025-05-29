do{    

let a = Number(prompt("Ingrese un primer número"))
let b = Number(prompt("Ingrese un segundo número"))
let c = Number(prompt("Ingrese un tercer número"))

if(a > b){
    if(a > c){
        if(b > c){
            console.log("EL ORDEN ES "+a+", "+b+" y "+c)
        }else{
            console.log("EL ORDEN ES "+a+", "+c+" y "+b)
        }
    }else{
        console.log("EL ORDEN ES "+c+", "+a+" y "+b)
    }
}else if(a < b){
    if(b > c){
        if(a > c){
            console.log("EL ORDEN ES "+b+", "+a+" y "+c)
        }else{
            console.log("EL ORDEN ES "+b+", "+c+" y "+a)
        }
    }else{
        console.log("EL ORDEN ES "+c+", "+b+" y "+a)
    }
}
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



