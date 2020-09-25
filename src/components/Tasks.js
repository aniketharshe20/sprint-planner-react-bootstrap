import React, { Component } from 'react';
import List from './List.js';

class Tasks extends Component {

    addTask = (event) => {
        if (event.which === 13) {
            this.props.updateTasks(event);
        }
    }

    render() {
        let usId = this.props.usDetails.id;
        let tasks = [];
        if (typeof this.props.estimate[usId] != "undefined") {
            tasks = this.props.estimate[usId]['tasks'];
        }

        return (
            <div className="tasks row">
                <div className="col-sm-6">
                    <div className="form-group col-md-8">
                        <label>Estimate:</label>
                        <input type="number" name="estimateHrs" id="estimateHrs" className="form-control" onChange={event => this.props.updateEstimate(event, 'estimatedHrs')} />
                    </div>
                    <div className="form-group col-md-8">
                        <label>Notes:</label>
                        <textarea name="notes" id="notes" className="form-control" onChange={event => this.props.updateEstimate(event, 'notes')} />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group col-md-8">
                        <label>Task breakup:</label>
                        <input type="text" name="task" id="task" className="form-control" onKeyPress={this.addTask} />
                    </div>
                    <div className="form-group col-md-8">
                        <List items={tasks} removeTask={this.props.removeTask}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Tasks;