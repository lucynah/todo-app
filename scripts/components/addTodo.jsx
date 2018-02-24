import React from "react";
import PropTypes from "prop-types";

const inputStyle = {
    border: "none",
    width: "75%",
    padding: "10px",
    dispaly: "inline-block",
    fontSize: "16px"
}

const addBtn = {
    padding: "10px",
    width: "25%",
    background: "#d9d9d9",
    color: "#555",
    dispaly: "inline-block",
    textAlign: "center",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s"
}
const headerStyle = {
    width: "50%",
    backgroundColor: "#003566",
    padding: "30px 40px",
    color: "white",
    margin: "0 auto"

}

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            newTodoName: ""
        };
    }

    render() {
        return (
            <div style = {headerStyle}>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="enter task" style = {inputStyle} value={this.state.newTodoName} onChange={this.onChange}>
                    </input>
                    <button type="submit" style= {addBtn}>Add</button>
                </form>
            </div>
        )
    }

    onChange(event) {
        this.setState(
            {
                newTodoName: event.target.value
            }
        );
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.onAdd(this.state.newTodoName);

        this.setState({
            newTodoName: ""
        });
    }
}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
};