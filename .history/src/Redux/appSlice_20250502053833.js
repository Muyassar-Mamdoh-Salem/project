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
addToCart:(state,action)=>{
    const item = state.product.find((item)=>item?.id===action.payload?.id)
    const item = state.product.find((item)=>item.id===action.payload.id)

    if(item){
        item.quantite += action.payload?.quantity
    }else{
        state.product.push({...action.payload,quantite:action.payload?.quantity})
    }
(item) ? item.quantite += action.payload.quantity : (state.product.push(action.payload) )
}    
/*******  82ce3329-356c-4b03-95f1-b18ebd1fb13e  *******/
}


})
  
export default appSlice.reducer;
