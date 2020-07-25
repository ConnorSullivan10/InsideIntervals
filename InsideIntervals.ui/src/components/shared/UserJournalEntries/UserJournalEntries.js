import React, { Component } from 'react';
import './UserJournalEntries.scss';
import userData from '../../../helpers/data/userData';

class UserJournalEntries extends Component {
  state = {
    userEntries: [],
  }

  componentDidUpdate(prevProps) {
    if (this.props.firebaseUid !== prevProps.firebaseUid) {
      userData.getAllUserEntries(this.props.firebaseUid)
        .then((response) => {
          this.setState({ userEntries: response });
        })
        .catch((err) => ('error with get all User Entries', err));
    }
  }

  render() {
    const {
      userEntries,
    } = this.state;
    console.log(this.props);
    return (
        <div className="card">
          <img className="card-img-top" src="..." alt="User file upload" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
    );
  }
}

export default UserJournalEntries;
