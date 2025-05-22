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

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Adds a product to the cart or updates the quantity if it already exists.
 * 
 * @param {Object} state - The current state of the store.
 * @param {Object} action - The action object containing the product details.

/*******  b9fd45b0-8a8e-44e6-a22c-7c5ae310541e  *******/
addToCart:(state,action)=>{
    const item = state.product.find((item)=>item.id===action.payload.id)

(item) ? item.quantite += action.payload.quantity : (state.product.push(action.payload) )
}    
}


})
  
export default appSlice.reducer;
