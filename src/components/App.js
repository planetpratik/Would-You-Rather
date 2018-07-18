import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import Navbar from './Navbar'
import Login from './Login'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Poll from './Poll'
import FourZeroFour from './FourZeroFour'
import PrivateRoute from './PrivateRoute'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    const { dispatch, loading } = this.props
    if(loading === true) {
      dispatch(handleInitialData())
   }
  }
  render() {
    return (
    <Router>
      <Fragment>
          <Navbar/>
          <div>
            <LoadingBar/>
            { this.props.loading === true
              ? null
              : <div>
              <Switch>
                <Route path='/login' exact component={Login} />
                <PrivateRoute path='/' exact component={Home} />
                <PrivateRoute path='/add' exact component={NewQuestion} />
                <PrivateRoute path='/questions/:question_id' exact component={Poll} />
                <PrivateRoute path='/leaderboard' exact component={LeaderBoard} />
                <Route component={FourZeroFour}/>
              </Switch>
            </div>
              }
          </div>
      </Fragment>
    </Router>
    )
  }
}

function mapStateToProps({users}) {
  return {
    loading: isEmpty(users)
  }
}

function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false
  }
  return true
}

export default connect(mapStateToProps)(App)
