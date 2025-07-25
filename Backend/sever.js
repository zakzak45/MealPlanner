const express =require('express');
const dotenv =require('dotenv');
const connectDB =require('./config/db');
const mealRoutes =require('./routes/mealRoutes')
const meals =require('./models/meal');
const app = express()

app.use(express.json())
dotenv.config()
app.use('/meals', mealRoutes)
const PORT =process.env.PORT || 4000
connectDB()

app.use('/meals',mealRoutes)




app.listen(PORT, ()=>{
    console.log("server is running "+PORT)
})
