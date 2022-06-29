import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "./MainSlice";

const store = configureStore({
    reducer: {
        main: MainSlice
    }
})
window.store = store
export default store