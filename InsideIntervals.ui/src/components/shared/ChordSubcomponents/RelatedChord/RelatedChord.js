import React from 'react';
import ChordsCollapse from '../ChordsCollapse/ChordsCollapse';
import './RelatedChord.scss';

class RelatedChord extends React.Component {
  render() {
    const { chords } = this.props;
    const conditionallyReturnChords = () => {
      if (chords !== []) {
        return (
            <div>
              <p className="is-size-6">No common chords exist that specifically are built around this interval.</p>
            </div>
        );
      }
      return (
        <div className=" d-flex flex-wrap">
        {chords.map((chord) => <div className="relatedChordCard" key={chord.chordId} id={chord.chordId}>
                                            <div className="card-body">
                                              <h5 className="card-title">{chord.chordName}</h5>
                                              <h6 className="card-subtitle mb-2 text-muted">Intervals: {chord.chordIntervals}</h6>
                                              <p className="card-text">{chord.chordDescription}</p>
                                            </div>
                                </div>)}
      </div>
      );
    };
    return (
      <div className="relatedChords">
        <p className="is-size-3">Related Chords</p>
        {conditionallyReturnChords()}
        <ChordsCollapse/>
      </div>
    );
  }
}

export default RelatedChord;
