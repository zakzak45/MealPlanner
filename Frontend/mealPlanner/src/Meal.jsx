import { useState, useEffect } from "react";

const Meal = () => {
    const [meals, setMeals] = useState("");
    const [description, setDescription] = useState([]);
    const [day, setDay] = useState("");
    const [ingredients, setIngredients] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMealsData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:YOUR_PORT/api/meals');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMeals(data.name || "");
            setDescription(data.description || []);
            setDay(data.day || "");
            setIngredients(data.ingredients || "");
        } catch (err) {
            console.error('Fetch error:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMealsData();
    }, []);

    if (loading) return <div>Loading meals...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="meal-container">
            <h1>Meal Information</h1>
            {meals && <h2>{meals}</h2>}
            {day && <p>Day: {day}</p>}
            
            {description.length > 0 && (
                <div>
                    <h3>Description:</h3>
                    <ul>
                        {description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {ingredients && (
                <div>
                    <h3>Ingredients:</h3>
                    <p>{ingredients}</p>
                </div>
            )}
        </div>
    );
};

export default Meal;
 
