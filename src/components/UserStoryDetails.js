import React, { Component } from 'react';

class UserstoryDetails extends Component {

    render() {
        const selectedUSObj = this.props.usDetails;
        return (
            <div className="detail">
                <div className="usTitle">
                    {selectedUSObj.number} {selectedUSObj.title}
                </div>
                <div className="usDetails">
                    {selectedUSObj.description}
                </div>
            </div>
        );
    }
}

export default UserstoryDetails;