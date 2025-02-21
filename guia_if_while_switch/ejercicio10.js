let cantidad = Number(prompt("Cuantas copias desea imprimir"))

if(cantidad < 500){
    precioTotal = 120 * cantidad
    console.log("El valor de la copia es $120 y el valor total del pedido es $"+precioTotal.toLocaleString())

}else if(cantidad >= 500 && cantidad < 750){
    precioTotal = 100 * cantidad
    console.log("El valor de la copia es $100 y el valor total del pedido es $"+precioTotal.toLocaleString())

}else if(cantidad >= 750 && cantidad < 1000){
    precioTotal = 80 * cantidad
    console.log("El valor de la copia es $80 y el valor total del pedido es $"+precioTotal.toLocaleString())

}else{
    precioTotal = 50 * cantidad
    console.log("El valor de la copia es $50 y el valor total del pedido es $"+precioTotal.toLocaleString())
}