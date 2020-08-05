import React, { Component } from "react";
export default class AddTodo extends Component {
    state = { Id: "" ,
              Title: ""
            };
    handleIdChange = (event) => {
        this.setState({
            Id: event.target.value
        });
    }

    handleTitleChange = (event) => {
        this.setState({
            Title: event.target.value
        });
    }
    handleToDoSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd({
            Id: this.state.Id    ,        
            Title: this.state.Title
            
        });
        this.setState({
            Id:"",
            Title: ""
            
        });
    };

    render() {
        return (
            <div className="container p-3">
                <h3 style={{textAlign: "center"}}>
                    ToDo App
                </h3>
                <br></br>
                <form onSubmit={this.handleToDoSubmit} >
                <div className="form-group" >
                        <input value={this.state.Id} onChange={this.handleIdChange} className="form-control" placeholder="Enter Id" />
                    </div>
                    
                    <div className="form-group" >
                        <input value={this.state.Title} onChange={this.handleTitleChange} className="form-control" placeholder="Enter Todo"  />
                    </div>
                    <button type="submit" className="form-control btn btn-primary" >Add</button>
                </form>
            </div>
        );
    }
}