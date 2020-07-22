import React from 'react';
import ChordTypeTabs from '../ChordTypeTabs/ChordTypeTabs';
import './ChordsCollapse.scss';

class ChordsCollapse extends React.Component {
  render() {
    // const { userEmail, firebaseUid } = this.props;
    return (
      <div className="ChordsCollapse">
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                What are Chords?
              </button>
            </h5>
          </div>
          <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
              <p>Chords are 3 or more harmonic notes played at the same time. Most basic chords are built using three notes. Chords are built on their root note (the starting note). The rest of the notes in a chord are determined by the chord quality.
            Chords can be built with dozens of notes, though the result would probably be a huge dissonant mess that wouldn’t be useful for anything other than experimental music.
            One of the most vital skills is building chords… Chord-building is a music theory staple with the power to transform how you hear, understand and write music.
            The chords commonly used in Western music are based on intervals, and most often triads. Triads are chords that include
            the Root, 3rd and 5th intervals of a scale. If the lower interval, the distance between the first and 3rd note, is a major third, it produces a major chord. If it is a minor third, we get a minor chord.
            The distance between the lowest and highest notes remains the same: C to G is a perfect fifth (7 half tones / 7 frets), as is D to A. It is the middle note, the 3rd, that gives the essential information
             which distinguishes a major from a minor triad.
              </p>
              <br/>
              <p>To better understand how chords work in your music, think of your song like a building. Your chords are the foundation. The regular position of a chord with its root note at the bottom is called the root position. When the third of the chord (e.g. E in a C major triad) is at the bottom, it is said to be in first
                 inversion. When the fifth of the chord (G in a C major triad) is at the bottom, it is said to be in second inversion. Listeners won’t always recognize chords in a song, but they provide the shape and space to support a melody.</p>
            </div>
            <ChordTypeTabs/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default ChordsCollapse;
