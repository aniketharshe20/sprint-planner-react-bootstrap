import React, { Component } from 'react';
import Table from './Table';
import { CSVLink } from "react-csv";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Summary extends Component {

    render() {
        let csvExport = {};
        let estimate = this.props.estimate;
        let rows = [];

        Object.keys(estimate).forEach(key => {
            let row = [estimate[key].number, estimate[key].estimatedHrs, estimate[key].tasks, estimate[key].notes];
            rows.push(row);
        });

        let tableData = {
            'headers': ['US Number', 'Estimate', 'Tasks', 'Notes'],
            'rows': rows
        }

        return (
            <div>
                <h5 className="font-weight-bold mt-4 color666">Estimate summary</h5>
                <CSVLink data={tableData.rows} headers={tableData.headers} filename={"estimate.csv"} target="_blank" className="float-right color666">
                    Download <FontAwesomeIcon icon={["fa", "download"]} />
                </CSVLink>
                <div className="mt-4">
                    <Table tableData={tableData} tableCls="table-bordered table-striped"></Table>
                </div>
            </div>
        );
    }
}

export default Summary;