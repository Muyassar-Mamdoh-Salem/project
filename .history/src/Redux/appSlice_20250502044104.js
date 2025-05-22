import { createSlice } from "@reduxjs/toolkit";

const initialState ={

product:[],

}
const appSlice = createSlice({

name :'Ecommerce' ,

//state
initialState,

//Reducer 
reducers:{

addToCart:(state,action)
=>{
    const item = state.products.find
}    
}


})
  
export default appSlice.reducer;
