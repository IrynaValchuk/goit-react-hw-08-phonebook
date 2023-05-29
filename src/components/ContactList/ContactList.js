import { useSelector } from 'react-redux';
import { ContactItem } from 'components';
import { Loader } from 'components';
import {
  selectContacts,
  selectFilterValue,
  selectIsLoading,
} from 'redux/contacts/selectors';

import css from 'components/ContactList/ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterValue);
  const isLoading = useSelector(selectIsLoading);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul className={css.list}>
      {isLoading && <Loader />}
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </ul>
  );
};
