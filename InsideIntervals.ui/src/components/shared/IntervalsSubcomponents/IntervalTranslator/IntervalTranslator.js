import React from 'react';
import teoria from 'teoria';
import './IntervalTranslator.scss';

class IntervalTranslator extends React.Component {
  state = {
    viewNotesToIntervalTranslator: false,
    notes: ['c', 'c#', 'db', 'd', 'd#', 'eb', 'e', 'f', 'f#', 'gb', 'g', 'g#', 'ab', 'a', 'a#', 'bb', 'b'],
    noteDropdown1: '',
    noteDropdown2: '',
  }

  translateNotes = () => {
    this.setState({
      viewNotesToIntervalTranslator: true,
    });
  }

  render() {
    const {
      notes,
      viewNotesToIntervalTranslator,
      noteDropdown1,
      noteDropdown2,
    } = this.state;
    const renderNotesToIntervalTranslator = () => {
      if (viewNotesToIntervalTranslator === true) {
        const results = teoria.interval.between(teoria.note(`${noteDropdown1}`), teoria.note(`${noteDropdown2}`));
        console.error(results);
        return (
          <div className="results">
            {/* <p>{results}</p> */}
          </div>
        );
      }
      return (
        <div></div>
      );
    };
    return (
      <div>
        <div className="notesToIntervalTranslator">
          <select id="notesDropdown1" onChange={(e) => this.setState({ noteDropdown1: e.target.value })}>
            {notes.map((note) => <option value={note}>{note}</option>)}
          </select>
          <select id="notesDropdown2" onChange={(e) => this.setState({ noteDropdown2: e.target.value })}>
            {notes.map((note) => <option value={note}>{note}</option>)}
          </select>
          <input id="notesToIntervalSubmit" type="submit" value="Submit" onClick={this.translateNotes}></input>
          { renderNotesToIntervalTranslator() }
        </div>
        <div className="showNextNoteByInterval">
        {/* show next note based on first note and interval */}
        </div>
      </div>
    );
  }
}
export default IntervalTranslator;
