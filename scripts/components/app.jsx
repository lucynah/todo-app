import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import TodoList from "./todoList.jsx";
import AddTodo from "./addTodo.jsx";
import Todo from "./todo.jsx";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newToDo: '',
            items: []
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onTodoChange = this.onTodoChange.bind(this);
    }

    render() {
        return (
            <div>
                <AddTodo onAdd={this.onSubmit} />
                <TodoList items={this.state.items} onTodoChange={this.onTodoChange} onDeleteClick = {this.onDeleteClick}/>
            </div>
        )
    }

    onTodoChange(todo) {
        const indexOfTodo = this.state.items.indexOf(todo);
        
        let newItems = this.state.items.slice().map(todo => {
            return Object.assign({}, todo);  
        });

        newItems[indexOfTodo].isDone = !newItems[indexOfTodo].isDone;

        this.setState({
            items: newItems
        });
    }

    onDeleteClick(todo) {
        const indexOfTodo = this.state.items.indexOf(todo);

        let newItems = this.state.items.slice();
        newItems.splice(indexOfTodo, 1);
        this.setState(
            { 
                items: newItems
             }
        )
    }

    onSubmit(newTodo) {
        this.setState({
            items: [...this.state.items, { name: newTodo, isDone: false }]
        });
    }
}
