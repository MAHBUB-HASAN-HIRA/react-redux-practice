import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyBurger } from '../../../redux/index';

const Burger = () => {
    const [buyNumber, setBuyNumber] = useState(1)
    const burger = useSelector(state => state.burger.numberOfBurger);
    const disPatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        if (burger >= buyNumber) {
            disPatch(buyBurger(buyNumber));
        }
        else {
            alert('I have not enough Burger');
        }
    }

    return (
        <section className='product_container'>
            <h2>Do you want Burger?</h2>
            <h3>Total Burger: {burger}</h3>
            <form action="" onSubmit={handleSubmit}>
                <input onChange={(e) => setBuyNumber(e.target.value)} name='burger' type="number" placeholder='' min='1' /><br />
                <button type='submit'>Buy Burger</button>
            </form>
        </section>
    );
};

export default Burger;