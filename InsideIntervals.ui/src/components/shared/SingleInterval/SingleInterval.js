import React from 'react';
import RelatedMode from '../RelatedMode/RelatedMode';
import RelatedChord from '../RelatedChord/RelatedChord';
import IntervalShapes from '../IntervalShapes/IntervalShapes';
import './SingleInterval.scss';

class SingleInterval extends React.Component {
  render() {
    const {
      intervalId,
      intervalName,
      chords,
      modes,
      shapes,
    } = this.props;
    return (
      <div className="SingleInterval">
        <h2 className="text-center">{intervalId}</h2>
        <h2 className="text-center">{intervalName}</h2>
        <IntervalShapes shapes={shapes}/>
        <RelatedChord chords={chords}/>
        <RelatedMode modes={modes}/>
      </div>
    );
  }
}

export default SingleInterval;
