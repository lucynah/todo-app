import React from "react";
import PropTypes from "prop-types";

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
            <div>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="enter task" value={this.state.newTodoName} onChange={this.onChange}>
                    </input>
                    <button type="submit">Add</button>
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