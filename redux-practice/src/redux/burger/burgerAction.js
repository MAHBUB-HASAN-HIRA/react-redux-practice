import { BUY_BURGER } from './burgerType';

export const buyBurger = (burgerNumber = 1) => {
    console.log(BUY_BURGER);
    
    return {
        type: BUY_BURGER,
        payload: {
            burgerNumber: burgerNumber,
        },
    }
};