const express = require("express")
const app = express()
const cors = require("cors")

require("./server/config/mongoose.config")

app.use(express.json(), express.urlencoded({extended:true}), cors())

require("./server/routes/plant.routes")(app);

const server = app.listen(8000, () => console.log(`The server is running on ${server.address().port}!`))

