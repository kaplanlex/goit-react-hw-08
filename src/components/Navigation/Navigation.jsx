import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import styles from './Navigation.module.css';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.nav}>
      <NavLink className={styles.link} to="/">
        <div>Home</div>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={styles.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;