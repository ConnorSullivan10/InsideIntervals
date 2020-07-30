import React from 'react';
import $ from 'jquery';
import hookTheory from '../../../helpers/data/hookTheory';

class ChordPredictor extends React.Component {
  state = {
    selectedOption: '',
    viewChordResults: false,
    viewSongResults: false,
    chordName: '',
    nextChordsPredicted: [],
    songsThatUseThoseChords: [],
  }

  handleCheckboxLimit = () => {
    const limit = 2;
    const checkboxes = $('input[type="checkbox"]');
    checkboxes.change(() => {
      const current = checkboxes.filter(':checked').length;
      checkboxes.filter(':not(:checked)').prop('disabled', current >= limit);
    });
  };

  handleChordSubmit = (e) => {
    e.preventDefault();
    const filterCheckedBoxes = $('input[type="checkbox"]').filter(':checked');
    const checkedBoxes = [];
    filterCheckedBoxes.each((i, property) => checkedBoxes.push(property.value));
    if (checkedBoxes.length === 1) {
      const chordId = checkedBoxes[0];
      hookTheory.getMostLikelyNextChord(chordId)
        .then((result) => {
          this.setState({
            selectedOption: chordId,
            viewChordResults: true,
            nextChordsPredicted: result,
          });
        });
    } else if (checkedBoxes.length === 2) {
      const chord1 = checkedBoxes[0];
      const chord2 = checkedBoxes[1];
      hookTheory.getMostLikelyNextChordsInSelectedProgression(chord1, chord2)
        .then((result) => {
          console.error(result);
          this.setState({
            viewChordResults: true,
            nextChordsPredicted: result,
          });
        });
      hookTheory.getSongsThatUseSelectedProgression(chord1, chord2)
        .then((result) => {
          this.setState({
            viewSongResults: true,
            songsThatUseThoseChords: result,
          });
        });
    }
  }

  render() {
    const {
      // selectedOption,
      viewResults,
      nextChordsPredicted,
    } = this.state;
    const { mostCommonChords } = this.props;
    function createMarkup(chordHTML) {
      return { __html: chordHTML };
    }
    const renderChordPredictor = () => {
      if (viewResults === true) {
        return (
          <div className="results">
            {nextChordsPredicted.map((chord) => <div className="card" id={chord.chord_ID} key={chord.chord_ID}>
                                        <div className="card-body">
                                          <div dangerouslySetInnerHTML={createMarkup(chord.chord_HTML)} />
                                          <p className="card-text">Probability{chord.probability}</p>
                                        </div>
                                    </div>)}
          </div>
        );
      }
      return (
        <div></div>
      );
    };
    return (
      <div className="ChordPredictor">
        <p><strong>Select 1 or 2 chords from the options below, to see what next chords options would most likely work next in the progression.</strong></p>
        <form className="text-center" onChange={this.handleCheckboxLimit}>
          {mostCommonChords.map((chord) => <div key={chord.chord_ID}>
                                            <input className="chord-checkbox" type="checkbox" name={chord.chord_ID} value={chord.child_path} onChange={this.handleCheckboxLimit}/>
                                            <label htmlFor={chord.chord_ID}><div dangerouslySetInnerHTML={createMarkup(chord.chord_HTML)} /></label><br/>
                                           </div>)
          }
          <input type="submit" value="Submit" onClick={this.handleChordSubmit}></input>
        </form>
        <hr className="my-3"/>
        { renderChordPredictor() }
      </div>
    );
  }
}

export default ChordPredictor;
