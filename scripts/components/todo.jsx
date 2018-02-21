import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default class Todo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <div>
                <input type="checkbox" checked={this.props.todo.isDone} onChange={this.onChange} />
                <label>{this.props.todo.name}</label>
                <button onClick={this.onDelete}>X</button>
            </div>
        )
    }

    onDelete(e) {
        console.log("delete!");

        this.props.onDelete(this.props.todo);
    }

    onChange(e) {
        console.log("change!");

        this.props.onChange(this.props.todo);
    }
}

Todo.propTypes = {
    todo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        isDone: PropTypes.bool.isRequired
    }),
    onDelete: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};
