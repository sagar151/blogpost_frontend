import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updatePost, displayPost, deletePost } from "../Action/BlogAction";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
const AddBlogForm = (props) => {
  // useEffect(()=>{
  //     props.displayPost()
  // },[])
  console.log("id", props.post._id);
  return (
    <div>
      {/* <form onSubmit={props.handleSubmit}>
        <h3>{props.post._id ? "Edit" : "Save"} post</h3>
        <br />
        <div className="form-group row">
          <label htmlFor="inputText3" className="col-sm-2 col-form-label">
            Title
          </label>

          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputText3"
              placeholder="Enter Blog Title"
              value={props.title}
              onChange={(e) => props.setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputText3" className="col-sm-2 col-form-label">
            Body
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              rows="5"
              cols="6"
              placeholder="Enter Blog body"
              value={props.body}
              onChange={(e) => props.setBody(e.target.value)}
            ></textarea>
          </div>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          {props.post._id ? "Update" : "Save"}
        </button>
      </form> */}
      <h3>{props.post._id ? "Edit" : "Save"} post</h3>
      <Form onSubmit={props.handleSubmit}>
      <table>
        <tr>
          <th>
            <Label for="exampleEmail">Title</Label>
          </th>
          <td>
            <Input
              type="text"
              name="text"
              id="exampletext"
              placeholder="Enter title"
              value={props.title}
              onChange={(e) => props.setTitle(e.target.value)}
            />
          </td>
        </tr>
        <br />
        <tr>
          <th>
            <Label for="exampleText">Body</Label>
          </th>
          <td>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              placeholder="Enter body"
              rows="10"
              cols="250"
              value={props.body}
              onChange={(e) => props.setBody(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <Button type="submit" className="btn btn-primary">
              {props.post._id ? "Update" : "Save"}
            </Button>
          </td>
        </tr>
      </table>
      </Form>
    </div>
  );
};

export default AddBlogForm;
