const User = require('../models/user')

exports.getAllUsers = async (req, res) => {
    try {
        const users =await User.getAll()
        res.status(200).json(users)
    }catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error : error.message})
    }
}

exports.getUserByName = async (req, res) => {
    try {
        const userName = req.params.name
        const user = await User.getByName(userName)
        if (user) {
            res.status(200).json(user)
        }else{
            res.status(404).json({ message : `Usuario de nombre ${userName} no encontrado`})
        }
    } catch (error) {
        res.status(500).json({message : 'Error al obtener el Usuario', error : error.message})
    }
}

exports.createUser = async (req, res) => {
    try {
        const {name, email, passkey, birthdate} = req.body
        if (!name) {
            return res.status(400).json({message : 'Se requiere el campo "name"'})
        }else if (!email) {
            return res.status(400).json({message : 'Se requiere el campo "email"'})
        }else if (!passkey) {
            return res.status(400).json({message : 'Se requiere el campo "passkey"'})
        }else if (!birthdate) {
            return res.status(400).json({message : 'Se requiere el campo "birthdate"'})
        }
        const newUserData = {name, email, passkey, birthdate}
        const newUser = await User.createUser(newUserData)
        res.status(201).json(newUser)
    }catch (error) {
        res.status(500).json({message : 'Error al crear el usuario', error : error.message})
    }
}

exports.updateUser = async (req, res) => {
    try {
        const userName = req.params.name
        const {name, email, passkey, birthdate} = req.body
        const existingUser = await User.getByName(userName)
        if (!existingUser) {
            return res.status(404).json({message : `Usuario ${userName} no encontrado`})
        }
        const userDataToUpdate = {
            name: name !== undefined ? name : existingUser.name,
            email: email !== undefined ? email : existingUser.email,
            passkey: passkey !== undefined ? passkey : existingUser.passkey,
            birthdate: birthdate !== undefined ? birthdate : existingUser.birthdate
        }

        const updated = await User.updateUser(userName, userDataToUpdate)
        if (updated) {
            const updatedUser = await User.getByName(userName)
            res.status(200).json(updatedUser)
        }else {
            res.status(404).json({message: `Usuario ${userName} no encontrado`})
        }
    
    } catch (error) {
        res.status(500).json({message : 'Error al actualizar el usuario', error : error.message})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const userName = req.params.name
        const deleted = await User.deleteUser(userName)
        if (deleted) {
            res.status(200).json({message : `Usuario ${userName} eliminado`})
        } else {
            res.status(404).json({message : `Usuario ${userName} no encontrado`})
        }
    }catch (error) {
        res.status(500).json({message : 'Error al eliminar el usuario', error : error.message})
    }
}