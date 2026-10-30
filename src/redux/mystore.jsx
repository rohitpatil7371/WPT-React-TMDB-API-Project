import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./slices/cartSlice";
import searchReducer from "./slices/searchSlice";

const mystore = configureStore({
    reducer: {cart:cartReducer,search:searchReducer},
});


export default mystore;