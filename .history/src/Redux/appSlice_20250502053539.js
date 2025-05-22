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

addToCart:(state,action)=>{
    const item = state.product.find((item)=>item.id===action.payload.id)

(item) ? item.quantite+=auantite
}    
}


})
  
export default appSlice.reducer;
