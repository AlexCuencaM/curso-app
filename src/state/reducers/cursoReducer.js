import { types } from "../types";

export const cursoReducer = (state = {}, action) =>{
    switch (action.type) {
        case types.results:
            return [
                ...action.payload
            ]
    
        default:
            return state;
    }
}