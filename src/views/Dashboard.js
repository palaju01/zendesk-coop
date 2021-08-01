class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      // size: 25,
      before: "",
      after: "",
    };
  }

  getTickets = () => {
    fetch("http://localhost:3001/tickets", {
      method: 'GET',
      // headers: {
      //   size: this.state.size,
      //   before: this.state.before,
      //   after: this.state.after
      // }
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  componentDidMount() {
    this.getTickets()
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}