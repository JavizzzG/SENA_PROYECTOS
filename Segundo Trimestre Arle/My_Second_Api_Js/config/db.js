const mysql = require('mysql2/promise')
const dotenv = require('dotenv')
dotenv.config()

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD ||"",
    database: process.env.DB_NAME || 'my_2api_js_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

async function checkConnection() {
    try {
        const connection = await pool.getConnection()
        console.log(`Conexión exitosa a la base de datos`)
        connection.release()
    }catch (error) {
        console.log(`Error al conectar con la db`, error)
    }
}
checkConnection()
module.exports = pool