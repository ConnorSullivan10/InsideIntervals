import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../images/insideIntervalsLogo.PNG';
import './Navbar.scss';
// import Login from '../../shared/Login/Login';
// import fbConnection from '../../../helpers/data/connection';

// fbConnection();

class Navbar extends React.Component {
  static propTypes = {
    userAuthed: PropTypes.bool,
  }

  logUserOut = (e) => {
    e.preventDefault();
    // TBD
  }

  render() {
    const { userAuthed } = this.props;
    const buildAuthedNav = () => {
      if (userAuthed) {
        return (

          <div className="collapse navbar-collapse order-2" id="navbarText2">
          <ul className="navbar-nav ml-auto nav2">
            <li className="nav-item">
              <a className="nav-link" href="/userProfile">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="TBD">Logout</a>
            </li>
          </ul>
        </div>
        );
      }
      return (
        <div className="collapse navbar-collapse order-2" id="navbarText2">
          <ul className="navbar-nav ml-auto nav2">
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
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
              <a className="nav-link" href="/Intervals">Get Started<span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
            { buildAuthedNav() }
      </nav>
    );
  }
}

export default Navbar;
