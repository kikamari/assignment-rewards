import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ModalHeader from 'react-bootstrap/ModalHeader';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export default class EditTodo extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
      
        
        this.state = {
            title: '',
            description: '',
            todo_priority: '',
            todo_completed: false,
            imageName: '',
            show: false,
        }
    }

    handleClose() {
     this.setState({ show: false });
    }

    handleShow() {
     this.setState({ show: true });
    }

    handlePageChange() {
       window.location = "http://localhost:3000/verify";
    }

   
    componentDidMount() {
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    title: response.data.title,
                    description: response.data.description,
                    todo_priority: response.data.todo_priority,
                    todo_completed: response.data.todo_completed,
                    imageName: response.data.imageName
                }) 
              
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
      const html = this.state.description;

        return (

            <div>
             <div> <img src={this.state.imageName} className="img-fluid" alt={this.state.title}/></div>
            
            <div>
             {this.state.title}
            </div>

            <div>{ ReactHtmlParser(html) }</div>
            
            <div>
             This offer is valid for 60 minutes uppon redemption.
            </div>
           

           <Button variant="primary" onClick={this.handleShow}>
             Redeem
           </Button>

       
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Redeem this offer now?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do note that you will only have 60 minutes to use the offer once you proceed.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              CANCEL
            </Button>
            <Button variant="primary" onClick={this.handlePageChange}>
              PROCEED
            </Button>
          </Modal.Footer>
        </Modal>

            
            </div>
        )
    }
}