const express = require("express")

const addNewTask = require("../controllers/admin")

const router = express.Router()

router.post("/add-task", addNewTask.addTask)

router.get("/deleteTask:id", addNewTask.deleteTask)

router.get("completeTask:id", addNewTask.completeTask)

module.exports = router