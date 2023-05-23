import * as dotenv from 'dotenv'
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors'

//configure environment variables 
dotenv.config()

//create server, allow cross-origin requests
const app = express()
app.use(cors())

//connect to mongodb 
mongoose.connect(process.env.MONGO_ENDPOINT)
mongoose.connection.once('open', () => {
    console.log("connected to mongodb")
})

app.listen(4000, () => {
    console.log("listening to port 4000")
})

