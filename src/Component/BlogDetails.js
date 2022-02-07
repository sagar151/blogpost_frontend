import React, {useEffect} from "react";
import {connect} from "react-redux";
import {updatePost, deletePost, displayPost} from "../Action/BlogAction";
import moment from "moment";
import  "./BlogDetails.css"

const  BlogDetails=({displayPost,history,deletePost,post})=>{
    useEffect(()=>{
        displayPost()
    },[])

    const handleEdit=()=>{
        history.push("/add/"+post._id)
    }
    const  handleDelete = () => {
        console.log("delete post ",post._id)
        deletePost(post._id)
        history.push("/")
    }
    const  post=post?
        (
            <div>
            <br/>
           <div className="card">

               <h2>{post.title}</h2>


               <h4>Posted On: {moment(post.date).format("DD/MM/YY | hh:mm:ss")}</h4>

               <p>
                   posted by: anoynomus user
               </p>
               <p>{props.post.body}</p>
           </div>
                <br/>
                <button type="button" className="btn btn-primary" onClick={handleDelete} >Delete</button>
                {" "}
                <button type="button" className="btn btn-success" onClick={handleEdit} >Edit</button>
            </div>
        )
        :
        (<div className="align-content-center">Loading post...</div>)
    return(
       
        <div className="container">{post}</div>
    
    )
}
const mapStateToProps=(state,ownProps)=>{
    let id=ownProps.match.params.post_id
    return{
        post:state.find(post=>post._id===id)
    }
}
const mapDispatchToProps={
    updatePost:updatePost,
    deletePost:deletePost,
    displayPost:displayPost

}

export  default  connect(mapStateToProps,mapDispatchToProps)(BlogDetails)