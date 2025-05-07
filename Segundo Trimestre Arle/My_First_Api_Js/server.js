// server.js
const express = require('express');
const dotenv = require('dotenv');
const itemRoutes = require('./routes/itemRoutes'); // Importa las rutas de ítems
const authRoutes = require('./routes/authRoutes'); // Importa las rutas de autenticación

// Cargar variables de entorno
dotenv.config();

// Crear la aplicación Express
const app = express();

// Middleware para parsear JSON en el cuerpo de las solicitudes
// Esto es crucial para que req.body funcione en las rutas POST y PUT
app.use(express.json());

// Middleware para parsear datos de formularios URL-encoded (opcional, si usaras formularios HTML)
// app.use(express.urlencoded({ extended: true }));

// Ruta de prueba básica
app.get('/', (req, res) => {
    res.send('¡API REST con Node.js, Express y MySQL funcionando!');
});


//Lo mismo de abajo pero con el prefijo /api/auth
app.use('/api/auth', authRoutes)

// Montar las rutas de los ítems bajo el prefijo /api/items
// Todas las rutas definidas en itemRoutes comenzarán con /api/items
app.use('/api/items', itemRoutes);


// Middleware para manejar rutas no encontradas (404) - Opcional pero buena práctica
app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint no encontrado' });
});

// Middleware para manejo de errores global - Opcional pero buena práctica
// (Este es muy básico, podrías hacerlo más sofisticado)
app.use((err, req, res, next) => {
    console.error(err.stack); // Log el error para debugging
    res.status(500).json({ message: 'Algo salió mal en el servidor', error: err.message });
});


// Definir el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3001; // Usa el puerto de .env o 3001 por defecto

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    // La conexión a la base de datos se verifica en config/db.js
});