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
        <h3 className="text-center">{intervalName}</h3>
        <IntervalShapes shapes={shapes}/>
        <hr class="mt-3 mb-3"/>
        <RelatedChord chords={chords}/>
        <RelatedMode modes={modes}/>
      </div>
    );
  }
}

export default SingleInterval;
