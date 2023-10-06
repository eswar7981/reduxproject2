import {createStore}  from 'redux'
import {createSlice} from '@reduxjs/toolkit'


const initialState={counter:0}

createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state,action){
            state.counter=state.counter+action.amount
        },
        decrement(state){
            state.counter=state.counter-action.amount
        }
    }
})

const counterReducer=(state=initialState,action)=>{
    if(action.type==='increment'){
        return{
            counter:state.counter+action.amount
        }
    }

    if(action.type==='decrement'){
        return{
            counter:state.counter-action.amount
        }
    }

  

    if(action.type==='decrementby5'){
        return{
            counter:state.counter-5
        }
    }

    return state
}



const store=createStore(counterReducer)

export default store