import React from 'react'
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Usage from './pages/Usage/Usage';
import Bill from './pages/bill/Bill';
import Map from './pages/map/Map'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class App extends React.Component {

  render() {
    return(
      <Router>
        <div>
          <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Login" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/usage" component={Usage} />
          <Route path="/bill" component={Bill} />
          <Route path="/map" component={Map} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
