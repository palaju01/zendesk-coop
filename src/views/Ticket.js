import React from 'react';
import { Button, Grid, makeStyles, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(1),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}))

function getTicket(tickets, ticketID) {
    for (var index in tickets) {
        if (tickets[index]["id"].toString() === ticketID) {
            return tickets[index]
        }
    }
    return null
}

function Dashboard(props) {
    const classes = useStyles();
    const location = useLocation()
    const tickets = location.state.tickets
    const id = props.ticketID
    const ticket = getTicket(tickets, props.ticketID)

    return (
        <div className={classes.layout}>
            <Paper className={classes.paper}>
                <Grid>
                    <Typography gutterBottom variant="h5" component="h2">
                        {"Ticket #" + id.toString()}
                    </Typography>
                    <Divider variant="middle" />
                    <Typography gutterBottom>
                        <b>Status: </b> {ticket.status}
                    </Typography>
                    <Typography gutterBottom>
                        <b>Creation date: </b>{(new Date(ticket["created_at"])).toLocaleDateString('en-US')}
                    </Typography>
                    <Typography gutterBottom>
                        <b>Requester id: </b>{ticket.requester_id}
                    </Typography>
                    <Typography gutterBottom>
                        <b>Subject: </b> {ticket.subject}
                    </Typography>
                    <Divider variant="middle" />
                    <Typography variant="h6" component="h3">
                        {"Description"}
                    </Typography>
                    <Typography>
                        {ticket["description"]}
                    </Typography>
                    <Link
                        to={{ pathname: "/" }}
                        style={{ textDecoration: 'none' }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<ArrowBackIcon />}
                            style={{ marginTop: "10px" }}
                        >
                            {"Back to Dashboard"}
                        </Button>
                    </Link>
                </Grid>
            </Paper>
        </div>
    )
}

export default Dashboard;