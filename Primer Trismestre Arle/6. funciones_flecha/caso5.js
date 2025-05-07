let numero = Number(prompt("Ingrese un numero"))

function sumarDigitos(n) {
    let suma = 0
    n = Math.abs(n) // Asegurar que sea positivo

    while (n > 0) {
        let digito = n % 10 // Extraer el último dígito
        suma += digito;           // Sumar el dígito
        n = Math.floor(n / 10) // Eliminar el último dígito
    }

    return suma;
}

// Ejemplo de uso
console.log(sumarDigitos(numero))

