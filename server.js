const express = require('express')
const cors = require('cors')
const db = require('./app/models')

const app = express()
const port = 3000

const corsOption = {
    origin: "*"
}

//reg cors middleware
app.use(cors(corsOption))
app.use(express.json())

//db connect
const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

db.mongoose.connect(db.url, mongooseConfig)
.then(() => console.log('Database Connected'))
.catch((err) => {
    console.log(`Database is not connected because : ${err.message}`)
    process.exit()
})

// routes
require('./app/routes/app_route')(app)

app.listen(port, () => {
    console.log(`server is running on port http://127.0.0.1:${port}/`)
})