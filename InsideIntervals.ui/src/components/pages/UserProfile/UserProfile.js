import React from 'react';
import UserFileUpload from '../../shared/UserFileUpload/UserFileUpload';
import UserJournalEntries from '../../shared/UserJournalEntries/UserJournalEntries';
import UserSongIdeas from '../../shared/UserSongIdeas/UserSongIdeas';
// import IntervalTranslator from '../../shared/IntervalsSubcomponents/IntervalTranslator/IntervalTranslator';
import './UserProfile.scss';

class UserProfile extends React.Component {
  render() {
    const { firebaseUid } = this.props;
    return (
      <div className="UserProfile">
        <h1 className="text-center">User Profile</h1>
        <UserFileUpload firebaseUid={firebaseUid}/>
        <UserJournalEntries firebaseUid={firebaseUid}/>
        <UserSongIdeas/>
        {/* <IntervalTranslator/> */}
      </div>
    );
  }
}

export default UserProfile;
