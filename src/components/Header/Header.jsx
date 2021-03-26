import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = (props) => {
  return (
    <header class="header">
      {
        props.isAuth 
        && <p class="header__login">{props.login}<br />
        <NavLink to='/login' onClick={props.logout}>Log out</NavLink>
        </p>
      }
    </header> 
  );
}

export default Header;