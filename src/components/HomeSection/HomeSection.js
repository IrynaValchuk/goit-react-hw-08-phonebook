import img from 'images/welcome.jpg';

import css from 'components/HomeSection/HomeSection.module.css';

export const HomeSection = () => {
  return (
    <section className="section">
      <div className={`${css.box} container`}>
        <div>
          <p className={css.title}>
            Welcome to the website for creating your own phone book!
          </p>
          <p className={css.descr}>
            Congratulations on taking this step forward in organizing and
            streamlining your contacts. This website will help you keep all your
            contacts in one place and quickly access the information you need.
            Say goodbye to lost phone numbers and embrace convenience in your
            daily life.
          </p>
          <p className={css.text}>Wishing you success in using the website.</p>
        </div>
        <img
          src={img}
          alt="Welcome to Phonebook"
          width="500px"
          height="400px"
          className={css.img}
        />
      </div>
    </section>
  );
};
