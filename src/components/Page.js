import React, { Component } from 'react';
import '../css/simple-sidebar.css';
import Sidebar from "./Sidebar";
import Panel from "./Panel";

let data = require("../userstories.json");
let stories = data['data'];

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedUS: null,
            estimate: [],
        }
    }

    // Shows the details of selected user story
    showDetails = (id) => {
        let currentUS = null;

        stories.forEach(item => {
            if (item.id == id) {
                currentUS = item;
            }
        });
        this.setState({ selectedUS: currentUS });
    }

    // Returns the initial estimate array
    initEstimate = () => {
        let userEstimate = this.state.estimate;

        if (typeof userEstimate[this.state.selectedUS.id] == "undefined") {
            userEstimate[this.state.selectedUS.id] = [];
            userEstimate[this.state.selectedUS.id]['estimatedHrs'] = '';
            userEstimate[this.state.selectedUS.id]['notes'] = '';
            userEstimate[this.state.selectedUS.id]['tasks'] = [];
        }
        return userEstimate;
    }

    // Adda the tasks for the user story
    updateTasks = (event) => {
        let userEstimate = this.initEstimate();
        userEstimate[this.state.selectedUS.id]['tasks'].push(event.target.value);
        this.setState({ estimate: userEstimate });
        event.target.value = '';
    }

    // Adds the estimate fpr user story
    updateEstimate = (event, key) => {
        let userEstimate = this.initEstimate();
        if (key == 'estimatedHrs') {
            userEstimate[this.state.selectedUS.id]['estimatedHrs'] = event.target.value;
        } else if (key == 'notes') {
            userEstimate[this.state.selectedUS.id]['notes'] = event.target.value;
        }
        this.setState({ estimate: userEstimate });
    }

    // Removes selected task
    removeTask = (id) => {
        let userEstimate = this.state.estimate;
        delete userEstimate[this.state.selectedUS.id]['tasks'][id];
        this.setState({ estimate: userEstimate });
    }

    // Shows the total summary of all user stories estimated
    showSummary = () => {

    }

    render() {
        return (
            <div id="wrapper" className="d-flex">
                <div id="sidebar-wrapper" className="bg-light border-right">
                    <div className="sidebar-heading">User stories </div>
                    <Sidebar items={stories} showDetails={this.showDetails}></Sidebar>
                </div>
                <div id="page-content-wrapper">
                    <div className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                        <a href="" onClick={() => this.showSummary}>Summary</a>
                    </div>
                    <div className="container-fluid">
                        <Panel selectedUS={this.state.selectedUS} estimate={this.state.estimate} updateTasks={this.updateTasks} updateEstimate={this.updateEstimate} removeTask={this.removeTask} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;