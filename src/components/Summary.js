import React, { Component } from 'react';
import Table from './Table';

class Summary extends Component {

    render() {
        let estimate = this.props.estimate;
        let rows = [];

        Object.keys(estimate).forEach(key => {
            let row = [estimate[key].number, estimate[key].estimatedHrs, estimate[key].tasks];
            rows.push(row);
        });

        let tableData = {
            'headers': ['US Number', 'Estimate', 'Tasks'],
            'rows': rows
        }
        return (
            <div>
                <h5 className="font-weight-bold mt-4 color666">Estimate summary</h5>
                <div className="mt-4">
                    <Table tableData={tableData} tableCls="table-bordered table-striped"></Table>
                </div>
            </div>
        );
    }
}

export default Summary;