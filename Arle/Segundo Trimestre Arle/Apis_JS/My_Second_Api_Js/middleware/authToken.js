const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET

function authToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) {
        res.sendStatus(401)
    }

    jwt.verify(token, JWT_SECRET, (err, userPayLoad) => {
        if(err) {
            console.error('Error al verificar el token', err.name, err.message)

            if (err.name === 'TokenExpiredError') {
                res.status(401).json({message: 'Token expirado'})
            }
            return res.sendStatus(403)
        }

        req.user = userPayLoad
        next()
    })
}

module.exports = authToken