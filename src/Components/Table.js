import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class TicketsTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            { 
                id: 'id', 
                label: 'Ticket ID', 
                // maxWidth: 20 
            },
            { 
                id: 'status', 
                label: 'Status', 
                // maxWidth: 20 },
            },
            {
                id: 'subject',
                label: 'Subject',
                // maxWidth: "50px",
                // align: 'right',
            },
            {
                id: 'requester_id',
                label: 'Requester ID',
                maxWidth: 100,
                align: 'center',
            },
            {
                id: 'created_at',
                label: 'Creation date',
                maxWidth: 100,
                align: 'center',
                format: (value) => (new Date(value)).toLocaleDateString('en-US'),
            },
        ];
    }

    render () {
        var rows = this.props.rows
        return (
            <div>
                <TableContainer>
                    <Table aria-label="table">
                        <TableHead>
                            <TableRow>
                                {this.columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((ticket) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={ticket.id}>
                                        {this.columns.map((column) => {
                                            const value = ticket[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && column.id === 'created_at' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                
            </div>
        );
    }
}

export default TicketsTable;