import React from "react";
import blogActionType from "../Action/ActionType";
const  reducer=(state=[],action)=>{
    switch (action.type){
        case blogActionType.ADD_BLOG:
            return [...state,action.payload]
        case  blogActionType.UPDATE_BLOG:
            return action.payload
        case  blogActionType.DELETE_BLOG:
            return action.payload
        case  blogActionType.DISPLAY_BLOG:
            return action.payload
        default:
            return  state
    }
}
export  default  reducer