import { NavLink } from 'react-router-dom';

import css from 'components/AuthNav/Auth.module.css';

export const AuthNav = () => {
  return (
    <ul className={css.box}>
      <li>
        <NavLink to="/register" className={css.navLink}>
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className={css.navLink}>
          Log In
        </NavLink>
      </li>
    </ul>
  );
};
