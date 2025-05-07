const express =require('express')
const dotenv = require('dotenv')
const taskRoutes = require('./routes/taskRoutes')

dotenv.config()
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Api en funcionamiento")
})

app.use('/api/tasks', taskRoutes)

app.use((req, res, next) => {
    res.status(404).json({message: 'Endpoint no encontrado'})
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({message: 'Algo salío mal en el servidor', error: err.message})
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`El servidor corre en http://localhost:${PORT}`)
})