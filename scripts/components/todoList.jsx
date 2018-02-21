import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import Todo from "./todo.jsx";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return <div>
            <ul>
                {this.props.items.map((item, index) => <li key={index}>
                    <Todo todo={item} onDelete={() => { }} onChange={() => { }} />
                </li>)}

            </ul>
        </div>
    }
}

Todo.PropTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        isDone: PropTypes.bool.isRequired
    })).isRequired
}