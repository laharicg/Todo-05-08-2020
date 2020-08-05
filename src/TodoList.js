import React, { Component } from "react";
import AddTodo from './AddTodo';
import axios from "axios";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class TodoList extends Component {
state = {
   todos: [],
}; 
componentDidMount = () => {
    axios
    .get("http://localhost:3001/tasks")
    .then((response) => {
        this.setState({
            todos:response.data,
        });
    })
    .catch((err) => console.log(err));

}; 
/*
addToDo = (todo) => {
    axios
    .post("http://localhost:3001/tasks", { Title: todo})
    .then((response) => {
        this.setState({
            todos: [...this.state.todos,response.data],
        });
    });
}
*/
addToDo =(todo) =>{
    const id =Math.floor(Math.random()*100)+1;
    const str ={Id:id,Title:todo}
    this.setState({
todos :[...this.state.todos,str]

})
axios.post('http://localhost:3001/tasks', str)
        .then((response) => {
          console.log(response);
          console.log(response.data);
        })

 
}

deleteToDo =(id) => {
    const update =[...this.state.todos].filter(item =>{
        return item.Id !== id;
       
    }) 

    this.setState({todos:update})
    axios.delete(`http://localhost:3001/tasks/${id}`)
.then(response => {
 console.log(response);
 console.log(response.data);
})
}
/*
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
*/
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