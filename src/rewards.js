import React, { Component } from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import Details from "./components/details.component";
import Verify from "./components/verify.component";
import Cms from "./components/cms.component";

import logo from "./logo.png";

export default class Rewards extends Component { 
   state = {
   	isLoading: true,
    todos: [],
    error: null
   };

 
   render() { 
     
      return (
      	<Router>
	    	<div className="container">
          <a className="navbar-brand" href="http://localhost:3000" target="_self">
            <img src={logo} width="100" height="50" alt="Astro Rewards" />
          </a>
	    		<br/>
		      <br/>
		        
		        <Route path="/" exact component={TodosList} />
		        <Route path="/edit/:id" component={EditTodo} />
		        <Route path="/create" component={CreateTodo} />
            <Route path="/details/:id" component={Details} />
            <Route path="/verify" component={Verify} />
            <Route path="/cms" component={Cms} />

	    		<footer className="app-footer">
            <div style={{padding: 30}}>
              Copyright &copy; 2019. Measat Broadcast Network System Sdn. Bhd. (240064-A). All Rights Reserved.
            </div>
            
          </footer>
	       
       		</div>

       	</Router>


      );
   }
}