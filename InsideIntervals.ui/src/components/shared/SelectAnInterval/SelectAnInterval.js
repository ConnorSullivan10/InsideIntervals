import React from 'react';
import './SelectAnInterval.scss';

class SelectAnInterval extends React.Component {
  state = {
    selectedOption: '',
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  }

  handleIntervalSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    console.log(this.state.selectedOption);
  };

  render() {
    // const { userEmail, firebaseUid } = this.props;
    return (
      <div className="SelectAnInterval">
        <form onSubmit={this.handleIntervalSubmit}>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="root"
                className="form-check-input"
                checked= {this.state.selectedOption === 'root'}
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
                checked= {this.state.selectedOption === 'min2'}
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
                checked= {this.state.selectedOption === 'maj2'}
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
                checked= {this.state.selectedOption === 'min3'}
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
                checked= {this.state.selectedOption === 'maj3'}
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
                checked= {this.state.selectedOption === 'perf4'}
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
                checked= {this.state.selectedOption === 'perf5'}
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
                checked= {this.state.selectedOption === 'min6'}
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
                checked= {this.state.selectedOption === 'maj6'}
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
                checked= {this.state.selectedOption === 'min7'}
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
                checked= {this.state.selectedOption === 'maj7'}
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
                checked= {this.state.selectedOption === 'perf8'}
                onChange={this.handleOptionChange}
              />
              Perfect 8th/Octave
            </label>
          </div>
          <div className="form-group">
            <button className="btn btn-primary mt-2 learnMore" type="submit">
              Learn More
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SelectAnInterval;
