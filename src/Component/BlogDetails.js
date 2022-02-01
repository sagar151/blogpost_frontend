import React, {useEffect} from "react";
import {connect} from "react-redux";
// import {useHistory} from "react-router";
import {updatePost, deletePost, displayPost} from "../Action/BlogAction";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import {Link} from "react-router-dom";
// import {displayPost} from "../Action/BlogAction";
import moment from "moment";
import  "./BlogDetails.css"

const  BlogDetails=(props)=>{
    useEffect(()=>{
        props.displayPost()
    },[])

    // const history=useHistory()

    const handleEdit=()=>{
        props.history.push("/add/"+props.post._id)
    }
    const  handleDelete = () => {
        console.log("delete post ",props.post._id)
        props.deletePost(props.post._id)
        props.history.push("/")
    }
    const  post=props.post?
        (
            <div>
            <br/>
           <div className="card">

               <h2>{props.post.title}</h2>


               <h4>Posted On: {moment(props.post.date).format("DD/MM/YY | hh:mm:ss")}</h4>

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
    console.log("id",id)
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