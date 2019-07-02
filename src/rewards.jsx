import React, { Component } from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import logo from "./logo.png";

export default class Rewards extends Component { 
   state = {
   	isLoading: true,
    todos: [],
    error: null
   };

  //  fetchUsers() {
  //   fetch(`https://jsonplaceholder.typicode.com/users`)
  //     .then(response => response.json())
  //     .then(data =>
  //       this.setState({
  //         users: data,
  //         isLoading: false,
  //       })
  //     )
  //     .catch(error => this.setState({ error, isLoading: false }));
  // }	

   // componentDidMount() {
   //  fetch('http://jsonplaceholder.typicode.com/todos')
   //  .then(response => response.json())
   //  .then(data => {
   //    this.setState({
   //     todos: data,
   //     isLoading: false,
   //    })
   //    console.log(this.state.todos)
   //  })
   //  .catch(console.log)
   // }

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

	    		
	       
       		</div>
       	</Router>

      );
   }
}