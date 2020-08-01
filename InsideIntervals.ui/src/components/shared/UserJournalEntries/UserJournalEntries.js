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
      <div className="UserEntryMap d-flex flex-row flex-wrap columns" id="UserEntryMap ">
        {userEntries.map((entry) => <div className="card userEntryCards column is-one-third" id={entry.entryId} key={entry.entryId}>
                                      <div className="card-image">
                                        <figure className="image">
                                          <img src={`${baseUrl}/userEntry/${entry.uploadedFileId}`} alt="User file upload"/>
                                        </figure>
                                      </div>
                                      <div className="card-content">
                                        <div className="content">
                                          <h5 className="card-title">{entry.entryName}</h5>
                                          <p className="card-text">{entry.entryInput}</p>
                                        </div>
                                      </div>
                                    </div>)}
      </div>
    );
  }
}

export default UserJournalEntries;
