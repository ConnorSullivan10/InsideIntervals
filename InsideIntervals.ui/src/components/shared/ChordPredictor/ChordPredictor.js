import React from 'react';
import $ from 'jquery';
import hookTheory from '../../../helpers/data/hookTheory';
import './ChordPredictor.scss';

class ChordPredictor extends React.Component {
  state = {
    viewChordResults: false,
    viewSongResults: false,
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
          if (!result.includes('null')) {
            this.setState({
              viewChordResults: true,
              nextChordsPredicted: result,
              viewSongResults: false,
              viewChordResultErrorMessage: false,
              viewSongResultErrorMessage: false,
            });
          } else {
            this.setState({
              viewChordResultErrorMessage: true,
            });
          }
        });
    } else if (checkedBoxes.length === 2) {
      const chord1 = checkedBoxes[0];
      const chord2 = checkedBoxes[1];
      hookTheory.getMostLikelyNextChordsInSelectedProgression(chord1, chord2)
        .then((result) => {
          if (!result.includes('null')) {
            console.error(result);
            this.setState({
              viewChordResults: true,
              nextChordsPredicted: result,
              viewChordResultErrorMessage: false,
            });
          } else {
            this.setState({
              viewChordResultErrorMessage: true,
              viewChordResults: false,
            });
          }
        });
      hookTheory.getSongsThatUseSelectedProgression(chord1, chord2)
        .then((result) => {
          if (!result.includes('null')) {
            this.setState({
              viewSongResults: true,
              songsThatUseThoseChords: result,
              viewSongResultErrorMessage: false,
            });
          } else {
            this.setState({
              viewSongResultErrorMessage: true,
              viewSongResults: false,
            });
          }
        });
    }
  }

  render() {
    const {
      viewSongResults,
      viewChordResults,
      nextChordsPredicted,
      songsThatUseThoseChords,
      viewChordResultErrorMessage,
      viewSongResultErrorMessage,
    } = this.state;
    const { mostCommonChords } = this.props;
    function createMarkup(chordHTML) {
      return { __html: chordHTML };
    }
    const renderChordPredictor = () => {
      console.error(songsThatUseThoseChords);
      if (viewChordResults) {
        return (
          <div className="results">
            <hr className="my-3"/>
            <p className="is-size-5">Most Likely Next Chords In Progression</p>
            <div className="d-flex flex-row flex-wrap columns" id="predictedChordsContainer">
              {nextChordsPredicted.map((chord) => <div className="card predictedChordCards is-one-fourth" id={chord.chord_ID} key={chord.chord_ID}>
                                          <div className="card-body">
                                            <div dangerouslySetInnerHTML={createMarkup(chord.chord_HTML)} />
                                            <p className="card-text">Probability:</p>
                                            <p className="card-text">{`${(chord.probability * 100).toFixed(1)}%`}</p>
                                          </div>
                                      </div>)}
            </div>
          </div>
        );
      }
      return (
        <div>
        {viewChordResultErrorMessage
          ? (<p className="is-size-5">Unfortunately the database didn't return any predicted chords based on the selected progression.</p>)
          : (<div></div>)}
        </div>
      );
    };
    const renderRelatedSongs = () => {
      if (viewSongResults) {
        return (
          <div className="results" id="relevantSongs">
            <p className="is-size-5">Songs That Use The Selected Progression</p>
            {songsThatUseThoseChords.map((song) => <div className="card" key={song.song}>
                                        <div className="card-body">
                                          <p className="card-text">Artist: {song.artist}</p>
                                          <p className="card-text">Section: {song.section}</p>
                                          <p className="card-text">Song: {song.song}</p>
                                          <a className="card-text" href={song.url} target="_blank" rel="noopener noreferrer">Listen On Hooktheory</a>
                                        </div>
                                    </div>)}
          </div>
        );
      }
      return (
        <div>
        {viewSongResultErrorMessage
          ? (<p className="is-size-5">Unfortunately the database didn't return any songs that contain the selected progression.</p>)
          : (<div></div>)}
        </div>
      );
    };
    return (
      <div className="ChordPredictor box">
        <p><strong>The chords below are listed in order by frequency of use in today's top radio hits. Select 1 or 2 chords from the options below, to see what chords options (using the Nashville Number System notation) would most likely work next in your progression, based on their use in existing songs. If you select 2 chords, you will also see results for popular songs that incorporate the selected chord progression.</strong></p>
        <form className="form-group" onChange={this.handleCheckboxLimit} id="chordRadioBox d-flex flex-row flex-wrap">
          {mostCommonChords.map((chord) => <div key={chord.chord_ID} className="wrap checkboxWrap is-one-fourth">
                                            <input className="chord-checkbox" type="checkbox" name={chord.chord_ID} value={chord.child_path} onChange={this.handleCheckboxLimit}/>
                                            <label htmlFor={chord.chord_ID}><div dangerouslySetInnerHTML={createMarkup(chord.chord_HTML)} /></label><br/>
                                           </div>)
          }
        </form>
        <input id="chordSubmit" type="submit" value="Submit" onClick={this.handleChordSubmit}></input>
        { renderChordPredictor() }
        { renderRelatedSongs() }
      </div>
    );
  }
}

export default ChordPredictor;
