import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:["Apples","Banana"] //initialising an empty cart 
    },
    reducers:{ //reducer is that function which updates the value in the store
        addItem:(state,action)=>{ //the reducer takes a state and action, the state always points to the previous state
            state.items.push(action.payload) 
        }
    }
})