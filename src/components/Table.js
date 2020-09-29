import React, { Component } from 'react';

class Table extends Component {

    // Renders the table header
    renderHeader = () => {
        let headers = this.props.tableData.headers;
        return <tr>{headers.map((title, key) => <th key={key} scope="col">{title}</th>)}</tr>;
    }

    // Renders the table body
    renderBody = () => {
        let rows = this.props.tableData.rows;
        return rows.map((row, index) => {
            let elements = row.map((data, key) => {
                let td = '';
                if (Array.isArray(data)) {
                    td = <td key={key} scope="row"><ol>{data.map((item, j) => <li key={j}>{item}</li>)}</ol></td>;
                } else {
                    td = <td key={key} scope="row">{data}</td>
                }
                return td;
            });
            return <tr key={index}>{elements}</tr>
        });
    }

    render() {
        let tableCls = 'table responsive ';
        if (typeof this.props.tableCls != "undefined") {
            tableCls += this.props.tableCls;
        }
        return (
            <table className={tableCls}>
                <thead>
                    {this.renderHeader()}
                </thead>
                <tbody>
                    {this.renderBody()}
                </tbody>
            </table>
        );
    }
}

export default Table;