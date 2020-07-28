import React from 'react';
import RelatedMode from '../../ModeSubcomponents/RelatedMode/RelatedMode';
import RelatedChord from '../../ChordSubcomponents/RelatedChord/RelatedChord';
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
      <div className="SingleInterval" id={intervalId}>
        <h2 className="text-center">{intervalName}</h2>
        <IntervalShapes shapes={shapes}/>
        <RelatedChord chords={chords}/>
        <RelatedMode modes={modes}/>
      </div>
    );
  }
}

export default SingleInterval;
