import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: 'as21'
        },
        {
          name: 'Frank',
          id: 'as212'
        },
        {
          name: 'Jacky',
          id: 'as221'
        },
        {
          name: 'Andrei',
          id: 'as21saa'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map( (monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        }
      </div>
    );
  }
}
 


export default App;
