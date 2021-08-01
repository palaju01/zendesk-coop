import React from 'react';
import axios from 'axios';
import './App.css';
import { Grid, } from '@material-ui/core';
import StickyFooter from './Components/Footer';
import Nav from './Components/Nav';
import Tickets from './Components/Tickets';


// import logo from './logo.svg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      tickets: "",
      has_more: false,
      before: "",
      after: "",
    };
  }

  getTickets = (size, before, after) => {

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
      this.setState(prevState => {
        return {
          ...prevState,
          tickets: response.data.tickets,
          isLoaded: true,
        }
      })
    }).catch((error) => {
      // handle errors
      console.log(error);
    })
  }

  componentDidMount() {
    this.getTickets(25)
  }

  render() {
    return (
      <Grid>
        <Nav />
        <Tickets
          error={this.state.error}
          tickets={this.state.tickets}
          isLoaded={this.state.isLoaded}
        />
        <StickyFooter />
      </Grid>
    )
  }
}

export default App;