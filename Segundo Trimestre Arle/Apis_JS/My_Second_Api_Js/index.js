const express = require('express')
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoutes')

dotenv.config()

const app =express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Api Rest con Node.js, Express y MySQL funcionando correctamente")
})

app.use('/api/user', userRoutes)

app.use((req, res, next) => {
    res.status(404).json({message : 'Endpoint no encontrado'})
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).json({message: `Algo ha salido mal en el server`, error: err.message})
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Servidor Corriendo correctamente en http://localhost:${PORT}`)
})