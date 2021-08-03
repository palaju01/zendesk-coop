import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Grid, } from '@material-ui/core';
import StickyFooter from './Components/Footer';
import Nav from './Components/Nav';
import Ticket from './views/Ticket';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Dashboard from './views/Dashboard';

const emptyTicketsState = {
  tickets: null,
  meta: {
    "has_more": false,
    "after_cursor": "",
    "before_cursor": "",
  },
  error: null,
  isLoaded: false,
  page: 1,
}

function App() {
  const [state, setState] = useState(sessionStorage.getItem("tickets") ? JSON.parse(sessionStorage.getItem("tickets")) : emptyTicketsState)

  const getTickets = (size, before, after, page) => {
    axios.get("http://localhost:3001/tickets",
      {
        params: {
          'size': size,
          'before': before,
          'after': after,
        }
      }
    ).then((response) => {
      // handle success
      var prevState = { ...state, tickets: response.data.tickets, meta:response.data.meta, isLoaded:true, page:page}
      sessionStorage.setItem("tickets", JSON.stringify(prevState))
      setState(prevState)
    }).catch((error) => {
      // handle errors
      setState( (previousState) => {
        return {...previousState, error: error}
      })
    })
  }


  if (!state.tickets) {
      getTickets(25,"","",1);
    }

  return (
    <Router>
      <Grid>
        <Nav />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/ticket/:ticketID" render={(props) => (
            <Ticket
              ticketID={props.match.params.ticketID}
            />
          )} />
          <Route exact path="/">
            <Dashboard
              error={state.error}
              isLoaded={state.isLoaded}
              page={state.page}
              tickets={state.tickets}
              has_more={state.meta.has_more}
              before={state.meta.before_cursor}
              after={state.meta.after_cursor}
              getTickets={getTickets}
              setState={setState}
            />
          </Route>
        </Switch>
        <StickyFooter />
      </Grid>
    </Router >
  )
}

export default App;