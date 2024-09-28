import { createSlice } from "@reduxjs/toolkit";



const headerNavSlice = createSlice({
    name: 'headerNav',
    initialState: {
        home: true,
        shop: false,
        blog: false,
        contact: false
    },
    reducers: {
        setHome(state){
            state.home = true 
            state.shop = false
            state.blog = false 
            state.contact = false
        },
        setShop(state){
            state.home = false 
            state.shop = true
            state.blog = false 
            state.contact = false
        },
        setBlog(state){
            state.home = false
            state.shop = false
            state.blog = true  
            state.contact = false
        },
        setContact(state){
            state.home = false
            state.shop = false
            state.blog = false 
            state.contact = true
        }
    }
})

export const {setHome, setShop, setBlog, setContact} = headerNavSlice.actions

export default headerNavSlice.reducer