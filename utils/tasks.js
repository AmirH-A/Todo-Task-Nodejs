const fs = require("fs")
const path = require("path")

const {v4: uuidv4} = require("uuid")

const rootDir = require("./path")
const filePath = path.join(rootDir, "data", "todos.json")

exports.getTasks = (callback) => {
	fs.readFile(filePath, (error, fileContent) => {
		if(error) {
			return callback([])
		}else{
			callback(JSON.parse(fileContent))
		}
	})
}

exports.setTasks = (tasks, callback) => {
	fs.writeFile(filePath, JSON.stringify(tasks), (error) => {
		if(error){
			callback(error)
		}
	})
}

exports.generateRandomeIds = () => {
	return uuidv4()
}

exports.getcompletedTasks = (callback) => {
	// const completedTasks = []
	// const findcompleted = tasks.filter((task) => task.completed === true)
	// completedTasks.push(findcompleted)
	// callback(completedTasks)
	this.getTasks(
		callback(tasks.filter(task => task.completed === true).length)
	)
}

exports.getRemainintTasks = (callback) => {
	this.getTasks(
		callback(tasks.filter(task => task.completed !== true).length)
	)
}