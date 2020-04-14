import React from 'react';
import Home from './pages/Home';
import City from './pages/City';
import Map from './pages/Map';
import NoMatch from './pages/NoMatch';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Redirect exact from="/" to="/home"></Redirect>
            <Route path="/home" component={Home}></Route>
            <Route path="/city" component={City}></Route>
            <Route path="/map" component={Map}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
