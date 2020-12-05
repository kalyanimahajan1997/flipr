import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
];
const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Table = (props) => {
    console.log(props.tableData);
    const rowClicked = function (params) {
        props.onChange(params.row);
    };
    const columns = [
        { field: 'awbno', headerName: 'awbno', width: 120 },
        { field: 'destination', headerName: 'Destination', width: 130 },
        { field: 'source', headerName: 'Scource', width: 130 },
        { field: 'startDate', headerName: 'Start Date', width: 130 },
        { field: 'status', headerName: 'Status', width: 130 },
    ];
    return (
        <React.Fragment>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid autoHeight rows={props.tableData} columns={columns} onRowClick={rowClicked} hideFooter />
            </div>
        </React.Fragment>
    );
};

export default Table;