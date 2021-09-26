import React from 'react';
import './SingleMeal.css';

const SingleMeal = (props) => {
    console.log(props.meal);
    const { strMeal, strMealThumb, idMeal } = props.meal;

    return (
        <div>
            <ul>
                <li>{strMeal}</li>
            </ul>
        </div>
    );
};

export default SingleMeal;