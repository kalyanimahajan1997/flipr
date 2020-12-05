import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const Table = (props) => {
    console.log(props.tableData);
    const rowClicked = function (params) {
        props.onChange(params.row);
    };
    const columns = [
        { field: 'awbno', headerName: 'awbno', width: 120 },
        { field: 'transporter', headerName: 'Transporter', width: 120 },
        { field: 'destination', headerName: 'Destination', width: 130 },
        { field: 'source', headerName: 'Scource', width: 130 },
        { field: 'startDate', headerName: 'Start Date', width: 130 },
        { field: 'status', headerName: 'Status', width: 200 },
    ];
    return (
        <React.Fragment>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid autoHeight rows={props.tableData} columns={columns} onRowClick={rowClicked} pageSize={10} />
            </div>
        </React.Fragment>
    );
};

export default Table;