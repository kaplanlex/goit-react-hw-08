import * as Yup from 'yup';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import { register } from '../../redux/auth/operations';
import styles from './RegisterForm.module.css';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required!'),
    email: Yup.string().email('Invalid email').required('Required!'),
    password: Yup.string()
      .min(6, 'At least 6 characters')
      .required('Required!'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(response => {
        toast.success(`Welcome, ${response.user.name}`);
        resetForm();
      })
      .catch(() => {
        toast.error('Email is already in use');
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field type="text" name="name" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>

        <label className={styles.label}>
          Email
          <Field type="email" name="email" className={styles.input} />
          <ErrorMessage name="email" component="div" className={styles.error} />
        </label>

        <label className={styles.label}>
          Password
          <Field type="password" name="password" className={styles.input} />
          <ErrorMessage name="password" component="div" className={styles.error} />
        </label>

        <button type="submit" className={styles.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;