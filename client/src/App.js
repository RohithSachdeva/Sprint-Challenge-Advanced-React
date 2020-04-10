import React from 'react';
import './App.css';
import Players from './components/Players';
import axios from 'axios';
import Navbar from './components/Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
      axios
        .get("http://localhost:5000/api/players")
        .then(res => {
          console.log(res.data);
          this.setState({
            data:res.data
        })})
        .catch(err => console.error(err));
    }

    render() {
      return (
          <div className = 'App'>
            <Navbar />
            <h1>Women's World Cup Players</h1>
              {this.state.data.map(item => {
                  return <Players user={item} />;
              })}
          </div>
      )
  }
  }

  

export default App;
