import React, { Component } from 'react';

class Sidebar extends Component {

    render() {
        const items = this.props.items;
        const elements = items.map((item) =>
            <a key={item.id} href="#" onClick={() => this.props.showDetails(item.id)} className="list-group-item list-group-item-action bg-light">{item.title}</a>
        );
        return (
            <div className="list-group list-group-flush">
                {elements}
            </div>
        );
    }
}

export default Sidebar;