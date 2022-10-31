import React from 'react';
import {useGlobalContext} from "../context";

const Meals = () => {
    const {meals} = useGlobalContext()
    return (
        <section>
            {meals.map((singleMeal) => {
                console.log(singleMeal)
                return <h4>single meal</h4>
            })}
        </section>
    );
};

export default Meals;
//2:57:00
