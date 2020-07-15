import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase';
import Navbar from '../components/shared/Navbar/Navbar';
import Home from '../components/pages/Home/Home';
import Intervals from '../components/pages/Intervals/Intervals';
import UserProfile from '../components/pages/UserProfile/UserProfile';
// import Login from '../components/shared/Login/Login';

import './App.scss';
import fbConnection from '../helpers/data/connection';
import auth from '../helpers/data/auth';

fbConnection();

// const PrivateRoute = ({ component: Component, authed, ...rest }) => {
//   const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
//   return <Route {...rest} render={(props) => routeChecker(props)} />;
// };

class App extends React.Component {
  state = {
    authed: false,
    userEmail: '',
    firebaseUid: '',
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          userEmail: auth.getEmail(),
          firebaseUid: auth.getUid(),
        });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed, userEmail, firebaseUid } = this.state;
    return (
    <div className="App">
      <Router>
        <Navbar authed={authed}/>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} authed={authed}/>}/>
          <Route path="/Intervals" exact render={(props) => <Intervals {...props} authed={authed}/>}/>
          <Route path="/userProfile" exact render={(props) => <UserProfile {...props} authed={authed} userEmail={userEmail} firebaseUid={firebaseUid} />}/>
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;
