import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import img from 'images/login.jpg';
import css from 'components/LoginForm/LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogIn = evt => {
    evt.preventDefault();
    const form = evt.target;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <section className="section">
      <div className="container">
        <div className={css.box}>
          <img src={img} alt="Log in" width="350px" height="300px" />
          <form onSubmit={handleLogIn} className={css.form}>
            <label className={css.label}>
              Email
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                required
                className={css.input}
              />
            </label>
            <label className={css.label}>
              Password
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                required
                className={css.input}
              />
            </label>
            <button type="submit" className={`${css.btn} button`}>
              Log In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
