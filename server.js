import pkg from 'colors';
import express from 'express'
const {colors} = pkg;
import dotenv from 'dotenv'
import pruebaRouter from './routes/pruebaRoutes.js';
import authRouter from './routes/authRouter.js';
import connectDB from './config/db.js';

//leer del .env
dotenv.config()
connectDB()

console.log("backend 93".bgBlue.underline.bgCyan)
const app = express()
app.use(express.json())

const PORT =process.env.PORT

app.use('/api/pruebas', pruebaRouter)
app.use('/api/auth', authRouter)


app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en puerto:${PORT}`.bgBlue.white.bold)
})


