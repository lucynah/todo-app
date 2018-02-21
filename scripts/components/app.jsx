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
        this.onDoneClick = this.onDoneClick.bind(this);
    }

    render() {
        return (
            <div>
                <AddTodo onAdd={this.onSubmit} />
                <TodoList items={this.state.items} />
            </div>
        )
    }

    onDeleteClick() {
        let newItems = this.state.items.slice();
        newItems.splice(index, index);
        this.setState(
            {  }
        )
    }

    onDoneClick() {

    }

    onSubmit(newTodo) {
        this.setState({
            items: [...this.state.items, { name: newTodo, isDone: false }]
        });
    }
}
