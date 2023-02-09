import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:["Apples","Banana"] //initialising an empty cart 
    },
    reducers:{ //reducer is that function which updates the value in the store
        addItem:(state,action)=>{ //the reducer takes a state and action, the state always points to the previous state
            state.items.push(action.payload)  //this function doesn't return anything, many people make this mistake
        },
        clearCart: (state)=>{
            state.items =[]
        },
        removeItems(state,action){
            state.items.pop();
        }
    }
})

export const { addItem, removeItems, clearCart } = cartSlice.actions; //named import, this is just the syntax, there's no explanation why Redux develeopers devised this syntax

export default cartSlice.reducer; //again, this is one of those weird syntaxes of Redux which makes it tough for programmers, this is reducer (not reducers), reducer is a single big  object in which all the reducers are wrapped

