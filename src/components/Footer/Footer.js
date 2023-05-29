import css from 'components/Footer/Footer.module.css';

export const Footer = () => {
  return (
    <div className={css.box}>
      <p className={css.text}>&#169; 2023</p>
      <p className={css.text}>PhoneBook. All Rights Reserved.</p>
    </div>
  );
};
