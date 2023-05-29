import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

import css from 'components/UserMenu/UserMenu.module.css';

export const UserMenu = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.box}>
      <p className={css.text}>{email}</p>
      <button
        onClick={handleLogout}
        type="button"
        className={`${css.btn} button`}
      >
        Logout
      </button>
    </div>
  );
};
