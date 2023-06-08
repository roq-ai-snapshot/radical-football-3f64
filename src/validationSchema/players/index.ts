import * as yup from 'yup';
import { parentValidationSchema } from 'validationSchema/parents';

export const playerValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  coach_id: yup.string().nullable().required(),
  parent: yup.array().of(parentValidationSchema),
});
