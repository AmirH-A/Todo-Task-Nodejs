const express = require('express')

const todosController = require('../controllers/tasks')

const router = express.Router()

router.get("/", todosController.allTasks)

module.exports = router