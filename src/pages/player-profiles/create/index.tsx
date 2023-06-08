import AppLayout from 'layout/app-layout';
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberInput,
} from '@chakra-ui/react';
import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import { useRouter } from 'next/router';
import { createPlayerProfile } from 'apiSdk/player-profiles';
import { Error } from 'components/error';
import { playerProfileValidationSchema } from 'validationSchema/player-profiles';
import { AsyncSelect } from 'components/async-select';
import { ArrayFormField } from 'components/array-form-field';
import { AccessOperationEnum, AccessServiceEnum, withAuthorization } from '@roq/nextjs';
import { PlayerInterface } from 'interfaces/player';
import { getPlayers } from 'apiSdk/players';
import { PlayerProfileInterface } from 'interfaces/player-profile';

function PlayerProfileCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: PlayerProfileInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createPlayerProfile(values);
      resetForm();
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<PlayerProfileInterface>({
    initialValues: {
      personal_information: '',
      notes: '',
      player_id: (router.query.player_id as string) ?? null,
    },
    validationSchema: playerProfileValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout>
      <Text as="h1" fontSize="2xl" fontWeight="bold">
        Create Player Profile
      </Text>
      <Box bg="white" p={4} rounded="md" shadow="md">
        {error && <Error error={error} />}
        <form onSubmit={formik.handleSubmit}>
          <FormControl id="personal_information" mb="4" isInvalid={!!formik.errors?.personal_information}>
            <FormLabel>Personal Information</FormLabel>
            <Input
              type="text"
              name="personal_information"
              value={formik.values?.personal_information}
              onChange={formik.handleChange}
            />
            {formik.errors.personal_information && (
              <FormErrorMessage>{formik.errors?.personal_information}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl id="notes" mb="4" isInvalid={!!formik.errors?.notes}>
            <FormLabel>Notes</FormLabel>
            <Input type="text" name="notes" value={formik.values?.notes} onChange={formik.handleChange} />
            {formik.errors.notes && <FormErrorMessage>{formik.errors?.notes}</FormErrorMessage>}
          </FormControl>
          <AsyncSelect<PlayerInterface>
            formik={formik}
            name={'player_id'}
            label={'Select Player'}
            placeholder={'Select Player'}
            fetcher={getPlayers}
            renderOption={(record) => (
              <option key={record.id} value={record.id}>
                {record?.user_id}
              </option>
            )}
          />
          <Button isDisabled={formik?.isSubmitting} colorScheme="blue" type="submit" mr="4">
            Submit
          </Button>
        </form>
      </Box>
    </AppLayout>
  );
}

export default withAuthorization({
  service: AccessServiceEnum.PROJECT,
  entity: 'player_profile',
  operation: AccessOperationEnum.CREATE,
})(PlayerProfileCreatePage);
