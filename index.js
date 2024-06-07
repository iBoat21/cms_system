const express = require('express')
const cors = require('cors')
require('dotenv').config({path:'config.env'})

const corsOption = {
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE'
}

const app = express()

app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//call router
const userRouter = require('./routers/usersRouter')
app.use('/api/user',userRouter)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

