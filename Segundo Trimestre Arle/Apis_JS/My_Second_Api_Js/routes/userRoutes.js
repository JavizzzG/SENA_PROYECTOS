const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authToken = require('../middleware/authToken')



router.get('/', authToken, userController.getAllUsers)
router.get('/:name', authToken, userController.getUserByName)
router.post('/', authToken, userController.createUser)
router.put('/:name', authToken, userController.updateUser)
router.delete('/:name', authToken, userController.deleteUser)
router.post('/login', userController.login)

module.exports = router