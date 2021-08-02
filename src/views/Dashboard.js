import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Paper} from '@material-ui/core';
import Table from '../Components/Table'

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

function Dashboard(props) {
  const classes = useStyles();

  var tickets;
  if (props.error) {
    tickets = <div>Error: {props.error.message}</div>;
  } else if (!props.isLoaded) {
    tickets = <div>Loading...</div>;
  } else {
    tickets =
      <Table
        rows={props.tickets}
        has_more={props.has_more}
        before={props.before}
        after={props.after}
        page={props.page}
        getTickets={props.getTickets}
        setPageNumber={props.setPageNumber}
      />
  }

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        {tickets}
      </Paper>
    </main>
  )
}

export default Dashboard;