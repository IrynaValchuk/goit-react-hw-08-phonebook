import { ContactList, CreateContact, Filter } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import img from 'images/contacts.jpg';
import css from 'components/ContactsSection/ContactsSection.module.css';

export const ContactsSection = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={css.section}>
      <div className="container">
        <CreateContact />
        {contacts.length === 0 ? (
          <div className={css.box}>
            <p className={css.text}>You don't have contact yet</p>
            <img
              src={img}
              alt="Worldwide network of contacts"
              width="350px"
              height="300px"
              className={css.img}
            />
          </div>
        ) : (
          <>
            <h2 className={css.title}>Your Contacts</h2>
            <Filter />
            <ContactList />
          </>
        )}
      </div>
    </section>
  );
};
