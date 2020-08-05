import React from "react";
import "./bootstrap/dist/css/bootstrap.css"

function TodoForm() {
    return (
        <div className="form-group">
            <input type="text" className="form-control"></input>
            <br></br>
            <button className="btn btn-primary btn-block">Add</button>
        </div>
    );
}

export default TodoForm;