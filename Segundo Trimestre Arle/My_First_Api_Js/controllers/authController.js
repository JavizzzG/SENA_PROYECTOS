const User = require('../models/user')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h'

function generateToken(userId, email) {
    return jwt.sign(
        {id: userId, email: email},
        JWT_SECRET,
        {expiresIn: JWT_EXPIRES_IN}
    )
}

exports.register = async (req, res) => {
    const {email, password} = req.body
    
    if (!email || !password) {
        return res.status(400).json({message: 'Es necesario el email y la contraseña'})
    }
    if (password.length < 8) {
        return res.status(400).json({message: 'La contraseña debe tener al menos 8 caracteres'})
    }

    try {
        const newUser = await User.create({email, password})
        const token = generateToken(newUser.id, newUser.email)
        res.status(201).json({
            message: "Usuario registrado correctamente",
            token,
            user: {
                id: newUser.id,
                email: newUser.email
            }
            
        })

    }catch (error) {
        if (error.message.includes('ya está registrado')) {
            return res.status(409).json({message: error.message}) //Error 409: Conflicto, el email ya está registrado
        }
        console.error('Error en el registro', error)
        return res.status(500).json({message: 'Error al registrar el usuario', error: error.message})
    }
}

exports.login = async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        return res.status(400).json({message: 'Es necesario el email y la contraseña'})
    }

    try {
        const user = await User.findByEmail(email)
        if(!user){
            return res.status(401).json({message: `No existe un usuario con el email ${email}`})
        }

        const comprobarPassword = await User.comparePassword(password, user.password)
        if(!comprobarPassword){
            return res.status(401).json({message: 'Contraseña incorrecta'})
        }

        const token = generateToken(user.id, user.email)

        res.status(200).json({
            message: 'Login completado correctamente',
            token,
            user: {
                id: user.id,
                email: user.email
            }
        })

    }catch (error) {
        console.error('Error en el login', error)
        return res.status(500).json({message: "Error al iniciar sesión", error: error.message})
    }
}