import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ButtonGroup from '@material-ui/core/ButtonGroup';



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
                                    onClick={() => {
                                        window.location.href = window.location.href + "ticket/" + ticket.id;
                                    }}
                                >
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
                <ButtonGroup 
                    variant="text" 
                    color="primary" 
                    aria-label="text primary button group" 
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'flex-end',
                        margin: "15px"
                        }}
                >
                    <IconButton
                        aria-label="previous page"
                        size="small"
                        disabled={this.props.page <= 1}
                        onClick={() => {
                            this.props.setPageNumber(this.props.page - 1)
                            this.props.getTickets(25, this.props.before, "")
                        }}
                    >
                        <ArrowBackIosIcon fontSize="inherit" />
                                Previous page
                            </IconButton>
                    <IconButton
                        aria-label="next page"
                        size="small"
                        disabled={!this.props.has_more}
                        onClick={() => {
                            this.props.setPageNumber(this.props.page + 1)
                            this.props.getTickets(25, "", this.props.after)
                        }}
                    >
                        Next page
                                <ArrowForwardIosIcon fontSize="inherit" />
                    </IconButton>
                </ButtonGroup>
            </TableContainer>
        );
    }
}

export default TicketsTable;