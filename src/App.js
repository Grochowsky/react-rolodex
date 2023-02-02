import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField:''
    }
    console.log('Constructor')
  }

  componentDidMount() {
    console.log('component did mount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState( () => {
      console.log(users)
      return (
        { monsters: users }
      )
    }, () => {
      console.log(this.state)
    }))
    
  }

  render() {
    console.log('Render')

    const filteredMonsters = this.state.monsters.filter( (monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField)
     });


    return (
      <div className="App">
        <input 
        className='search-box' 
        type="search" 
        placeholder='search' 
        onChange={ (event) => {

          console.log(event.target.value)
          const searchField = event.target.value.toLowerCase();
         

          this.setState(() => {
            return { searchField}
          })
        
        }}/>
        {
          filteredMonsters.map( (monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        }
      </div>
    );
  }
}
 


export default App;
