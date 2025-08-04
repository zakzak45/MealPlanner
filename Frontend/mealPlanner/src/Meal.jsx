
import { useState ,useEffect } from "react";


const Meal = () => {
    const [meals,setMeals] =useState("")
    const [description,setDescription] =useState([])
    const [day,setDay] =useState("")
    const [ingredents,setIngrediants] =useState('')

const MealsData = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('');//about to put backend locahost link
        const data = await response.json();
        console.log(data); 
        return data;      
      } catch (err) {
        console.error('Fetch error:', err);
        throw err; 
      }
    };
    
  
  }, []);


    return ( 
        <>
        <>hello meals</>     //doing some testing here
        </>
     );
}
}
 
export default Meal;