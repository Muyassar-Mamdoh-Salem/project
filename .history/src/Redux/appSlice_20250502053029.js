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

/*************  ✨ Windsurf Command 🌟  *************/
addProductToCart: (state, action) => {
  const productToAdd = state.product.find(
    (product) => product.id === action.payload.id
  );
  if (productToAdd) {
    state.product = state.product.map((product) =>
      product.id === action.payload.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  } else {
    state.product.push({ ...action.payload, quantity: 1 });
  }
},
addToCart:(state,action)
=>{
    const item = state.product.find((item)=>item.id===action.payload.id)
}    
/*******  5496c164-6a0e-4296-9474-e68ae611eb3e  *******/
}


})
  
export default appSlice.reducer;
