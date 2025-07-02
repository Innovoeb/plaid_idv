import express from "express"
import cors from 'cors'
import plaidRouter from './routes/plaidRouter.js'

const port = 3000
const app = express()


app.use(express.json())
app.use(cors())
app.use(plaidRouter)


app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`)
    console.log(`Worker PID=${process.pid}`)
})