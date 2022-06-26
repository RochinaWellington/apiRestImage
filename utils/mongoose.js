import mongoose from 'mongoose'
import dotenv from 'dotenv'
const dotEnv=dotenv.config()

export async function connectToDB(){
  try{
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Mongod connected')
  }catch (error){
    console.error(error)
  }
}
