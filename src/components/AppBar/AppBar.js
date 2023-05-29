import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthNav, Navigation, UserMenu } from 'components';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import css from 'components/AppBar/AppBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={`${css.box} container`}>
      <Link to="/" className={css.logo}>
        Phone<span className={css.logoAccent}>Book</span>
      </Link>
      <div className={css.menuBox}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </div>
  );
};
