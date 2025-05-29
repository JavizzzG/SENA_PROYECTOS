const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET

function authToken(req, res, next) {
    const authHeader = req.headers['authorization'] // Obtenemos el header de autorización
    const token = authHeader && authHeader.split(' ')[1] // Obtenemos el token del header, si existe
    if(token == null){
        res.sendStatus(401) // Si no hay token, retornamos un 401 (no autorizado)
    }

    jwt.verify(token, JWT_SECRET, (err, userPayLoad) => {
        if (err) {
            console.error("Error al verificar el token", err.name, err.message)

            if (err.name === 'TokenExpiredError'){
                return res.status(401).json({message: 'Token expirado'})
            }
            return res.sendStatus(403) // Si el token no es válido, retornamos un 403 (prohibido)
        }

        req.user = userPayLoad // Guardamos el payload del token en la request para usarlo en las siguientes funciones middleware o rutas
        next() // Si el token es válido, continuamos con la siguiente función middleware o ruta
    })
}

module.exports = authToken