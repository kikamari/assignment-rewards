import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default class TodosList extends Component {

	 constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
                console.log(this.state.todos);
            })
            .catch(function (error){
                console.log(error);
            })
    }


   render() {
        return (
            <Container>
                <h2>Exclusive rewards for Astro subscribers</h2>
                <br/>
                <h4>REWARDS</h4>
                <br/>
                <Row>
                {this.state.todos.map((currentTodo, i) => (
                    <Col lg={4} md={4} sm={6} xs={12} className="block-example border border-light" key={i}>
                        <a className="navbar-brand" href={"/details/"+currentTodo._id} target="_blank">
                            <img src={currentTodo.imageName} className="img-fluid" alt={currentTodo.title} />
                        </a>
                        {currentTodo.title} 
                    </Col>
                ))}
                </Row>
               
            </Container>
        )
    }
}