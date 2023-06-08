import * as yup from 'yup';
import { playerValidationSchema } from 'validationSchema/players';

export const coachValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  player: yup.array().of(playerValidationSchema),
});
