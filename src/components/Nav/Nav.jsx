import { NavLink } from 'react-router-dom';
import "./Nav.scss"
import { connect } from 'react-redux';

const Nav = props => {
  return (
    <nav class="nav">
      <ul>
        <li class="nav__item"><NavLink to={`/profile`} activeClassName="nav__link_active">Профиль</NavLink></li>
        <li class="nav__item"><NavLink to="/messages" activeClassName="nav__link_active">Сообщения</NavLink></li>
        <li class="nav__item"><NavLink to="/users" activeClassName="nav__link_active">Пользователи</NavLink></li>
        <li class="nav__item"><NavLink to="/settings" activeClassName="nav__link_active">Пользователи</NavLink></li>
      </ul>
    </nav>
  );
}

const mapStateToProps = state => { return { userId: state.auth.userId } }

export default connect(mapStateToProps)(Nav);