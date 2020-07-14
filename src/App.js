import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      error: null,
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    axios.get(`http://anapioficeandfire.com/api/characters/583`)
    .then(res => {
      const got = res.data.data;
      console.log()
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Game of Fetches</h1>
      </div>
    );
  }
}

export default App;
