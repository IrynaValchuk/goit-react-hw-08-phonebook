import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import css from 'components/ContactForm/ContactForm.module.css';

export const ContactForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmitForm = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isNumber = contacts.find(contact => contact.phone === number);

    if (isContact) {
      toast.info(`${name} is already in contacts`);
      form.reset();
      return;
    } else if (isNumber) {
      toast.info(`Number ${number} is already in contacts`);
      form.reset();
      return;
    } else {
      dispatch(addContact({ name, number }));
      onClose();
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className={css.form}>
      <label className={css.label}>
        Name
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
        Number
        <input
          type="tel"
          placeholder="Enter number: xxx-xxx-xxxx"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.input}
        />
      </label>
      <button type="submit" className={`${css.btn} button`}>
        Add contact
      </button>
    </form>
  );
};
