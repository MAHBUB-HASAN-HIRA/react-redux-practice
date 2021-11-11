import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updatedFood } from '../../../redux/index';
import FoodCard from '../FoodCard/FoodCard';

const FoodContainer = () => {
    const [foodNum, setFoodNum] = useState(1);
    const allFood = useSelector(state => state.totalFood.allFood);
    const disPatch = useDispatch();

    const handleSubmit = (e, cartFood) => {
        e.preventDefault();
        if (cartFood.quantity >= foodNum) {
            const cartProduct = {
                ...cartFood,
                quantity: Number(foodNum),
                totalPrice: Number(cartFood.price) * Number(foodNum),
            }
            disPatch(addToCart(cartProduct));
            disPatch(updatedFood(cartProduct.id, cartProduct.quantity));
            setFoodNum(1);
            e.target.reset();
        }
        else {
            alert(`I have not enough ${cartFood.name}`);
        }
    }

    const passProps = {
        handleSubmit: handleSubmit,
        foodNum: foodNum,
        setFoodNum: setFoodNum,
    }

    return (
        <div>
            {
                allFood.map(food => <FoodCard key={food.id} food={food} passProps={passProps} />)
            }
        </div>
    );
};

export default FoodContainer;