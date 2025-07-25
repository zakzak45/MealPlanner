const mongoose =require('mongoose')
const dotenv =require('dotenv')

dotenv.config()

const MONGODB_URL = process.env.MONGODB_URL

function connectDB(){
mongoose.connect(MONGODB_URL).then(()=>{
    console.log("connected to database successfully ")
}).catch((err)=>{
    console.log("connection failed"+err)
})

}



module.exports = connectDB;