import { types } from "../types/types";

const initialState = [];
export const cursoReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.cursoAdd:
            return [...initialState, state]
    
        default:
            return state;
    }
}