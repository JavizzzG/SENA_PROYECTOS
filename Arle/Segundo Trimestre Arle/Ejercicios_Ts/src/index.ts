function saludar(saludo: string, ...nombre: string[]){
	return `${saludo} ${nombre.join(", ")}`
}

console.log(saludar("Buenas tardes", "Mauro", "Fajis", "Pepe"))
//retorna "Buenas tardes Mauro, Fajis, Pepe"