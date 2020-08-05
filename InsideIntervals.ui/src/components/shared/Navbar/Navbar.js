import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import logo from '../../../images/insideIntervalsLogo.PNG';
import './Navbar.scss';

class Navbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logUserOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('hookApi');
    firebase.auth().signOut();
    this.props.history.push('/');
  }

  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((cred) => {
      // get token from firebase
        cred.user.getIdToken()
        // save the token to the session storage
          .then((token) => sessionStorage.setItem('token', token));
      });
  }

  getUid = () => firebase.auth().currentUser.uid;

  render() {
    const { authed } = this.props;
    const buildAuthedNav = () => {
      if (authed) {
        return (

          <div className="collapse navbar-collapse order-2" id="navbarText2">
          <ul className="navbar-nav ml-auto nav2">
            <li className="nav-item">
              <a className="nav-link" href="/userProfile">Profile</a>
            </li>
            <li className="nav-item logOut">
              <a className="nav-link btn btn-outline-danger logoutBtn" onClick={this.logUserOut} href="/">Logout</a>
            </li>
          </ul>
        </div>
        );
      }
      return (
        <div className="collapse navbar-collapse order-2" id="navbarText2">
          <ul className="navbar-nav ml-auto nav2">
            <li className="nav-item">
              <div className="Auth">
                <button className="btn btn-primary loginBtn" onClick={this.loginClickEvent}>Login with Google</button>
              </div>
            </li>
          </ul>
        </div>
      );
    };
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/">
          <img src={logo} width="250" alt="Inside Intervals"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse order-1" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/Intervals">Start Learning<span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
            { buildAuthedNav() }
      </nav>
    );
  }
}

export default withRouter(Navbar);
