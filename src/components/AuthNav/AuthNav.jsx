import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={styles.container}>
      <NavLink className={styles.link} to="/register">
        <div className={styles.register}>Register</div>
      </NavLink>
      <NavLink className={styles.link} to="/login">
        <div className={styles.register}>Log In</div>
      </NavLink>
    </div>
  );
};