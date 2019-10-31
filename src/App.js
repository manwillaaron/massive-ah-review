import React from 'react';
import './App.css';
import axios from 'axios'
import Routes from './Routes'

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      expenses: []
    }
  }

  componentDidMount(){
    axios.get('/api/expenses').then(res=> {
      this.setState({
        expenses: res.data
      })
    })
  }
  
  render(){    
    return (
    <div className="App">
   <Routes expenses={this.state.expenses} />
    </div>
  );
}
}

export default App;
