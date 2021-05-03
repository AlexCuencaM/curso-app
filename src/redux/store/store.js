import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk';
import { cursoReducer } from "../reducers/curso";
const reducers = combineReducers({
    cursos: cursoReducer
})
const store = configureStore({
    reducer: reducers,    
}, applyMiddleware(thunk))

export default store;