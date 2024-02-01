import {configureStore} from '@reduxjs/toolkit';
import dolarReducer from './dolarSlice';

/**
 * configured store with redux toolkit
 */
export const store = configureStore({
    reducer: { 
        dolar: dolarReducer,
    }
});