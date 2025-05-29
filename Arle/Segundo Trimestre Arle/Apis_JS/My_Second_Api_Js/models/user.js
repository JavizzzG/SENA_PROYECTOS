const pool = require('../config/db')
const bcrypt = require('bcryptjs')

class User {
    static async getAll(){
        try{
            const [rows, fields] = await pool.query('SELECT * FROM usuarios')
            return rows
        }catch(error){
            console.log('Error al obtener todos los datos', error)
            throw error
        }
    }

    static async getByName(userName){
        try {
            const [rows, fields] = await pool.query('SELECT * FROM usuarios WHERE name = ?', [userName])
            return rows[0] || null
        }catch (error) {
            console.log(`Èrror al obtener el dato de nombre ${userName}:`, error)
            throw error
        }
    }

    static async createUser({name, email, passkey, birthdate}){
        if(!name){
            throw new Error('Es necesario un nombre para crear un usuario')
        }
        if(!email){
            throw new Error('Es necesario un email para crear un usuario')
        }
        if(!passkey){
            throw new Error('Es necesario una passkey para crear un usuario')
        }
        if(!birthdate){
            throw new Error('Es necesario una fecha de nacimiento para crear un usuario')
        }
        try {
            const [result] = await pool.query('INSERT INTO usuarios (name, email, passkey, birthdate) VALUES (?, ?, ?, ?)', [name, email, passkey, birthdate])
            return {id: result.insertId, name, email, passkey, birthdate}
        }catch (error){
            console.log('Error al crear el usuario', error)
            throw error
        }
    }

    static async updateUser(userName, {name, email, passkey, birthdate}){
        if(!name && !email && !passkey && !birthdate){
            throw new Error('Es necesario al menos un campo para actualizar el usuario')
        }
        try {
            const [result] = await pool.query('UPDATE usuarios SET name = ?, email = ?, passkey = ?, birthdate = ? WHERE name = ?', [name, email, passkey, birthdate, userName])
            return result.affectedRows > 0
        }catch (error){
            console.log(`Error al actualizar el usuario con nombre ${userName}:`, error)
            throw error
        }
    }

    static async deleteUser(userName){
        try {
            const [result] = await pool.query('DELETE FROM usuarios WHERE name = ?', [userName])
            return result.affectedRows > 0
        }catch (error){
            console.log(`Error al eliminar el usuario con ID ${userName}:`, error)
            throw error
        }
    }

    static async findByEmail(email) {
        if (!email) return null
        try {
            const [rows] = await pool.query('SELECT * FROM usuarios WHERE  email = ?', [email])
            return rows[0] || null
        }catch (error) {
            console.log(`Error al buscar el usuario por email ${email}`, error)
            throw error
        }
    }

    static async compare(plainPasskey, passkeydb) {
        return plainPasskey == passkeydb
    }
}

module.exports = User