const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskControllers')

router.get('/', taskController.getAllTasks)
router.get('/:name', taskController.getTaskByName)
router.post('/', taskController.createTask)
router.put('/:name', taskController.updateTask)
router.delete('/:name', taskController.deleteTask)

module.exports = router