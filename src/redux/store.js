import { configureStore } from "@reduxjs/toolkit";
import headerNavReducer from './slices/header-nav-slice'

export const store = configureStore({
    reducer: {
        headerNav: headerNavReducer,
    }
})