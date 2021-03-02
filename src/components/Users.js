import React from 'react';
import { Redirect } from 'react-router-dom';
import StrictAccess from './StrictAccess';

class Users extends React.Component {

  render () {
    const { greetingMessage = 'Hi There', user: { username, password} } = this.props
    // const userAuth = { username: 'joao', password: 1234 };
    
    if (username === 'joao' && password === 1234) {
      return (
        <div>
          <h2> Users </h2>
          <p> {greetingMessage}, this is my awesome Users component</p>
          <StrictAccess />
        </div>
      );
    } else {
      alert('Access denied');
      return (
        <Redirect to="/" />
      )
    }
  }
};

export default Users;
