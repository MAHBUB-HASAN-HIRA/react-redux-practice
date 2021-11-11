import { BUY_ICE_CREAM } from './iceCreamType';

export const buyIceCream = (number = 1, name) => {
    return {
        type: BUY_ICE_CREAM,
        payload: {
            number: number,
            name: name
        },
    }
}