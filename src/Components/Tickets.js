
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from 'material-ui/styles/typography';
import Table from './Table'


const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 1000,
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

export default function Tickets(props) {
    const classes = useStyles();

    var tickets;
    if (props.error) {
        tickets = <div>Error: {props.error.message}</div>;
    } else if (!props.isLoaded) {
        tickets = <div>Loading...</div>;
    } else {
        tickets =
            <Table rows={props.tickets} />
    }

    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                {tickets}
            </Paper>
        </main>
    )
}