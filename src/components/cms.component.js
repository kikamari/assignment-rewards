import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Todo = props => (
    <tr>
        <td>{props.todo.title}</td>
        
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default class Cms extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.handlePageChange = this.handlePageChange.bind(this);
    }

     handlePageChange() {
       window.location = "http://localhost:3000/create";
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div>
               <div className="form-group">
                <input type="submit" value="Create" className="btn btn-primary" onClick={this.handlePageChange}/>
               </div>

                <h3>Rewards List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Title</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}