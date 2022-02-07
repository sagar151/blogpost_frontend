import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBlogForm  from "./Component/AddBlogForm"
import BlogDetails from "./Component/BlogDetails"
import ManageBlog from "./Component/ManageBlog";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import {  Route, Switch } from "react-router";
function App() {
  return (
      <div className="App">
        <NavBar/>

          <Switch>
              <Route exact path="/" component={Home}/>
              <Route  path="/details/:post_id" component={BlogDetails}/>
              <Route  path="/add/:post_id" component={ManageBlog}/>
              <Route  path="add" component={ManageBlog}/>
          </Switch>


      </div>
  )
}

export default App;
