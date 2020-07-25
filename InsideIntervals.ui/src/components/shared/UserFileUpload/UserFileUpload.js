import React, { Component } from 'react';
import uploadFile from '../../../helpers/data/fileUpload';

class UserFileUpload extends Component {
    state = {
      title: '',
      journalEntry: '',
      file: {},
    }

    titleChange = (e) => {
      e.preventDefault();
      this.setState({ title: e.target.value });
    }

    journalEntryChange = (e) => {
      e.preventDefault();
      this.setState({ journalEntry: e.target.value });
    }

    fileChanged = (e) => {
      e.preventDefault();
      this.setState({ file: e.target.files[0] });
    }

    saveNewUserEntry = (e) => {
      e.preventDefault();
      const { title, journalEntry, file } = this.state;
      const { firebaseUid } = this.props;
      uploadFile.uploadFile(file, title, journalEntry, firebaseUid);
    }

    render() {
      const {
        title, journalEntry,
      } = this.state;
      return (
        <div className="userFileUpload">
          <form>
            <div className="form-group">
              <label htmlFor="journalTitleEntry">Journal Entry Title</label>
              <input type="email" className="form-control" id="journalTitleEntry" placeholder="Enter the title for your journal entry" onChange={this.titleChange} value={title}/>
            </div>
            <div className="form-group">
              <label htmlFor="journalDescription">Details</label>
              <textarea className="form-control" id="journalDescription" rows="3" aria-describedby="journalEntry" onChange={this.journalEntryChange} value={journalEntry}></textarea>
              <small id="journalEntry" className="form-text text-muted">Enter details regarding what you need to work on, or have been practicing.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">File To Upload</label>
              <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={this.fileChanged} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.saveNewUserEntry}>Submit</button>
          </form>
        </div>
      );
    }
}

export default UserFileUpload;
