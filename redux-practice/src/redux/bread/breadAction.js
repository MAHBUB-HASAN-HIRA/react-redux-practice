import { BUY_BREAD } from "./breadType";

export const buyBread = (breadNumber = 1) => {
    return {
        type: BUY_BREAD,
        payload: {
            breadNumber: breadNumber,
        }
    }
};