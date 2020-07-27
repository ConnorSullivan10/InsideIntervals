import React from 'react';
import './RelatedChord.scss';

class RelatedChord extends React.Component {
  render() {
    const { chords } = this.props;
    return (
        <div className="relatedChords d-flex flex-wrap">
          {chords.map((chord) => <div className="relatedChordCard" key={chord.chordId} id={chord.chordId}>
                                              <div className="card-body">
                                                <h5 className="card-title">{chord.chordName}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Chord Intervals: {chord.chordIntervals}</h6>
                                                <p className="card-text">{chord.chordDescription}</p>
                                              </div>
                                  </div>)}
        </div>
    );
  }
}

export default RelatedChord;
