const express =require('express')
const router =express.Router();
const Meal =require('../models/meal')



router.get('/', async (req,res)=>{
    try{
    const meals = await Meal.find();
    res.json(meals)
    } catch(err){
        res.status(500).json({ error: "error was found"})
    }
   
})


router.post('/', async (req,res)=>{
    try{
    const meal =  new Meal(req.body);
    await meal.save()
    res.status(200).json(meal)
    }catch(err){
        res.status(400).json({error :"not new meal was created"+error.message})
    }
   
})







module.exports =router;





