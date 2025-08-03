const { Timestamp } = require('mongodb')
const mongoose =require('mongoose')


const mealSchema = new mongoose.Schema({
 name:{
    type:String,
    trim:true,
    required:true
 },
 ingredients:[{
    type:String,
    trim:true,
    required:true
 }],
 day:{
    type:String,
    enum:['monday','tuesday','wednesday','thursday','friday','saturday','sunday'],
    required:true
 },
 instructions:[{
   steps:{type:Number,required:true},
   text:{ type:String ,required:true,trim:true}
 }]

 
},{Timestamp:true})




module.exports = mongoose.model('meals',mealSchema)

