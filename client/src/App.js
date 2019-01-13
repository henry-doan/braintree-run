import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import PaymentSuccess from './components/PaymentSuccess';

class App extends Component {
  render() {
    return (
      <div>
       <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/payment_success' component={PaymentSuccess} />
       </Switch>
      </div>
    );
  }
}

export default App;
