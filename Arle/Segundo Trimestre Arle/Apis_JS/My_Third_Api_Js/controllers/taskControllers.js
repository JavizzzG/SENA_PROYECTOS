const Task = require('../models/task')

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.getAll()
        res.status(200).json(tasks)
    }catch (error){
        res.status(500).json({message: 'Error al obtene las tareas', error: error.message})
    }
}

exports.getTaskByName = async (req, res) => {
    try{
        const name = req.params.name
        const task = await Task.getByName(name)
        if(task){
            res.status(200).json(task)
        }else{
            res.status(404).json({message :`Tarea de nombre ${name} no encontrada`})
        }
    }catch (error){
        res.status(500).json({message: 'Error al obtener la tarea', error: error.message})
    }
}

exports.createTask = async (req, res) => {
    try {
        const {name_task, description, status_task} = req.body
        if(name_task === undefined || status_task === undefined){
            return res.status(400).json({message: 'Es necesario un nombre y un estado para crear una tarea'})
        }
        if(!['pending', 'completed'].includes(status_task)){
            return res.status(400).json({message: 'El estado debe ser "pending" o "completed"'})
        }
        const newTaskData = {name_task, description, status_task}
        const newTask = await Task.createTask(newTaskData)
        res.status(201).json(newTask)
    }catch (error){
        if (error.message.includes('requiere')){
            res.status(400).json({message: error.message})
        }else{
            res.status(500).json({message: 'Error al crear la tarea', error: error.message})
        }
    }
}

exports.updateTask = async (req, res) => {
    try {
        const name = req.params.name
        const {name_task, description, status_task} = req.body
        if(name_task === undefined && description === undefined && status_task === undefined){
            return res.status(400).json({message: 'Es necesario al menos un dato a cambiar', error: error.message})
        }
        if(status_task !== undefined && !['pending', 'completed'].includes(status_task)){
            return res.status(400).json({message: 'El status debe ser "pending" o "completed"', error: error.message})
        }
        
        const taskDataToUpdate = {name_task, description, status_task}
        const updatedTask = await Task.updateTask(name, taskDataToUpdate)

        if(updatedTask) {
            res.status(200).json(updatedTask)
        }else{
            res.status(404).json({message: `Tarea de nombre ${name_task} no encontrada`})
        }
    }catch (error){
        res.status(500).json({message: 'Error al actualizar la tarea', error: error.message})
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const name = req.params.name
        const deletedTask = await Task.deleteTask(name)
        if(deletedTask) {
            res.status(204).send()
        }else{
            res.status(404).json({message: `Tarea de nombre ${name} no encontrada`})
        }
    }catch (error) {
        res.status(500).json({message: 'Error al eliminar la tarea', error: error.message})
    }
}