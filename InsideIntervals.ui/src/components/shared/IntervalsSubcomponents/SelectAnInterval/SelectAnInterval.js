import React from 'react';
import SingleInterval from '../SingleInterval/SingleInterval';
import intervalData from '../../../../helpers/data/intervalData';
import './SelectAnInterval.scss';

class SelectAnInterval extends React.Component {
  state = {
    selectedOption: '',
    viewResults: false,
    intervalName: '',
    chords: [],
    modes: [],
    shapes: [],
  }

  handleOptionChange = (changeEvent) => {
    const intervalId = changeEvent.target.value;
    intervalData.getAllIntervalResources(intervalId)
      .then((result) => {
        this.setState({
          selectedOption: intervalId,
          viewResults: true,
          intervalName: result.intervalName,
          chords: result.chords,
          modes: result.modes,
          shapes: result.shapes,
        });
      });
  }

  render() {
    const {
      selectedOption,
      viewResults,
      intervalName,
      chords,
      modes,
      shapes,
    } = this.state;
    const renderIntervalDetails = () => {
      if (viewResults === true) {
        return (
          <div className="results">
            <SingleInterval intervalId={selectedOption} intervalName={intervalName} chords={chords} modes={modes} shapes={shapes}/>
          </div>
        );
      }
      return (
        <div></div>
      );
    };
    return (
      <div className="SelectAnInterval">
        <h4 className="text-center">Select an interval from the options below to learn more about it's sound.</h4>
        <form onSubmit={this.handleIntervalSubmit} className="text-center">
          <div className="row">
            <div className="form-check col">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="1"
                  className="form-check-input"
                  checked= {selectedOption === '1'}
                  onChange={this.handleOptionChange}
                />
                Root/Octave
              </label>
            </div>
            <div className="form-check col">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="2"
                  className="form-check-input"
                  checked= {selectedOption === '2'}
                  onChange={this.handleOptionChange}
                />
                Minor 2nd
              </label>
            </div>
            <div className="form-check col">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="3"
                  className="form-check-input"
                  checked= {selectedOption === '3'}
                  onChange={this.handleOptionChange}
                />
                Major 2nd
              </label>
            </div>
            <div className="form-check col">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="4"
                  className="form-check-input"
                  checked= {selectedOption === '4'}
                  onChange={this.handleOptionChange}
                />
                Minor 3rd
              </label>
            </div>
          </div>
          <div className="row">
            <div className="form-check col">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="5"
                  className="form-check-input"
                  checked= {selectedOption === '5'}
                  onChange={this.handleOptionChange}
                />
                Major 3rd
              </label>
            </div>
            <div className="form-check col">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="6"
                  className="form-check-input"
                  checked= {selectedOption === '6'}
                  onChange={this.handleOptionChange}
                />
                Perfect 4th
              </label>
            </div>
            <div className="form-check col">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="7"
                  className="form-check-input"
                  checked= {selectedOption === '7'}
                  onChange={this.handleOptionChange}
                />
                Augmented 4th/Diminished 5th
              </label>
            </div>
            <div className="form-check col">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="8"
                  className="form-check-input"
                  checked= {selectedOption === '8'}
                  onChange={this.handleOptionChange}
                />
                Perfect 5th
              </label>
            </div>
          </div>
          <div className="row">
            <div className="form-check col">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="9"
                  className="form-check-input"
                  checked= {selectedOption === '9'}
                  onChange={this.handleOptionChange}
                />
                Minor 6th
              </label>
            </div>
            <div className="form-check col">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="10"
                  className="form-check-input"
                  checked= {selectedOption === '10'}
                  onChange={this.handleOptionChange}
                />
                Major 6th
              </label>
            </div>
            <div className="form-check col">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="11"
                  className="form-check-input"
                  checked= {selectedOption === '11'}
                  onChange={this.handleOptionChange}
                />
                Minor 7th
              </label>
            </div>
            <div className="form-check col">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="12"
                  className="form-check-input"
                  checked= {selectedOption === '12'}
                  onChange={this.handleOptionChange}
                />
                Major 7th
              </label>
            </div>
          </div>
        </form>
        { renderIntervalDetails() }
      </div>
    );
  }
}

export default SelectAnInterval;
