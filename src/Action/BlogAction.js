import blogActionType from "./ActionType";
import axios from "axios";
export const createPost=(title,body)=>{
    console.log("createpost is called")
     if (title==="" && body===""){
         console.error("enter all fields")
     }
     else {
         return (dispatch)=>{
             const url="https://editormern.herokuapp.com/add"
             axios.post(`${url}`, {title,body}).then(result=>{
                 dispatch({
                     type:blogActionType.ADD_BLOG,
                     payload:result.data,
                 })
             })
         }
     }

};
export const updatePost=(id,title,body)=>{
    return (dispatch)=>{
        const url="https://editormern.herokuapp.com/update"
        axios.post(`${url}`, {id,title,body}).then(result=>{
            dispatch({
                type:blogActionType.ADD_BLOG,
           })
        })
    }
};
export const deletePost=(id)=>{
    console.log("id",id)
    return (dispatch)=>{
        const url="https://editormern.herokuapp.com/delete"
        axios.post(`${url}`, {id:id}).then(result=>{
            dispatch({
                type:blogActionType.ADD_BLOG,
                payload:result.data,
            })
        })
    }
    window.location.push("/home")
};
export const displayPost=()=>{
    return (dispatch)=>{
        const url="https://editormern.herokuapp.com/display"
        axios.post(`${url}`).then(result=>{
            dispatch({
                type:blogActionType.DISPLAY_BLOG,
                payload:result.data,
            })
        })
    }
};