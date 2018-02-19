import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import TodoList from "./todoList.jsx";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newToDo: '',
            items: []
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="enter task" value={this.state.newToDo} onChange={this.onChange}>
                    </input>
                    <button type="submit">add</button>
                </form>
                <TodoList items={this.state.items} />
            </div>
        )
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({
            newToDo: '',
            items: [...this.state.items, this.state.newToDo]
        });
    }

    onChange(event) {
        this.setState(
            {
                newToDo: event.target.value
            }
        );
    }
}