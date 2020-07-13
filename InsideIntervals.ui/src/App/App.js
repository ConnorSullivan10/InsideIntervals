import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
// import firebase from 'firebase';
import Navbar from '../components/shared/Navbar/Navbar';
import Home from '../components/pages/Home/Home';
import Intervals from '../components/pages/Intervals/Intervals';
import UserProfile from '../components/pages/UserProfile/UserProfile';
import Login from '../components/shared/Login/Login';

import './App.scss';
import fbConnection from '../helpers/data/connection';
// import userData from '../helpers/data/userData';

fbConnection();

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
    registeredUser: {},
    firebaseUser: {},
  }

  render() {
    const { authed, registeredUser } = this.state;
    return (
    <div className="App">
      <Router>
        <Navbar authed={authed} registeredUserId={registeredUser?.id} />
        <Switch>
          <Route path="/" exact component={Home} authed={authed} />
          <Route
            path='/login'
            render={() => (authed ? (
                <Redirect to='/home' />
            ) : (
                <Login />
            ))
            }
          />
          <Route path="/Intervals" exact component={Intervals} authed={authed} />
          <PrivateRoute path="/userProfile" exact component={UserProfile} authed={authed} userObj={registeredUser}/>
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;
