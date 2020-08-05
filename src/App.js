import React from "react";
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"



function App() {
    return (
        <div class="container p-3">
            <h1>Todo App</h1>
            <TodoForm/>
           
            <TodoList/>
        </div>
    );
}

export default App;