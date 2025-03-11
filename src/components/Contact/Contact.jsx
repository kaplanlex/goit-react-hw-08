import { deleteContact } from '../../redux/contacts/operations.js';
import styles from './Contact.module.css';
import { useDispatch } from 'react-redux';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.contact}>
      <p>{name}</p>
      <p>{number}</p>
      <button className={styles.button} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;