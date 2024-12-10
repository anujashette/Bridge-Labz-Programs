import React , {Component} from 'react';
import './App.css';
import Login from './components/LoginForm'
import SignupForm from './components/SignupForm'

export class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="App__Form"></div> 
      
        <Login/>
        <SignupForm/>

        

      </div>
    );
  }
}

export default App

