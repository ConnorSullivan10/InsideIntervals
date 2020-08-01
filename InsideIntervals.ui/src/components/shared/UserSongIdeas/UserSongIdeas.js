import React, { Component } from 'react';
import ChordPredictor from '../ChordPredictor/ChordPredictor';
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
    // function createMarkup(chordHTML) {
    //   return { __html: chordHTML };
    // }
    return (
      <div id="userSongIdeas">
        <p className="title">Song Assist: Chord Predictor</p>
        {/* {mostCommonChords.map((chord) => <div className="card" id={chord.chord_ID} key={chord.chord_ID}>
                                        <div className="card-body">
                                          <div dangerouslySetInnerHTML={createMarkup(chord.chord_HTML)} />
                                          <p className="card-text">Probability{chord.probability}</p>
                                        </div>
                                    </div>)} */}
        <ChordPredictor mostCommonChords={mostCommonChords} />
      </div>
    );
  }
}

export default UserSongIdeas;
