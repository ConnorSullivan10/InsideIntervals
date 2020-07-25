import React from 'react';
import UserFileUpload from '../../shared/UserFileUpload/UserFileUpload';
import UserJournalEntries from '../../shared/UserJournalEntries/UserJournalEntries';
import userData from '../../../helpers/data/userData';
import './UserProfile.scss';

class UserProfile extends React.Component {
  render() {
    const { firebaseUid } = this.props;
    // console.log(firebaseUid);
    return (
      <div className="UserProfile">
        <h1 className="text-center">User Profile</h1>
        <UserFileUpload firebaseUid={firebaseUid}/>
        <UserJournalEntries firebaseUid={firebaseUid}/>
      </div>
    );
  }
}

export default UserProfile;
