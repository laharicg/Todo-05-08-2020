import React from 'react'
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
