import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {buyBread} from '../../../redux/index';

const Bread = () => {
    const [breadNum, setBreadNum] = useState(1);
    const bread = useSelector(state => state.bread.numberOfBread);
    const disPatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        if (breadNum <= bread) {
            disPatch(buyBread(breadNum))
        } else {
            alert('I have not enough Burger');
        }
    }
    return (
        <section className='product_container'>
            <h1>Do you want Bread?</h1>
            <h3>Total Bread: {bread}</h3>
            <form action="" onSubmit={handleSubmit}>
                <input onChange={e => setBreadNum(e.target.value)} type="number" placeholder='' min="1" /><br />
                <button type='submit'>Buy Bread</button>
            </form>
        </section>
    );
};

export default Bread;