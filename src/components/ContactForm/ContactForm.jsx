import * as Yup from 'yup';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from '../../redux/contacts/operations.js';
import { selectAllContacts } from '../../redux/contacts/selectors.js';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required!'),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Format: 123-45-67')
      .required('Required!'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isExist) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label>
            <p className={styles.text}>Name</p>
            <Field type="text" name="name" className={styles.input} />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </label>
          <label>
            <p className={styles.text}>Number</p>
            <Field type="text" name="number" className={styles.input} />
            <ErrorMessage name="number" component="div" className={styles.error} />
          </label>
          <button type="submit" className={styles.button}>
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;