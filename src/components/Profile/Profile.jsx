import PostSectionContainer from './PostSection/PostSectionContainer';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={styles.wrapper}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <PostSectionContainer />
    </div>
  )
}

export default Profile;