import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Link to="/" >Home</Link>
        <Link to="/users" >Users</Link>
        <Link to="/about" >About</Link>
      </div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning" />} />
      </BrowserRouter>
    );
  }
}

export default App;
