'use client';
import { useJumboDialog } from '@jumbo/components/JumboDialog/hooks/useJumboDialog';
import { JumboForm, JumboInput } from '@jumbo/vendors/react-hook-form';
import useSwalWrapper from '@jumbo/vendors/sweetalert2/hooks';
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material';
import { validationSchema } from './validationSchema';

const ComposeForm = ({ mailItem }: { mailItem?: any }) => {
  const Swal = useSwalWrapper();
  const { hideDialog } = useJumboDialog();

  const onSendMail = () => {
    hideDialog();
    return Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Mail has been sent successfully.',
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <JumboForm
      onSubmit={onSendMail}
      validationSchema={validationSchema}
      onChange={() => {}}
    >
      <Box
        sx={{
          '& > .MuiFormControl-root': {
            marginBottom: 2,
          },
        }}
      >
        <JumboInput
          fieldName={'to'}
          fullWidth
          size={'small'}
          type={'email'}
          placeholder={'To'}
        />
        <JumboInput
          fieldName={'subject'}
          fullWidth
          size={'small'}
          placeholder={'Subject'}
        />
        <JumboInput
          fieldName={'message'}
          fullWidth
          size={'small'}
          type={'email'}
          placeholder={'Message'}
          defaultValue={mailItem?.message}
          multiline
          rows={3}
          maxRows={4}
        />
        <LoadingButton type='submit' variant='contained' disableElevation>
          Save
        </LoadingButton>
      </Box>
    </JumboForm>
  );
};
export { ComposeForm };
