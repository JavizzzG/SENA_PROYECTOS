// controllers/itemController.js
const Item = require('../models/Item'); // Importa el modelo

// Obtener todos los ítems
exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.getAll();
        res.status(200).json(items); // OK
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los ítems', error: error.message }); // Internal Server Error
    }
};

// Obtener un ítem por ID
exports.getItemById = async (req, res) => {
    try {
        const id = req.params.id; // Obtiene el ID de los parámetros de la URL
        const item = await Item.getById(id);
        if (item) {
            res.status(200).json(item); // OK
        } else {
            res.status(404).json({ message: `Ítem con ID ${id} no encontrado` }); // Not Found
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el ítem', error: error.message });
    }
};

// Crear un nuevo ítem
exports.createItem = async (req, res) => {
    try {
        const { name, description } = req.body; // Obtiene los datos del cuerpo de la solicitud
        if (!name) {
            // Validación básica en el controlador también es buena práctica
            return res.status(400).json({ message: 'El campo "name" es requerido' }); // Bad Request
        }
        const newItemData = { name, description };
        const newItem = await Item.create(newItemData);
        res.status(201).json(newItem); // Created
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el ítem', error: error.message });
    }
};

// Actualizar un ítem existente
exports.updateItem = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, description } = req.body;

        // Opcional: Validar si el ítem existe antes de intentar actualizar
        const existingItem = await Item.getById(id);
        if (!existingItem) {
            return res.status(404).json({ message: `Ítem con ID ${id} no encontrado` });
        }

        // Solo actualiza los campos proporcionados (mejoraría esta parte si solo se quiere actualizar uno)
        // Una forma más robusta sería obtener el item actual y fusionar los cambios.
        // Por simplicidad aquí, asumimos que siempre se envían ambos o se gestiona en el frontend/cliente.
        // El modelo actual requiere ambos, podríamos mejorarlo para actualizaciones parciales.
        const itemDataToUpdate = {
            name: name !== undefined ? name : existingItem.name,
            description: description !== undefined ? description : existingItem.description
        };


        const updated = await Item.update(id, itemDataToUpdate);

        if (updated) {
            // Devuelve el ítem actualizado (opcionalmente, puedes volver a consultarlo)
            const updatedItem = await Item.getById(id); // Vuelve a consultar para obtener la versión final
            res.status(200).json(updatedItem); // OK
        } else {
            // Esto no debería ocurrir si la verificación previa se hizo, pero por si acaso
            res.status(404).json({ message: `Ítem con ID ${id} no encontrado o no se pudo actualizar` });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el ítem', error: error.message });
    }
};

// Eliminar un ítem
exports.deleteItem = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await Item.delete(id);
        if (deleted) {
            res.status(200).json({ message: `Ítem con ID ${id} eliminado correctamente` }); // OK
            // Alternativamente, puedes devolver status 204 (No Content) sin cuerpo de respuesta:
            // res.status(204).send();
        } else {
            res.status(404).json({ message: `Ítem con ID ${id} no encontrado` }); // Not Found
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el ítem', error: error.message });
    }
};