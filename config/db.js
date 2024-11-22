import mongoose from "mongoose";
import pkg from 'colors';
const {colors} = pkg;


const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGOURL)
        console.log(`conexion exitosa con mogno: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error al conectar a mongo ${error}`)
        process.exit(1)
    }
}

export default connectDB