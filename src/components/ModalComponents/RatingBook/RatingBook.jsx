import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {updateResumeBook} from '../../../redux/books/operations/bookOperation'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CancelButton from '../../Buttons/ModalButton/CancelButton/CancelButton';
import DoneButton from '../../Buttons/ModalButton/DoneButton/DoneButton';
import withModal from '../../ModalHoc/withModal/withModal';
import ChooseRating from './ChooseRating/ChooseRating';
import schemaValidChooseRating from '../validation/schemaValidChooseRating';
import styles from './RatingBook.module.scss';

const RatingBook = ({ toogleModal, id, comment, rating }) => {
  const [ratingValue, setRatingValue] = useState(rating);

  const dispatch = useDispatch();

  const onSave = ({ comment }) => {
    dispatch(updateResumeBook(id, ratingValue, comment));
  };

  return (
    <Formik
      initialValues={{ resume: comment }}
      validationSchema={schemaValidChooseRating}
      onSubmit={onSave}
    >
      {({ touched, errors }) => (
        <Form>
          <div className={styles.container}>
            <h2 className={styles.title}>
            Обрати рейтинг книги
            </h2>
            <ChooseRating
              setRating={setRatingValue}
              rating={rating}
              name="rating"
            />
            <h2 className={styles.title}>
            Резюме
            </h2>
            <Field
              as="textarea"
              placeholder="..."
              type="text"
              name="resume"
              className={
                `${touched.resume && errors.resume}` ? `${styles.textarea}` : ''
              }
            />
            <ErrorMessage
              component="div"
              name="resume"
              className={styles.errorMessage}
            />
            <CancelButton styleBtn={styles.canselBtn} onCbClick={toogleModal}>
            Назад
            </CancelButton>
            <DoneButton styleBtn={styles.doneBtn}>
            Зберегти
            </DoneButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default withModal(RatingBook);
