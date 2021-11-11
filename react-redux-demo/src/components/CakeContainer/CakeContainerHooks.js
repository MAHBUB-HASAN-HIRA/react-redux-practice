import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../../redux/index';

const CakeContainerHooks = () => {
    const numberOfCake = useSelector(state => state.cake.numberOfCake);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number Of Cake From Hooks: {numberOfCake}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
};

export default CakeContainerHooks;