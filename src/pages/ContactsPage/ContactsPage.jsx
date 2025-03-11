import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { selectLoading } from '../../redux/contacts/selectors';
import styles from './ContactsPage.module.css';
import { useEffect } from 'react';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Contacts</h2>
      <ContactForm />
      {isLoading && <p>Loading...</p>}
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;