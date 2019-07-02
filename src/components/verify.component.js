import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';


export default class EditTodo extends Component {

     constructor(props) {
        super(props);

        // this.onChangeTitle = this.onChangeTitle.bind(this);
        // this.onChangeDescription = this.onChangeDescription.bind(this);
        // this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        
      

        // this.state = {
        //     title: '',
        //     description: '',
        //     todo_priority: '',
        //     todo_completed: false,
           
        // }
    }

    
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Verify Astro account</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        
                        <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>ID Number</Form.Label>
                        <Form.Control as="select">
                          <option>MyKad number</option>
                          <option>Old NRIC number</option>
                          <option>Passport number</option>
                          <option>Army ID number</option>
                          <option>Police ID number</option>
                          <option>Navy ID number</option>
                        </Form.Control>
                      </Form.Group>
                       <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Control type="text" placeholder="E.g. 908790678546" />
                       </Form.Group>
                       <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Account / Smartcard Number</Form.Label>
                        <Form.Control type="text" placeholder="E.g. 8374474979" />
                       </Form.Group>
                       <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Remember me" />
                       </Form.Group>

                    </div>
                    
                   
                    
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="CANCEL" className="btn btn-secondary" /> &nbsp;
                        <input type="submit" value="SUBMIT" className="btn btn-primary" />
                  </div>
                </form>
            </div>
        )
    }
}