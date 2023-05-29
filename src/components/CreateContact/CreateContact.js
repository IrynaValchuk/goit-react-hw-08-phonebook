import { useState } from 'react';
import { ContactForm, Modal } from 'components';

import css from 'components/CreateContact/CreateContact.module.css';

export const CreateContact = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleModal}
        className={`${css.btn} button`}
      >
        Add contact
      </button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};
