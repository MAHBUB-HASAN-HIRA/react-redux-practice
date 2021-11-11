import React from 'react';

const FoodCard = ({ food, passProps }) => {
    const buttonName = food.name.split(' ')[0];
    return (
        <div className='food_card'>
            <h1>Do you want: {food.name}?</h1>
            <h4>Total Item: {food.quantity}</h4>
            <h4>Item Price: ${food.price}</h4>
            <form action="" onSubmit={(e) => passProps.handleSubmit(e, food)}>
                <input onChange={e => passProps.setFoodNum(e.target.value)} type="number" placeholder='' min="1" /><br />
                <button type='submit'>Buy {buttonName}</button>
            </form>
        </div>
    );
};

export default FoodCard;