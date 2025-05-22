import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./appSlice"
expoconst store =  configureStore({
    reducer:{appReducer} ,   

});