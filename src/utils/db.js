import mongoose from 'mongoose'
const dbName =  process.env.DATABASE_NAME
console.log("dbName: ",dbName)
const mongoURI = `mongodb://127.0.0.1:27017/${dbName}`
console.log("mongoURI: ",mongoURI)
export const connectToDB = async()=>{
    try {
        await mongoose.connect(mongoURI,{
            useNewUrlParser: true,
            // useFindAndModify: false,
            useUnifiedTopology: true
        })
            console.log(`🎉🔥 Connection established to MongoDB`);
       
    } catch (error) {
        console.error(error)
        process.exit(1);
    }
}