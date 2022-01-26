const Todo = require("../model/todo")
const taskUtils = require("../utils/tasks")

exports.addTask = (req,res) => {
	if(!req.body.todo) return res.redirect('/')
	const todo = new Todo(taskUtils.generateRandomeIds(), req.body.todo)
	todo.save((err)=> {
		if(err) res.redirect("/")
		else console.log("error", err)
	})
}

exports.deleteTask = (req,res) => {
	Todo.deleteTasks(req.params.id, (err) => {
		if(!err) res.redirect("/")
		else console.loge(err)
	})
}

exports.completeTask = (req,res) => {
	Todo.setTodosToCompleted(req.params.id, (err) => {
		if(!err) res.redirect("/")
		else console.log(err)
	})
}