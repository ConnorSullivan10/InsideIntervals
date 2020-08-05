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
    return (
      <div id="userSongIdeas">
        <p className="title">Song Assist: Chord Predictor</p>
        <ChordPredictor mostCommonChords={mostCommonChords} />
      </div>
    );
  }
}

export default UserSongIdeas;
