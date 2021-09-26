
import { useState } from 'react';
import './Meal.css';

const Meal = (props) => {
    const [meal, setMeal] = useState([]);

    const { strMeal, strMealThumb, idMeal } = props.meal
    return (
        <div className='meal-parents'>
            <div className='meal'>
                <div className="col">
                    <div className="card">
                        <img src={strMealThumb} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{strMeal}</h5>
                        </div>
                        <div className="card-footer">
                            <button onClick={() => setMeal(idMeal)} className="btn btn-primary px-5">Detail</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Meal;