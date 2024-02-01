import {createSlice} from '@reduxjs/toolkit'; 

const initialState = {
    name:'',
    dolarReq:[],
    spinnerLoader:false
}


/**
 * method to make action by a reducer simplify with createSlice
 */
export const dolarSlice = createSlice({
    name:'dolar',
    initialState,
    reducers: { 
    /**
     * 
     * @param {*} state 
     * @param {*} action 
     * add dolar to a list
     */
        addList: (state, action) => {

         state.dolarReq = action.payload ;
         state.spinnerLoader = false;
        
        },
        deleteRegister: (state,action) => {

         state.dolarReq = action.payload;
        },
        editRegister: (state,action) => {

         state.dolarReq = action.payload;
        },
        spinnerLoad: (state,action) => {

         state.spinnerLoader = action.payload;
        },
      
    },
});

export const {addList,deleteRegister,spinnerLoad,editRegister} = dolarSlice.actions; 
export default dolarSlice.reducer;