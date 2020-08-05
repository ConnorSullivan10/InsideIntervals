import React, { Component } from 'react';
import UserJournalEntries from '../UserJournalEntries/UserJournalEntries';
import uploadFile from '../../../helpers/data/fileUpload';
import userData from '../../../helpers/data/userData';
import './UserFileUpload.scss';

class UserFileUpload extends Component {
    state = {
      showForm: false,
      title: '',
      journalEntry: '',
      file: {},
      userEntries: [],
    }

    componentDidUpdate(prevProps) {
      if (this.props.firebaseUid !== prevProps.firebaseUid) {
        this.setUserEntries();
      }
    }

    setUserEntries = () => {
      const { firebaseUid } = this.props;
      userData.getAllUserEntries(firebaseUid)
        .then((response) => {
          this.setState({ userEntries: response });
        })
      // eslint-disable-next-line no-sequences
        .catch((err) => ('error with get all User Entries', err));
    }

    showEntryForm = (e) => {
      e.preventDefault();
      this.setState({ showForm: true });
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
      uploadFile.uploadFile(file, title, journalEntry, firebaseUid)
        .then(() => this.setUserEntries());
      this.setState({
        showForm: false,
        title: '',
        journalEntry: '',
        file: {},
      });
    }

    deleteEntry = (e) => {
      e.preventDefault();
      const entryIdToDelete = e.target.id;
      userData.deleteUserEntry(entryIdToDelete)
        .then(() => this.setUserEntries());
    }

    render() {
      const {
        showForm, title, journalEntry,
      } = this.state;
      const renderForm = () => {
        if (showForm === true) {
          return (
        <div className="userFileUpload">
          <h1 className="title" id="myProfileTitle">My Profile</h1>
          <form className="notification column">
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Title</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <p className="control is-expanded has-icons-left">
                          <input className="input" type="text" placeholder="Title For File Or Journal Entry" onChange={this.titleChange} value={title} required/>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Details</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <textarea className="textarea" placeholder="Add more details regarding the file you're uploading, or journal entry regarding what you've been working on." onChange={this.journalEntryChange} value={journalEntry} required></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal">
                    <div className="field-label">
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <label htmlFor="exampleFormControlFile1">File To Upload</label>
                          <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={this.fileChanged} required/>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal">
                    <div className="field-label">
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <button className="button is-primary" onClick={this.saveNewUserEntry}>
                            Submit User Entry
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
            </form>
            </div>
          );
        }
        return (<div></div>);
      };
      return (
        <div id="userUpload">
          <div className="level" id="profileHeader">
            <h1 className="title" id="myProfileTitle">My Profile</h1>
            <button id="uploadBtn" className="button is-success is-rounded" onClick={this.showEntryForm}>Upload A File/Journal Entry</button>
          </div>
          { renderForm() }
          <UserJournalEntries userEntries={this.state.userEntries} deleteEntry={this.deleteEntry}/>
        </div>
      );
    }
}

export default UserFileUpload;
