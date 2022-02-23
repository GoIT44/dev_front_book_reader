import * as Yup from 'yup';

const schemaValidChooseRating = Yup.object().shape({
  comment: Yup.string()
    .min(2, 'Відгук не може бути таким коротким!')
    .max(5000, 'Відгук занадто довгий!')
    .required('Залиште Ваш відгук!')
    .typeError('Must be a string.'),
});

export default schemaValidChooseRating;
