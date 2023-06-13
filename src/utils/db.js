import mongoose from 'mongoose'
const dbName =  process.env.DATABASE_NAME
const mongoURI = `mongodb://127.0.0.1:27017/${dbName}`

export const connectToDB = async()=>{
    try {
        const {con} = await mongoose.connect(mongoURI,{
            useNewUrlParser: true,
            // useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log(`Connection established to MongoDB ${con.host}`);
    } catch (error) {
        console.error(error)
    }
}