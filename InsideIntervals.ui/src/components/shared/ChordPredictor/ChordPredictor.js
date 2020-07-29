import React from 'react';
import hookTheory from '../../../helpers/data/hookTheory';

class ChordPredictor extends React.Component {
  state = {
    selectedOption: '',
    viewResults: false,
    chordName: '',
    nextChordsPredicted: [],
  }

  handleChordChange = (changeEvent) => {
    const chordId = changeEvent.target.value;
    hookTheory.getMostLikelyNextChord(chordId)
      .then((result) => {
        this.setState({
          selectedOption: chordId,
          viewResults: true,
          nextChordsPredicted: result,
        });
      });
  }

  render() {
    const {
      selectedOption,
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
        <h4 className="text-center">Select a chord from the options below, to see what chords options would most likely work next in the progression.</h4>
        <form className="text-center">
          {mostCommonChords.map((chord) => <div className="form-check col">
                                              <label>
                                                <input
                                                type="radio"
                                                name="react-tips"
                                                value= {chord.child_path}
                                                className="form-check-input"
                                                checked= {selectedOption === `${chord.child_path}` }
                                                onChange={this.handleChordChange}
                                                />
                                                <div dangerouslySetInnerHTML={createMarkup(chord.chord_HTML)} />
                                              </label>
                                            </div>)
          }
        </form>
        <hr class="my-3"/>
        { renderChordPredictor() }
      </div>
    );
  }
}

export default ChordPredictor;
