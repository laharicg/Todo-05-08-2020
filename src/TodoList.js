/*import React from 'react'
import "./bootstrap/dist/css/bootstrap.css"

class TodoList extends React.Component {
    items= ["Eat","Sleep","Code"];

    render = () => {
        return (
            <div>
            <ul className="list-group">
                {this.items.map((item) => {
                    return <li className="list-group-item">{item}</li>
                })}
            </ul>
            </div>
        );
    
    };

}

export default TodoList;
*/

import React, { Component } from "react";
import AddTodo from './AddTodo';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TodoList extends Component {
state = {
   todos: [
     {Id:1 ,  Title: 'Eat' },
     {Id:2 ,  Title: 'Code' }
   ]
};

addToDo = (todo) => {
    this.setState({
        todos: [...this.state.todos, todo]
    });
};

deleteToDo = (todo) => {
    const filteredItems = this.state.todos.filter(x => x.Title !== todo.Title);
    this.setState({
         todos: filteredItems
    });
};

render() {
    return (
         <div className="container p-3">
            <AddTodo onAdd={this.addToDo}></AddTodo>    
            <br></br>   
            <br></br>
                <table className="table" style={{textAlign: "center"}}>
                   <thead>
                     <tr>
                        <th>Id</th>
                        <th>Task</th>
                        <th>Delete</th>
                     </tr>
                   </thead>
                   <tbody>
                       {this.state.todos.map(x => {
                         return (
                              <tr key={x.Id}>
                              <td>{x.Id}</td>
                              <td>{x.Title}</td>
                              <td>
                              <button className="btn btn-danger" onClick={() => this.deleteToDo(x)}>
                                Delete
                              </button>
                              </td>
                              </tr>
                          );
                       })}
                    </tbody>
                </table>
          </div> 
      );
   }
}