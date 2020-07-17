import React from 'react';
import SingleInterval from '../SingleInterval/SingleInterval';
import './SelectAnInterval.scss';

class SelectAnInterval extends React.Component {
  state = {
    selectedOption: '',
    viewResults: false,
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value,
      viewResults: true,
    });
  }

  // handleIntervalSubmit = (formSubmitEvent) => {
  //   formSubmitEvent.preventDefault();
  //   console.log(this.state.selectedOption);
  //   this.setState({
  //     viewResults: true,
  //   });
  // };

  render() {
    const { selectedOption, viewResults } = this.state;
    const renderIntervalDetails = () => {
      if (viewResults === true) {
        return (
          <div className="results">
            <SingleInterval intervalName={selectedOption}/>
          </div>
        );
      }
      return (
        <div></div>
      );
    };
    return (
      <div className="SelectAnInterval">
        <h4>Select an interval from the options below to learn more about it's sound.</h4>
        <form onSubmit={this.handleIntervalSubmit}>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="root"
                className="form-check-input"
                checked= {selectedOption === 'root'}
                onChange={this.handleOptionChange}
              />
              Root
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="min2"
                className="form-check-input"
                checked= {selectedOption === 'min2'}
                onChange={this.handleOptionChange}
              />
              Minor 2nd
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="maj2"
                className="form-check-input"
                checked= {selectedOption === 'maj2'}
                onChange={this.handleOptionChange}
              />
              Major 2nd
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="min3"
                className="form-check-input"
                checked= {selectedOption === 'min3'}
                onChange={this.handleOptionChange}
              />
              Minor 3rd
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="maj3"
                className="form-check-input"
                checked= {selectedOption === 'maj3'}
                onChange={this.handleOptionChange}
              />
              Major 3rd
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="perf4"
                className="form-check-input"
                checked= {selectedOption === 'perf4'}
                onChange={this.handleOptionChange}
              />
              Perfect 4th
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="perf5"
                className="form-check-input"
                checked= {selectedOption === 'perf5'}
                onChange={this.handleOptionChange}
              />
              Perfect 5th
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="min6"
                className="form-check-input"
                checked= {selectedOption === 'min6'}
                onChange={this.handleOptionChange}
              />
              Minor 6th
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="maj6"
                className="form-check-input"
                checked= {selectedOption === 'maj6'}
                onChange={this.handleOptionChange}
              />
              Major 6th
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="min7"
                className="form-check-input"
                checked= {selectedOption === 'min7'}
                onChange={this.handleOptionChange}
              />
              Minor 7th
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="maj7"
                className="form-check-input"
                checked= {selectedOption === 'maj7'}
                onChange={this.handleOptionChange}
              />
              Major 7th
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="perf8"
                className="form-check-input"
                checked= {selectedOption === 'perf8'}
                onChange={this.handleOptionChange}
              />
              Perfect 8th/Octave
            </label>
          </div>
          {/* <div className="form-group">
            <button className="btn btn-primary mt-2 learnMore" type="submit">
              Learn More
            </button>
          </div> */}
        </form>
        { renderIntervalDetails() }
      </div>
    );
  }
}

export default SelectAnInterval;
