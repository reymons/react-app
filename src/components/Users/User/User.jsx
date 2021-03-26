import styles from './User.module.css';
import React from 'react';

const BTN_TEXT_STATES = ['Удалить', 'Добавить'];

class User extends React.Component {
  render() {
    return(
      <div className={styles.wrapper} key={this.props.id}>
      <div className={styles.userInfo}>
        <div className={styles.leftSide}>
          <img src={this.props.avatar} alt="" />
          <div className={styles.userNameStatus}>
            <div className={styles.name}>{this.props.name}</div>
            <div className={styles.status}>{this.props.status}</div>
          </div>
        </div>
      </div>
      <div>
        <button type="button" id={styles.followBtn} onClick={() => this.props.toggleFollow(this.props.id)}>
          {this.props.followed ? BTN_TEXT_STATES[0] : BTN_TEXT_STATES[1]}
        </button>
      </div>
    </div>
    )
  }
}

export default User;