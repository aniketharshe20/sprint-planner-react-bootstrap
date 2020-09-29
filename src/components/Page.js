import React, { Component } from 'react';
import '../css/simple-sidebar.css';
import Sidebar from "./Sidebar";
import Panel from "./Panel";
import Summary from './Summary';

let data = require("../userstories.json");
let stories = data['data'];

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedUS: null,
            estimate: {},
            showSummary: 0
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
        this.setState({ selectedUS: currentUS, showSummary: 0 });
    }

    // Returns the initial estimate array
    initEstimate = () => {
        let userEstimate = this.state.estimate;
        if (typeof userEstimate[this.state.selectedUS.id] === "undefined") {
            let estimate = {
                number: this.state.selectedUS.number,
                estimatedHrs: '',
                notes: '',
                tasks: []
            };
            userEstimate[this.state.selectedUS.id] = estimate;
        }
        return userEstimate;
    }

    // Adds the tasks for the user story
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
        this.setState({ showSummary: 1 });
    }

    render() {
        let bodyComponent = <Panel selectedUS={this.state.selectedUS} estimate={this.state.estimate}
                                   updateTasks={this.updateTasks} updateEstimate={this.updateEstimate}
                                   removeTask={this.removeTask} />;
        if (this.state.showSummary == 1) {
            bodyComponent = <Summary estimate={this.state.estimate}></Summary>;
        }
        return (
            <div id="wrapper" className="d-flex">
                <div id="sidebar-wrapper" className="bg-light border-right">
                    <div className="sidebar-heading">User stories </div>
                    <Sidebar items={stories} showDetails={this.showDetails}></Sidebar>
                </div>
                <div id="page-content-wrapper">
                    <div className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                        <ul class="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a href="#" className="nav-link" onClick={() => this.showSummary()}>Summary</a>
                        </li>
                        </ul>
                    </div>
                    <div className="container-fluid">
                        {bodyComponent}
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;