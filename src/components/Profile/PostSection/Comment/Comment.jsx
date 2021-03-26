import styles from './Comment.module.css'

const Comment = (props) => {
  return (
    <div className={styles.wrapper}>
      <img src={props.avatar} alt="" />
      <div className={styles.comment}>
        <div className={styles.nickname}>{props.nickname}</div>
        <div className={styles.text}>{props.text}</div>
        <button className={styles.likeBtn}>Like {props.likeCount}</button>
      </div>
    </div>
  );
}

export default Comment;