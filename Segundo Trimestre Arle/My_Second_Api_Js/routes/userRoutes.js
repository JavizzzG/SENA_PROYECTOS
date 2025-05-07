const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', userController.getAllUsers)
router.get('/:name', userController.getUserByName)
router.post('/', userController.createUser)
router.put('/:name', userController.updateUser)
router.delete('/:name', userController.deleteUser)

module.exports = router