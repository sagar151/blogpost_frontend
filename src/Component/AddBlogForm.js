import React from "react";
import { Button, Form, Label, Input } from "reactstrap";
const AddBlogForm = ({post,handleSubmit,title,setTitle,setBody,body}) => {
  return (
    <div>
      <h3>{post._id ? "Edit" : "Save"} post</h3>
      <Form onSubmit={()=>handleSubmit()}>
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <Button type="submit" className="btn btn-primary">
              {post._id ? "Update" : "Save"}
            </Button>
          </td>
        </tr>
      </table>
      </Form>
    </div>
  );
};

export default AddBlogForm;
