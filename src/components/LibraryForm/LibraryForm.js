// import React, { useState } from "react";
// import { useDispatch} from 'react-redux';
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import styles from "./LibraryForm.module.css";
// import * as Joi from "joi";
// import * as Yup from 'yup';


// import { addBookOperation } from '../../redux/operations/bookOperation';


// const getYear = () => {
//   return new Date().getFullYear();
// };

// // const schema = Joi.object({
// //   title: Joi.string().min(2).required(),

// //   author: Joi.string().min().required(),

// //   year: Joi.number().min(1500).max(getYear()).required(),

// //   numberOfPages: Joi.number().min(1).required(),
// // });

// const schema = Yup.object().shape({
//   title: Yup.string()
//       .min(2, 'Занадто коротка назва!')
//       .required('Заповніть поле "Назва книги"'),
//   author: Yup.string().required('Заповніть поле "Автор книги"'),
//   year: Yup.number()
//       .min(1500, 'Min значення 1500')
//       .max(getYear(), 'Не більш, ніж поточний рік')
//       .required('Заповніть поле "Рік випуску"')
//       .typeError('Введіть число'),
//   numberOfPages: Yup.number()
//       .min(1, 'Min значення 1')
//       .required('Заповніть поле "Кількість сторінок"')
//       .typeError('Введіть число'),
// });

// const initialState = {
//   title: "",
//   author: "",
//   year: "",
//   numberOfPages: "",
// };


// const LibraryForm = () => {
//   const dispatch = useDispatch();
//   const [state] = useState({ ...initialState });

//   const onHandlerSubmit = values => {
//     dispatch(addBookOperation(values));
//   };

//   return (
//     <div>
//       <Formik
//         initialValues={state}
//         validationSchema={schema}
//         onSubmit={(values, actions) => {
//           onHandlerSubmit({ ...values });

//           actions.resetForm({ ...state });
//       }}
//       >
//         {({ values }) => (
//           <div className={styles.formWrapper}>
//             <Form className={styles.bookForm}>
//               <div className={styles.bookFormList}>
//                 <label className={styles.bookFormListItem}>
//                   <p className={styles.bookFormListItemTitle}>Назва книги</p>
//                   <div className={styles.wrapper}>
//                     <Field
//                       className={styles.bookFormInput}
//                       type="text"
//                       value={values.title}
//                       name="title"
//                       placeholder="..."
//                       autoComplete="off"
//                     />
//                     <ErrorMessage
//                       className={styles.bookFormError}
//                       component="div"
//                       name="title"
//                     />
//                   </div>
//                 </label>
//                 <label className={styles.bookFormListItem}>
//                   <p className={styles.bookFormListItemTitle}>Автор книги</p>
//                   <div className={styles.wrapper}>
//                     <Field
//                       className={styles.bookFormInput}
//                       type="text"
//                       value={values.author}
//                       name="author"
//                       placeholder="..."
//                       autoComplete="off"
//                     />
//                     <ErrorMessage
//                       className={styles.bookFormError}
//                       component="div"
//                       name="author"
//                     />
//                   </div>
//                 </label>

//                 <label className={styles.bookFormListItem}>
//                   <p className={styles.bookFormListItemTitle}>Рік випуску</p>
//                   <div className={styles.wrapper}>
//                     <Field
//                       className={styles.bookFormInput}
//                       type="number"
//                       value={values.year}
//                       name="year"
//                       placeholder="..."
//                       autoComplete="off"
//                     />
//                     <ErrorMessage
//                       className={styles.bookFormError}
//                       component="div"
//                       name="year"
//                     />
//                   </div>
//                 </label>

//                 <label className={styles.bookFormListItem}>
//                   <p className={styles.bookFormListItemTitle}>
//                     Кількість сторінок
//                   </p>
//                   <div className={styles.wrapper}>
//                     <Field
//                       className={styles.bookFormInput}
//                       type="number"
//                       value={values.numberOfPages}
//                       name="numberOfPages"
//                       placeholder="..."
//                       autoComplete="off"
//                     />
//                     <ErrorMessage
//                       className={styles.bookFormError}
//                       component="div"
//                       name="numberOfPages"
//                     />
//                   </div>
//                 </label>
//               </div>
//               <button type="submit" className={styles.bookFormBtn}>
//                 Додати
//               </button>
//             </Form>
//           </div>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default LibraryForm;
