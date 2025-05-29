// config/db.js
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config(); // Carga las variables de entorno desde .env

// Crea un pool de conexiones
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost', // Usa variable de entorno o valor por defecto
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'my_api_js_db',
    waitForConnections: true,
    connectionLimit: 10, // Número máximo de conexiones en el pool
    queueLimit: 0 // Sin límite en la cola de espera
});

// Intenta obtener una conexión para verificar que la configuración es correcta
async function checkConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Conexión a la base de datos MySQL establecida con éxito.');
        connection.release(); // Libera la conexión de vuelta al pool
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        // Si no se puede conectar, puede ser crítico, podrías salir del proceso
        // process.exit(1);
    }
}

checkConnection(); // Verifica la conexión al iniciar

module.exports = pool; // Exporta el pool para usarlo en los modelos