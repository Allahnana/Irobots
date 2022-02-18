// import logo from './logo.svg';
import React from 'react'
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(
      users =>{
        this.setState({
          robots:users
        })
      })
  }

  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }


  render() {
    const filterRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLocaleLowerCase())
    })
    return (
      <div className='tc'>
        <h2 className= 'f1'> RobotFriends</h2>

        <SearchBox searchRobot={this.onSearchChange}/>

        <Scroll>
       
        <CardList robotData={filterRobots}/>
          </Scroll>
         

      </div>
    )
  }
}

export default App;
