import * as Yup from 'yup';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import { login } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'At least 6 characters').required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values))
      .unwrap()
      .then(response => {
        toast.success(`Welcome, ${response.user.name}`);
        navigate('/contacts', { replace: true });
      })
      .catch(() => toast.error('Wrong email or password'));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
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
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;