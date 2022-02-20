import React, { useState } from "react";
import { useDispatch} from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./LibraryForm.module.css";
import * as Yup from 'yup';

import { addBookOperation, getUsersBooksOperation } from '../../redux/operations/bookOperation';


const getYear = () => {
  return new Date().getFullYear();
};

const schema = Yup.object().shape({
  bookTitle: Yup.string()
  .min(2, 'Занадто коротка назва!')
  .required('Заповніть поле "Назва книги"'),
  author: Yup.string().min(2, 'Занадто коротка назва!').required('Заповніть поле "Автор книги"'),
  publicDate: Yup.number()
  .min(1500, 'Min значення 1500')
  .max(getYear(), 'Не більш, ніж поточний рік')
  .required('Заповніть поле "Рік випуску"')
  .typeError('Введіть число'),
  numbOfPages: Yup.number()
  .min(1, 'Min значення 1')
  .required('Заповніть поле "Кількість сторінок"')
  .typeError('Введіть число'),
});

const initialState = {
  bookTitle: "",
  author: "",
  publicDate: "",
  numbOfPages: ""
};




const LibraryForm = () => {
  const dispatch = useDispatch();
  const [state] = useState({ ...initialState });

  const onHandlerSubmit = values => {
    const book = {...values, publicDate: values.publicDate.toString()}
    dispatch(addBookOperation(book));
    dispatch(getUsersBooksOperation())
  };

  return (
    <div>
      <Formik
        initialValues={state}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          onHandlerSubmit({ ...values });

          actions.resetForm({ ...state });
      }}
      >
        {({ values }) => (
          <div className={styles.formWrapper}>
            <Form className={styles.bookForm}>
              <div className={styles.bookFormList}>
                <label className={styles.bookFormListItem}>
                  <p className={styles.bookFormListItemTitle}>Назва книги</p>
                  <div className={styles.wrapper}>
                    <Field
                      className={styles.bookFormInput}
                      type="text"
                      value={values.title}
                      name="bookTitle"
                      placeholder="..."
                      autoComplete="off"
                    />
                    <ErrorMessage
                      className={styles.bookFormError}
                      component="div"
                      name="bookTitle"
                    />
                  </div>
                </label>
                <label className={styles.bookFormListItem}>
                  <p className={styles.bookFormListItemTitle}>Автор книги</p>
                  <div className={styles.wrapper}>
                    <Field
                      className={styles.bookFormInput}
                      type="text"
                      value={values.author}
                      name="author"
                      placeholder="..."
                      autoComplete="off"
                    />
                    <ErrorMessage
                      className={styles.bookFormError}
                      component="div"
                      name="author"
                    />
                  </div>
                </label>

                <label className={styles.bookFormListItem}>
                  <p className={styles.bookFormListItemTitle}>Рік випуску</p>
                  <div className={styles.wrapper}>
                    <Field
                      className={styles.bookFormInput}
                      type="number"
                      value={values.publicDate}
                      name="publicDate"
                      placeholder="..."
                      autoComplete="off"
                    />
                    <ErrorMessage
                      className={styles.bookFormError}
                      component="div"
                      name="publicDate"
                    />
                  </div>
                </label>

                <label className={styles.bookFormListItem}>
                  <p className={styles.bookFormListItemTitle}>
                    Кількість сторінок
                  </p>
                  <div className={styles.wrapper}>
                    <Field
                      className={styles.bookFormInput}
                      type="number"
                      value={values.numbOfPages}
                      name="numbOfPages"
                      placeholder="..."
                      autoComplete="off"
                    />
                    <ErrorMessage
                      className={styles.bookFormError}
                      component="div"
                      name="numbOfPages"
                    />
                  </div>
                </label>
              </div>
              <button type="submit" className={styles.bookFormBtn}>
                Додати
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LibraryForm;
