import {createStore}  from 'redux'
import {createSlice,configureStore} from '@reduxjs/toolkit'


const counterInitialState={counter:0}

const Slice=createSlice({
    name:'counter',
    initialState:counterInitialState,
    reducers:{
        increment(state,action){
            state.counter=state.counter+action.payload
        },
        decrement(state,action){
            state.counter=state.counter-action.payload
        }
    }
})


const authenticationState={isAuthenticated:false}

const auth=createSlice({
    name:'authentication',
    initialState:authenticationState,
    reducers:{
        isLogin(state){
            state.isAuthenticated=true
        },
        isLogout(state){
            state.isAuthenticated=false
        }
    }
})





const store=configureStore({
    reducer:{counter:Slice.reducer,auth:auth.reducer}
})


export const Actions=Slice.actions
export const authActions=auth.actions
export default store