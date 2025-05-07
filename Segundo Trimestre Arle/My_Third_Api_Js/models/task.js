const pool = require('../config/db')

class Task {
    static async getAll() {
        try {
            const [rows] = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC')
            return rows
        }catch (error) {
            console.log("Error al obtener las tareas", error)
            throw error
        }
    }

    static async getByName(name) {
        try {
            const [rows] = await pool.query('SELECT * FROM tasks WHERE name_task = ?', [name])
            return rows[0] || null
        }catch (error) {
            console.log(`Error al obtener la tarea de nombre ${name}, error`, error)
            throw error
        }
    }

    static async createTask({name_task, description, status_task}) {
        if(name_task === undefined) {
            throw new Error("Se requiere un nombre para crear una tarea")
        }
        if(!["pending", "completed"].includes(status_task)) {
            throw new Error("Se requiere un estado 'pending' o 'completed' para crear una tarea")
        }

        try {
            const [result] = await pool.query('INSERT INTO tasks (name_task, description, status_task) VALUES (?, ?, ?)', [name_task, description || null, status_task])
            return { id: result.insertId, name_task, description, status_task }
        }catch (error) {
            console.log("Error al crear la tarea", error)
            throw error
        }
    }

    static async updateTask(name, {name_task, description, status_task}) {
        const existingTask = await this.getByName(name)
        if(!existingTask) {
            throw new Error(`No existe una tarea con el nombre ${name}`)
        }

        const fieldsToUpdate = []
        const values = []
        if(name_task) {
            fieldsToUpdate.push('name_task = ?')
            values.push(name_task)
        }
        if(description) {
            fieldsToUpdate.push('description = ?')
            values.push(description)
        }
        if(['pending', 'completed'].includes(status_task)) {
            fieldsToUpdate.push('status_task = ?')
            values.push(status_task)
        }
        if(fieldsToUpdate.length == 0) {
            return existingTask
        }

        values.push(name)
        const query = `UPDATE tasks SET ${fieldsToUpdate.join(', ')} WHERE name_task = ?`
        try {
            const [result] = await pool.query(query, values)
            if (result.affectedRows !== 0) {
                return this.getByName(name_task)
            }else{
                return null
            }
        }catch (error) {
            console.log(`Error al actualizar la tarea con nombre ${name}`, error)
            throw error
        }
    }

    static async deleteTask(name) {
        try {
            const [result] = await pool.query('DELETE FROM tasks WHERE name_task = ?', [name])
            return result.affectedRows > 0
        } catch (error) {
            console.log(`Error al eliminar la tarea con nombre ${name}`, error)
            throw error
        }
    }
}

module.exports = Task