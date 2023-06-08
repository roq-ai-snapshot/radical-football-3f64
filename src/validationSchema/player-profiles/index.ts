import * as yup from 'yup';

export const playerProfileValidationSchema = yup.object().shape({
  personal_information: yup.string(),
  notes: yup.string(),
  player_id: yup.string().nullable().required(),
});
