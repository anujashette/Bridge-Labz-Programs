import React , {Component} from 'react';
import './App.css';
import Login from './components/LoginForm'
import SignupForm from './components/SignupForm'





export class App extends Component {
  render() {
    return (
      <div className="App">
        
        {/* <Demo/> */}

        {/* <div className="App__Aside"></div>
        <div className="App__Form"></div> */}
        {/* <Home/> */}
        <Login/>
        <SignupForm/>

        

      </div>
    );
  }
}

export default App

