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
    const item = state.product.find((item)=>item?.id===action.payload?.id)

    if(item){
        item.quantite += action.payload?.quantity
    }else{
        state.product.push({...action.payload,quantite:action.payload?.quantity})
    }
}    
}


})
  
export default appSlice.reducer;
