import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


class TicketsTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                id: 'id',
                label: 'Ticket ID',
            },
            {
                id: 'status',
                label: 'Status',
            },
            {
                id: 'subject',
                label: 'Subject',
            },
            {
                id: 'requester_id',
                label: 'Requester ID',
                maxWidth: "100px",
                align: 'center',
            },
            {
                id: 'created_at',
                label: 'Creation date',
                maxWidth: "100px",
                align: 'center',
                format: (value) => (new Date(value)).toLocaleDateString('en-US'),
            },
        ];
    }

    render() {
        var rows = this.props.rows
        return (
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
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={ticket.id}
                                >
                                    {this.columns.map((column) => {
                                        const value = ticket[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && column.id === 'created_at' ? column.format(value) :
                                                    (column.id === 'id' ?
                                                        <Link to={{ pathname: "/ticket/" + ticket.id, state: { tickets: rows } }}> {value} </Link> : value)}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<ArrowBackIosIcon />}
                    style={{ marginTop: "10px", marginRight: "10px"}}
                    disabled={this.props.page <= 1}
                    onClick={() => {
                        this.props.getTickets(25, this.props.before, "", this.props.page - 1)
                    }}
                >
                    {"Back to Dashboard"}
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForwardIosIcon />}
                    style={{ marginTop: "10px" }}
                    disabled={!this.props.has_more}
                    onClick={() => {
                        this.props.getTickets(25, "", this.props.after, this.props.page + 1)
                    }}
                >
                    {"Back to Dashboard"}
                </Button>
            </TableContainer>
        );
    }
}

export default TicketsTable;