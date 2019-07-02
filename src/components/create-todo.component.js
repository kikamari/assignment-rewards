import React, { Component } from 'react';
import axios from 'axios';
import DefaultImg from '../assets/default-img.jpg';

// base api url being used
const API_URL = "http://localhost:3000";

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
      

        this.state = {
            title: '',
            description: '',
            todo_completed: '',
            multerImage: DefaultImg,
        }
    }

    setDefaultImage(uploadType) {
    if (uploadType === "multer") {
      this.setState({
        multerImage: DefaultImg
      });
    } 
  }

  // function to upload image once it has been captured
  // includes multer and firebase methods
  uploadImage(e, method) {
    let imageObj = {};

    if (method === "multer") {

      let imageFormObj = new FormData();

      imageFormObj.append("imageName", "multer-image-" + Date.now());
      imageFormObj.append("imageData", e.target.files[0]);

      // stores a readable instance of 
      // the image being uploaded using multer
      this.setState({
        multerImage: URL.createObjectURL(e.target.files[0])
      });

      axios.post(`${API_URL}/image/uploadmulter`, imageFormObj)
        .then((data) => {
          if (data.data.success) {
            alert("Image has been successfully uploaded using multer");
            this.setDefaultImage("multer");
          }
        })
        .catch((err) => {
          alert("Error while uploading image using multer");
          this.setDefaultImage("multer");
        });
    }
  }

  
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

     onChangeTodoCompleted(e) {
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }

   
    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Title: ${this.state.title}`);
        console.log(`Description: ${this.state.description}`);
        console.log(`Publish: ${this.state.todo_completed}`);
       
        const newTodo = {
            title: this.state.title,
            description: this.state.description,
            todo_completed: this.state.todo_completed,
           
        };

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));
        
        this.setState({
            title: '',
            description: '',
            todo_completed: '',
           
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Manage Rewards</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <textarea 
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                />
                    </div>
                    
                    <div className="image-container">
                      <div className="process">
                        <h4 className="process__heading">Process: Using Multer</h4>
                        <p className="process__details">Upload image to a node server, connected to a MongoDB database, with the help of multer</p>

                        <input type="file" className="process__upload-btn" onChange={(e) => this.uploadImage(e, "multer")} />
                        <img src={this.state.multerImage} alt="upload-image" className="process__image" />
                      </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeTodoCompleted}
                                checked={this.state.todo_completed}
                                value={this.state.todo_completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Publish
                        </label>                        
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}