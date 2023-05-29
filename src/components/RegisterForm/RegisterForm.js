import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import img from 'images/register.jpg';
import css from 'components/RegisterForm/RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleRegister = evt => {
    evt.preventDefault();
    const form = evt.target;
    dispatch(
      register({
        name: form.elements.name.value,
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
          <img src={img} alt="Register" width="350px" height="300px" />
          <form onSubmit={handleRegister} className={css.form}>
            <label className={css.label}>
              Username
              <input
                type="text"
                placeholder="Enter name"
                name="name"
                pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                className={css.input}
              />
            </label>
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
                title='Enter password minenter a password of at least 7 characters'
                required
                className={css.input}
              />
            </label>
            <button type="submit" className={`${css.btn} button`}>
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
