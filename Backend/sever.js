const express =require('express');
const dotenv =require('dotenv');
const connectDB =require('./config/db');
const controllers =require('./controllers/mealController')
const mealRoutes =require('./routes/mealRoutes')
const meals =require('./models/meal.js');
const app = express()
const cors = require('cors')


app.use(cors())
app.use(express.json())
dotenv.config()
app.use('/meals', mealRoutes)
const PORT =process.env.PORT || 4000
connectDB()

app.use('/meals',mealRoutes)


app.listen(PORT, ()=>{
    console.log("server is running "+PORT)
})
