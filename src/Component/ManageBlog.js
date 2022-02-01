import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import AddBlogForm from "./AddBlogForm";
import { createPost, updatePost } from "../Action/BlogAction";
const ManageBlog = (props) => {
  const [post, setpost] = useState(props.post);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // console.log("post state",post._id)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("title -> " + title + " body -> " + body);
    // console.log("props id handlesubmit",post._id)
    post._id
      ? props.updatePost(post._id, title, body)
      : props.createPost(title, body);
    // props.history.push("/")
  };
  return (
    <AddBlogForm
      post={post}
      title={title}
      body={body}
      setTitle={setTitle}
      setBody={setBody}
      handleSubmit={handleSubmit}
    />
  );
};
const getPostById = (post, id) => {
  return post.find((post) => post.id === id);
};
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  console.log("manageblog id", id);
  console.log("manageblog state", state.length);
  const post =
    id && state.length > 0
      ? state.find((post) => post._id === id)
      : { id: null, title: "", body: "" };

  console.log("post after", post);
  return { post };
};
const mapDispatchToProps = {
  createPost: createPost,
  updatePost: updatePost,
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageBlog);
