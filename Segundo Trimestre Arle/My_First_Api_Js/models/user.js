const pool = require('../config/db')
const bcrypt = require('bcryptjs') // Importamos bcrypt para encriptar la contraseña

class User {
    static async create({email, password}) {
        if (!email || !password){
            throw Error('Email y password requeridos para crear el user')
        }
        const salt = await bcrypt.genSalt(10) // Generamos un salt para encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, salt) // Encriptamos la contraseña
        
        try {
            const [result] = await pool.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword])
            return {id: result.insertId, email}
        }catch (error) {
            if(error.code === 'ER_DUP_ENTRY') { // Si el error es de entrada duplicada, significa que el email ya está registrado
                throw Error('Este email ya está registrado')
            }
            console.error('Error al crear el usuario', error)
            throw error
        }
    }

    static async findByEmail(email) {
        if (!email) return null
        try {
            const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email])
            return rows[0] || null // Retorna el primer usuario que coincida con el email o null si no existe

        }catch (error){
            console.log(`Error al buscar al usuario con email ${email}`, error)
            throw error
        }
    }

    // Método de instancia para comparar contraseñas
    // Se llamaría así: const user = await User.findByEmail(email); if (user) await user.comparePassword(passwordInput);
    // O hacerla estática si se prefiere pasar el hash directamente
    static async comparePassword(plainPassword, hashedPassword) {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }
}

module.exports = User