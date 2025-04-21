let base = Number(prompt("Digite el valor de la base"))
let exponente = Number(prompt("Digite el valor del exponente"))

let calcularValor = (base, exponente) => {
    let respuesta = base ** exponente
    return respuesta
}

console.log("Si la base es "+base+" y el exponente es "+exponente+" entonces el valor es "+calcularValor(base, exponente))