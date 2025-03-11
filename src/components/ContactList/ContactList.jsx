import { useDispatch, useSelector } from 'react-redux';

import Contact from '../Contact/Contact';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={() => dispatch(deleteContact(id))}
          />
        ))
      ) : (
        <p className={styles.message}>Contacts not found</p>
      )}
    </ul>
  );
};

export default ContactList;