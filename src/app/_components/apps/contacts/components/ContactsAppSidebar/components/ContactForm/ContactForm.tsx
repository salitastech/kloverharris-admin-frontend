'use client';
import { ContactProps } from '@app/_components/apps/_types/ContactTypes';
import { useJumboDialog } from '@jumbo/components/JumboDialog/hooks/useJumboDialog';
import { Div } from '@jumbo/shared';
import {
  JumboAvatarField,
  JumboForm,
  JumboInput,
} from '@jumbo/vendors/react-hook-form';
import useSwalWrapper from '@jumbo/vendors/sweetalert2/hooks';
import { LoadingButton } from '@mui/lab';
import { validationSchema } from './validationSchema';

const ContactForm = ({ contact }: { contact?: ContactProps }) => {
  const Swal = useSwalWrapper();
  const { hideDialog } = useJumboDialog();

  const addContact = () => {
    hideDialog();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Contact has been added successfully.',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const updateContact = () => {
    hideDialog();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Contact has been updated successfully.',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const onContactSave = () => {
    if (contact?.id) {
      updateContact();
    } else {
      addContact();
    }
  };
  return (
    <JumboForm
      onSubmit={onContactSave}
      onChange={() => {}}
      validationSchema={validationSchema}
    >
      <Div
        sx={{
          '& .MuiTextField-root': {
            mb: 3,
          },
        }}
      >
        <JumboAvatarField
          fieldName={'profile_pic'}
          alt={'user profile pic'}
          sx={{
            width: 60,
            height: 60,
            margin: '0 auto 24px',
            cursor: 'pointer',
          }}
          fullWidth
        />
        <JumboInput
          fieldName='name'
          label='Name'
          fullWidth
          defaultValue={contact?.name}
          size={'small'}
        />
        <JumboInput
          fieldName='email'
          label='Email'
          fullWidth
          defaultValue={contact?.email}
          size={'small'}
        />
        <JumboInput
          fieldName='designation'
          label='Job Title'
          fullWidth
          defaultValue={contact?.designation}
          size={'small'}
        />
        <JumboInput
          fieldName='company'
          label='Company'
          fullWidth
          defaultValue={contact?.company}
          size={'small'}
        />
        <JumboInput
          fieldName='phone'
          label='Phone Number'
          fullWidth
          defaultValue={contact?.phone}
          size={'small'}
        />
        <LoadingButton
          fullWidth
          type='submit'
          variant='contained'
          size='large'
          sx={{ mb: 3 }}
        >
          Save
        </LoadingButton>
      </Div>
    </JumboForm>
  );
};
export { ContactForm };
