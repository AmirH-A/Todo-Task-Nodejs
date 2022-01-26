const Todo = require("../model/todo")

exports.allTasks = (req, res) => {
	Todo.fetchAllTasks((todo) => {
		res.render("index", {
			pageTitle : "TodoTasks",
			todo
		})
	})
}