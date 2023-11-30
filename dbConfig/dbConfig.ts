import mongoose from "mongoose";

export async function Connect(){
    try{
        mongoose.connect(process.env.MONGO_URL!);
        const Connection = await mongoose.connection;
        Connection.on('connected',()=>{
            console.log('MongoDB connected successfully ')
        })
        Connection.on('error',(error)=>{
            console.log('Make sure your MongoDB connection is working'+error.message)
            process.exit()
        })
    }catch(e){
        console.log('MongoDB connection error')
        console.log(e)
    }
}