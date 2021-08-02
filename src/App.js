import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Grid, } from '@material-ui/core';
import StickyFooter from './Components/Footer';
import Nav from './Components/Nav';
import Ticket from './views/Ticket';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Dashboard from './views/Dashboard';


function App() {
  const [state, setState] = useState(
    {
      error: null,
      isLoaded: false,
      items: [],
      tickets: "",
      has_more: false,
      page: 1,
      before: "",
      after: "",
    }
  )

  const setPageNumber = (newPageNumber) => {
    setState(prevState => {
      return { ...prevState, page: newPageNumber }
    })
  }

  const getTickets = (size, before, after) => {
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
      console.log(response)
      setState(prevState => {
        return {
          ...prevState,
          tickets: response.data.tickets,
          has_more: response.data.meta.has_more,
          before: response.data.meta.before_cursor,
          after: response.data.meta.after_cursor,
          isLoaded: true,
        }
      })
    }).catch((error) => {
      // handle errors
      console.log(error);
    })
  }

  useEffect(() => {
    // Update the document title using the browser API
    if (!state.tickets) {
      getTickets(25);
    }
  });

  return (
    <Router>
      <Grid>
        <Nav />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/ticket/:ticketID" render={(props) => (
            <Ticket
              tickets={state.tickets}
              ticketID={props.match.params.ticketID}
            />
          )} />
          <Route exact path="/">
            <Dashboard
              error={state.error}
              tickets={state.tickets}
              isLoaded={state.isLoaded}
              has_more={state.has_more}
              before={state.before}
              after={state.after}
              page={state.page}
              getTickets={getTickets}
              setPageNumber={setPageNumber}
            />
          </Route>
        </Switch>
        <StickyFooter />
      </Grid>
    </Router >
  )
}

export default App;