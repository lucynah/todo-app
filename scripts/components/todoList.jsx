import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <ul>
                {
                    this.props.items.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </div>
    }
}

TodoList.propTypes = {
    items: PropTypes.array
};
