const mongoose =require('mongoose')



const mealSchema = new mongoose.Schema({
 name:{
    type:String,
    required:true
 },
 ingredients:[{
    type:String,
    required:true
 }],
 day:{
    type:String,
    required:true
 },
 instructions:{
    type:String
 }
})




module.exports = mongoose.model('meals',mealSchema)

