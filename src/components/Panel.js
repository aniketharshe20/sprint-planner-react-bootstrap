import React, { Component } from 'react';
import UserStoryDetails from './UserStoryDetails';
import Tasks from './Tasks';

class Panel extends Component {

    render() {
        let details, tasks;
        if (this.props.selectedUS != null) {
            details = <UserStoryDetails usDetails={this.props.selectedUS} />;
            tasks = <Tasks estimate={this.props.estimate} updateTasks={this.props.updateTasks}
                           updateEstimate={this.props.updateEstimate} usDetails={this.props.selectedUS}
                           removeTask={this.props.removeTask}/>
        }
        return (
            <div className="panel">
                <div className="details-section">
                    {details}
                </div>
                <div className="task-section">
                    {tasks}
                </div>
            </div>
        );
    }
}

export default Panel;