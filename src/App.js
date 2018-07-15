import React, { Component } from 'react';
import Cards from './components/Cards';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import Errorboundry from './components/ErrorBoundry'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}))
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
      }

  render() {
    const { robots, searchField} = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return !robots.length ?
      <h1>Loading ... </h1> 
      :
      (
        <div className="tc">
          <h1>Robofamily</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <Errorboundry >
              <Cards robots={filteredRobots}/>
            </Errorboundry>
          </Scroll>
        </div>
      );
    }
    
}

export default App;