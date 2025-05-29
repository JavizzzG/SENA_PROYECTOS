// routes/itemRoutes.js
const express = require('express');
const router = express.Router(); // Creamos un router de Express
const itemController = require('../controllers/itemController'); // Importamos el controlador
const authToken = require('../middleware/authToken'); // Importamos el middleware de autenticación
// Definimos las rutas para los ítems y las asociamos a las funciones del controlador

// Middleware para autenticar el token en todas las rutas de ítems
router.use(authToken); // Aplicamos el middleware de autenticación a todas las rutas de ítems

//Si se quisiera autenticar solo algunas rutas, se podría hacer de la siguiente manera:
// router.get('/', authToken, itemController.getAllItems); // Solo autenticar esta ruta


// GET /api/items - Obtener todos los ítems
router.get('/', itemController.getAllItems);

// GET /api/items/:id - Obtener un ítem por ID
router.get('/:id', itemController.getItemById);

// POST /api/items - Crear un nuevo ítem
router.post('/', itemController.createItem);

// PUT /api/items/:id - Actualizar un ítem por ID
router.put('/:id', itemController.updateItem);

// DELETE /api/items/:id - Eliminar un ítem por ID
router.delete('/:id', itemController.deleteItem);

module.exports = router; // Exportamos el router para usarlo en el servidor principal