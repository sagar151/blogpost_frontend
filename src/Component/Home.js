import React, { useEffect } from "react";
import { displayPost } from "../Action/BlogAction";
import { Link } from "react-router-dom";
import moment from "moment";
import { Jumbotron } from "reactstrap";
import { connect } from "react-redux";
const Home = ({post}) => {
  useEffect(() => {
    displayPost();
  }, []);
  return (
    <div>
      <h4>Home Page</h4>
      <br />

      {post ? (
        post.map((result) => {
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
