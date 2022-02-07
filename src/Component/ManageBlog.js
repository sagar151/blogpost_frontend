import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import AddBlogForm from "./AddBlogForm";
import { createPost, updatePost } from "../Action/BlogAction";
const ManageBlog = ({createPost,updatePost,post}) => {
  const [post, setpost] = useState(post);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    post._id
      ? updatePost(post._id, title, body)
      : createPost(title, body);
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

  const post =
    id && state.length > 0
      ? state.find((post) => post._id === id)
      : { id: null, title: "", body: "" };
  return { post };
};
const mapDispatchToProps = {
  createPost: createPost,
  updatePost: updatePost,
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageBlog);
