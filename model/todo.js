const taskUtils = require("../utils/tasks")

class Todo {
	constructor(id, text, completed = false) {
		this.id = id;
		this.text = text;
		this.completed = completed
	}

	save(callback) {
		// fs.readFile(filePath, (err, fileContent) => {
		// 	const todos = JSON.parse(fileContent)
		// 	todos.push(this)

		// 	fs.writeFile(filePath, JSON.stringify(todos), (error) => {
		// 		if(error) {
		// 			callback(error)
		// 		}else {
		// 			return callback([])
		// 		}
		// 	})
		// })
		taskUtils.getTasks((tasks) => {
			tasks.push(this)
			taskUtils.setTasks(tasks, (error) => {
				callback(error)
			})
		})
	}

	static fetchAllTasks (callback) {
		// fs.readFile(filePath, (err, fileContent) => {
		// 	if(err) {
		// 		return []
		// 	}else{
		// 		const todo = JSON.parse(fileContent)
		// 		callback(todo)
		// 	}
		// })
		taskUtils.getTasks((tasks) => {
			callback(tasks)
		})
	}

	static deleteTasks (id, callback) {
		taskUtils.getTasks(tasks => {
			taskUtils.setTasks(todos => {
				task.filter(t => t.id != id, (err) => {
					callback(error)
				})

			})
		})
	}

	static setTodosToCompleted (id, callback) {
		taskUtils.getTasks((tasks) => {
			const findIndex = tasks.findIndex(t => t.id == id)
			const newTask = tasks[findIndex]
			newTask.completed = true
			tasks[findIndex] = newTask
			taskUtils.setTasks(setNewTask, (err) => {
				callback(error)
			})
		})
	}	
}

module.exports = Todo