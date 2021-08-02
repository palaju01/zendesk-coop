import React from 'react';
import { Grid, makeStyles, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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

function getTicket(tickets, ticketID){
    for (var index in tickets) {
        console.log(tickets[index]["id"])
        if (tickets[index]["id"].toString() === ticketID) {
            return tickets[index]
        }
    }
    return null
}

function Dashboard(props) {
    const classes = useStyles();
    const id = props.ticketID
    const ticket = getTicket(props.tickets, props.ticketID)
    console.log(props.tickets)
    console.log(props.ticketID)


    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Grid>
                    <Typography variant="h6" gutterBottom>
                        {"Ticket id: " + id.toString()}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {"Created at: " + ticket.created_at}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {"Description: " + ticket.description}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {"Raw subject " + ticket.raw_subject}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {"Requester id: " + ticket.requester_id}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {"Status: " + ticket.status}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {"Subject: " + ticket.subject}
                    </Typography>
                </Grid>
            </Paper>
        </main>
    )
}

export default Dashboard;