import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js';
const connectDB=async()=>{
    try {
        const Connection=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`your database is connected to the ${Connection.connection.host}`)

    } catch (error) {
        console.log(error);
        process.exit(1)
        
    }
}
export default connectDB;