import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.wrapper}>
      {
        pages.map(page => {
          return <span className={page === props.currentPage && styles.selectedPage} onClick={() => { props.onPageChanged(page) }}>{page}</span>
        })
      }
      {
        props.usersData.map(user => {
          return (
            <div className={styles.userWrapper}>
              <NavLink to={"/profile/" + user.id}><img src={user.photos.small} alt="" /></NavLink>
              <p>{user.name}</p>
              <p>{user.status}</p>
              <button disabled={props.idsInFollowingProcess.some(id => user.id === id)} type='button' onClick={() => {
                if (user.followed) {
                  props.unfollowUser(user.id);
                }
                else {
                  props.followUser(user.id);
                }
              }}>{user.followed ? 'Удалить' : 'Добавить'}</button>
            </div>
          )
        })
      }
      <div><button type='button'>Показать ещё</button></div>
    </div>
  );
}

export default Users;