const express = require("express")
const bodyParser = require("body-parser")

const {setStatics} = require("./utils/statics")
const mainRoute = require("./routes/main")
const taskRoute = require("./routes/task")
const errorPage = requ


const app = express()

//Middleware
app.use(bodyParser.urlencoded({extended : false}))
//End of middleware

//EJS
app.set("view engine", "ejs")
app.set("views", "views")
//End of EJS

//statics
setStatics(app)

//Routes
app.use(mainRoute)
app.use("/admin", taskRoute)
app.use(errorPage)

app.listen(3000, () => {
	console.log('server is running ...')
})