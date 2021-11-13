/* eslint-disable */
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'
import dotenv from 'dotenv';

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
// ```localhost:5000/posts```
app.use('/posts', postRoutes)

dotenv.config()

const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.iupgl.mongodb.net/cluster0?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message))