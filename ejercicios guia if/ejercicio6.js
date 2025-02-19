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
