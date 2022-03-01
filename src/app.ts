import express from 'express'
import BaseRouter from './routes/base';
const app = express();
app.listen(3000)
app.use(express.json())
app.use("/adapter", BaseRouter)
