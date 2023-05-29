import { Link } from 'react-router-dom';
import img from 'images/not found.jpg';
import css from 'components/PageNotFoundSection/PageNotFoundSection.module.css';

export const PageNotFoundSection = () => {
  return (
    <section className={css.section}>
      <div className="container">
      <Link className={`${css.btn} button`} to="/">
          Go back
        </Link>
        <div className={css.box}>
        
          <p className={css.text}>Sorry, page not found</p>
          <img src={img} alt="Page not found" width="350px" height="300px" />
        </div>
      </div>
    </section>
  );
};
