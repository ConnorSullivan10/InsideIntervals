import React, { Component } from 'react';
import './UserJournalEntries.scss';
import userData from '../../../helpers/data/userData';
import { baseUrl } from '../../../helpers/apiKeys.json';

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
        // eslint-disable-next-line no-sequences
        .catch((err) => ('error with get all User Entries', err));
    }
  }

  render() {
    const {
      userEntries,
    } = this.state;
    return (
      <div className="singUserEntry">
        {userEntries.map((entry) => <div className="card" id={entry.entryId} key={entry.entryId}>
                                      <img className="card-img-top" src={`${baseUrl}/userEntry/${entry.uploadedFileId}`} alt="User file upload" />
                                        <div className="card-body">
                                          <h5 className="card-title">{entry.entryName}</h5>
                                          <p className="card-text">{entry.entryInput}</p>
                                        </div>
                                    </div>)}
      </div>
    );
  }
}

export default UserJournalEntries;
