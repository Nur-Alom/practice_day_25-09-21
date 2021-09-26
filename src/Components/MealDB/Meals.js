import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import SingleMeal from '../SingleMeal/SingleMeal';
import './Meals.css';

const Meals = () => {
    const [mealData, setMealData] = useState([]);

    useEffect(() => {
        fetch('./mealdb.json')
            .then(res => res.json())
            .then(data => setMealData(data));
    }, [])

    return (
        <div className='meals-body'>
            <div className='meal-detail'>
                {
                    mealData.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    />)
                }
            </div>
            <div>
                {
                    mealData.map(meal => <SingleMeal
                        key={meal.idMeal}
                        meal={meal}
                    />)
                }
            </div>
        </div>
    )
}

export default Meals;