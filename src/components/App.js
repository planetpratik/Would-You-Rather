import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import Navbar from './Navbar'
import Login from './Login'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import PrivateRoute from './PrivateRoute'

class App extends Component {
  render() {
    return (
    <Router>
      <Fragment>
          <Navbar/>
          <div>
            <LoadingBar/>
            <div>
              <Switch>
                <Route path='/login' exact component={Login} />
                <PrivateRoute path='/' exact  component={Home} />
                <PrivateRoute path='/add' exact component={NewQuestion} />
                <PrivateRoute path='/leaderboard' exact component={LeaderBoard} />
              </Switch>
            </div>
          </div>
      </Fragment>
    </Router>
    )
  }
}

export default App;
