import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const bttnStyle = {
    float: "right",
    textAlign: "center",
    lineHeight: "30px",
    height: "30px",
    width: "30px",
    padding: "0",
    fontSize: "10px"
};

const todoStyle = {
    height: "30px", 
    lineHeight: "30px"
};

const checkboxStyle = {
    transform: "scale(1.5)",
    position: "relative",
    top: "3px"
};

export default class Todo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <div>
                <input style={checkboxStyle} type="checkbox" value={this.props.todo.isDone} onChange={this.onChange} />
                <label style = {todoStyle} >{this.props.todo.name}</label>
                <button style = {bttnStyle } onClick={this.onDelete}>X</button>
            </div>
        )
    }

    onDelete(e) {
        this.props.onDelete(this.props.todo);
    }

    onChange(e) {
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
