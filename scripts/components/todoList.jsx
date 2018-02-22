import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import Todo from "./todo.jsx";

export default class TodoList extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }
    render() {
        return <div>
            <ul>
                {this.props.items.map((item, index) => <li key={index}>
                    <Todo todo={item} onDelete={this.onDelete} onChange={this.onChange} />
                </li>)}

            </ul>
        </div>
    }
    onChange(todo) {

        this.props.onTodoChange(todo);
    }

    onDelete(todo) {
        console.log("todolist delete todo", todo);

        this.props.onDeleteClick(todo);
    }

}

TodoList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        isDone: PropTypes.bool.isRequired
    })).isRequired,
    onTodoChange: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
}
