import Preloader from './../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={styles.wrapper}>
      <img src={props.profile.photos.large} alt=""/>
      <p><b>Полное имя:</b> {props.profile.fullName}</p>
      <p><ProfileStatus status={props.status} updateStatus={props.updateStatus} /></p>
      <p><b>О мне:</b> {props.profile.lookingForAJobDescription}</p>
    </div>
  );
}

export default ProfileInfo;