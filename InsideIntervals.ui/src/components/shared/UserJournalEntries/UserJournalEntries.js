import React, { Component } from 'react';
import './UserJournalEntries.scss';
import { baseUrl } from '../../../helpers/apiKeys.json';

class UserJournalEntries extends Component {
  render() {
    const { userEntries } = this.props;
    return (
      <div className="UserEntryMap d-flex flex-row flex-wrap columns" id="UserEntryMap ">
        {userEntries.map((entry) => <div className="card userEntryCards column is-one-third" id={entry.entryId} key={entry.entryId}>
                                      <button className="btn btn-md btn-danger" id={entry.entryId} onClick={this.props.deleteEntry}>Delete</button>
                                      <div className="card-image">
                                        <figure className="image">
                                          <img src={`${baseUrl}/userEntry/${entry.uploadedFileId}`} alt="User file upload"/>
                                        </figure>
                                      </div>
                                      <div className="card-content">
                                        <div className="content">
                                          <h5 className="card-title is-size-6 mobile">{entry.entryName}</h5>
                                          <p className="card-text is-size-6-mobile">{entry.entryInput}</p>
                                        </div>
                                      </div>
                                    </div>)}
      </div>
    );
  }
}

export default UserJournalEntries;
