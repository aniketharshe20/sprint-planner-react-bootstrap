import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class List extends Component {

    render() {
        let items = this.props.items;
        let elements = items.map((item, index) =>
            <li key={index}>{item} <a onClick={() => this.props.removeTask(index)}><FontAwesomeIcon icon={["far", "trash-alt"]} /></a></li>
        );
        return (
            <ul>
                {elements}
            </ul>
        );
    }
}

export default List;