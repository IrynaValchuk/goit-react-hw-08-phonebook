import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import css from 'components/Navigation/Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <ul className={css.navList}>
        <li>
          <NavLink to="/" className={css.navLink}>
            Home
          </NavLink>
        </li>
        <li>
          {isLoggedIn && (
            <NavLink to="/contacts" className={css.navLink}>
              Contacts
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};
