import React, { useEffect } from "react";
import { displayPost } from "../Action/BlogAction";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";

import { Jumbotron, Button } from "reactstrap";

import { connect } from "react-redux";
import { bgcolor } from "@mui/system";
const Home = (props) => {
  useEffect(() => {
    props.displayPost();
  }, []);
  {
    console.log("data", props.post);
  }

  return (
    <div>
      <h4>Home Page</h4>
      <br />

      {props.post ? (
        props.post.map((result) => {
          return (
            <>
          
              <div>
                <Jumbotron>
                  <h1 className="display-3">{result.title}</h1>
                  <p className="lead">{result.body.substr(0, 150)}</p>
                  <Link to={"/details/" + result._id}>Read more...</Link>{" "}
                  <hr className="my-2" />
                  <p className="lead">
                    <p style={{ textAlign: "left" }}>
                      Posted On:{" "}
                      {moment(result.date).format("d-m-yyyy|h:mm:ss")}
                    </p>
                  </p>
                </Jumbotron>
              </div>
            </>
          );
        })
      ) : (
        <h4>No post..</h4>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    post: state,
  };
};
const mapDispatchToProps = {
  displayPost: displayPost,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
