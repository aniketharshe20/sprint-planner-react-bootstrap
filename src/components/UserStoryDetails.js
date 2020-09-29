import React, { Component } from 'react';

class UserstoryDetails extends Component {

    render() {
        const selectedUSObj = this.props.usDetails;
        return (
            <div>
                <h5 className="font-weight-bold mt-4 color666">{selectedUSObj.number}: {selectedUSObj.title}</h5>
                <div className="mt-4 mb-3 text-secondary">
                    {selectedUSObj.description}
                </div>
            </div>
        );
    }
}

export default UserstoryDetails;