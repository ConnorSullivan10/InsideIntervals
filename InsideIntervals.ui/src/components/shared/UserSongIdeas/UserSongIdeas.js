import React, { Component } from 'react';
import './UserSongIdeas.scss';
import hookTheory from '../../../helpers/data/hookTheory';

class UserSongIdeas extends Component {
  state = {
    mostCommonChords: [],
  }

  componentDidMount() {
    hookTheory.getMostFrequentlyUsedChords()
      .then((response) => {
        this.setState({ mostCommonChords: response });
      })
      // eslint-disable-next-line no-sequences
      .catch((err) => ('error with get all User Entries', err));
  }

  render() {
    const {
      mostCommonChords,
    } = this.state;
    return (
      <div className="singUserEntry">
        {/* {mostCommonChords.map((chord) => <div className="card" id={entry.entryId} key={entry.entryId}>
                                      <img className="card-img-top" src={`${baseUrl}/userEntry/${entry.uploadedFileId}`} alt="User file upload" />
                                        <div className="card-body">
                                          <h5 className="card-title">{entry.entryName}</h5>
                                          <p className="card-text">{entry.entryInput}</p>
                                        </div>
                                    </div>)} */}
      </div>
    );
  }
}

export default UserSongIdeas;
