import React from "react";
import {createStore,applyMiddleware} from "redux";
import reducer from "../Reducer/reducer";
import thunk from  "redux-thunk"
const  store=createStore(reducer,applyMiddleware(thunk))
store.subscribe(()=>{
    console.log("state",store.getState())
})
export default  store