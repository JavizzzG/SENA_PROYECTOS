let proveedor = Number(prompt("Ingrese el proveedor: Claro (1), Tigo (2), Movistar (3)"))
let minutos = Number(prompt("Ingrese los minutos internacioanles consumidos"))

switch(proveedor){
    case 1 : valor = (minutos * 100) + 48000

    console.log("El valor del cargo fijo es $30.000, el valor del minuto internacional es $100 y el valor del paquete de datos es $18.000. Por lo tanto, tras gastar "+minutos+" minutos internacionales, el valor total del servicio es $"+valor.toLocaleString())

    break

    case 2 : valor = (minutos * 200) + 57000

    console.log("El valor del cargo fijo es $45.000, el valor del minuto internacional es $200 y el valor del paquete de datos es $12.000 Por lo tanto, tras gastar "+minutos+" minutos internacionales, el valor total del servicio es $"+valor.toLocaleString())

    break

    case 3 : valor = (minutos * 250) + 48000

    console.log("El valor del cargo fijo es $40.000, el valor del minuto internacional es $250 y el valor del paquete de datos es $8.000. Por lo tanto, tras gastar "+minutos+" minutos internacionales, el valor total del servicio es $"+valor.toLocaleString())

    break

    default : console.log("Error en los datos, intente de nuevo")
}
