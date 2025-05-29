// models/Item.js
const pool = require('../config/db'); // Importa el pool de conexiones

class Item {
    // Método estático para obtener todos los ítems
    static async getAll() {
        try {
            const [rows, fields] = await pool.query('SELECT * FROM items');
            return rows;
        } catch (error) {
            console.error('Error al obtener todos los ítems:', error);
            throw error; // Propaga el error para que el controlador lo maneje
        }
    }

    // Método estático para obtener un ítem por su ID
    static async getById(id) {
        try {
            // Usamos placeholders (?) para prevenir inyección SQL
            const [rows, fields] = await pool.query('SELECT * FROM items WHERE id = ?', [id]);
            // query devuelve un array, incluso si solo hay un resultado o ninguno
            return rows[0] || null; // Devuelve el primer item o null si no se encontró
        } catch (error) {
            console.error(`Error al obtener el ítem con ID ${id}:`, error);
            throw error;
        }
    }

    // Método estático para crear un nuevo ítem
    static async create({ name, description }) { // Recibe un objeto con name y description
        if (!name) {
            throw new Error('El nombre es requerido para crear un ítem.');
        }
        try {
            const [result] = await pool.query(
                'INSERT INTO items (name, description) VALUES (?, ?)',
                [name, description || null] // Asegura que description sea null si no se proporciona
            );
            // Devuelve el ID del nuevo ítem insertado
            return { id: result.insertId, name, description };
        } catch (error) {
            console.error('Error al crear el ítem:', error);
            throw error;
        }
    }

    // Método estático para actualizar un ítem existente por ID
    static async update(id, { name, description }) { // Recibe ID y un objeto con los datos a actualizar
        if (!name && description === undefined) {
            throw new Error('Se requiere al menos un campo (nombre o descripción) para actualizar.');
        }
        try {
            const [result] = await pool.query(
                'UPDATE items SET name = ?, description = ? WHERE id = ?',
                [name, description, id]
            );
            // affectedRows indica cuántas filas fueron cambiadas. Debería ser 1 si el ID existe.
            return result.affectedRows > 0; // Devuelve true si se actualizó, false si no
        } catch (error) {
            console.error(`Error al actualizar el ítem con ID ${id}:`, error);
            throw error;
        }
    }

    // Método estático para eliminar un ítem por ID
    static async delete(id) {
        try {
            const [result] = await pool.query('DELETE FROM items WHERE id = ?', [id]);
            // affectedRows indica cuántas filas fueron eliminadas.
            return result.affectedRows > 0; // Devuelve true si se eliminó, false si no
        } catch (error) {
            console.error(`Error al eliminar el ítem con ID ${id}:`, error);
            throw error;
        }
    }
}

module.exports = Item; // Exporta la clase Item