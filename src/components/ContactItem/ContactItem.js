import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';

import img from 'images/man.jpg';
import css from 'components/ContactItem/ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      <img src={img} alt="Man" width="40px" height="27px" />
      <div className={css.box}>
        <div>
          <p className={css.textName}>{name}</p>
          <p className={css.textNumber}>{number}</p>
        </div>
        <button
          type="button"
          onClick={() => dispatch(deleteContact(id))}
          className={`${css.btn} button`}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
