'use client';
import { LabelProps } from '@app/_components/apps/_types/ContactTypes';
import { useJumboDialog } from '@jumbo/components/JumboDialog/hooks/useJumboDialog';
import { Div } from '@jumbo/shared';
import {
  JumboColorPickerField,
  JumboForm,
  JumboInput,
} from '@jumbo/vendors/react-hook-form';
import useSwalWrapper from '@jumbo/vendors/sweetalert2/hooks';
import LoadingButton from '@mui/lab/LoadingButton';
import { validationSchema } from './validationSchema';

const LabelForm = ({ label }: { label?: LabelProps }) => {
  const { hideDialog } = useJumboDialog();
  const Swal = useSwalWrapper();

  const addContactLabel = () => {
    hideDialog();
    return Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Label is added successfully.',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const updateContactLabel = () => {
    hideDialog();
    return Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Label is updated successfully.',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const onLabelSave = () => {
    if (label?.id) {
      updateContactLabel();
    } else {
      addContactLabel();
    }
  };

  return (
    <JumboForm
      validationSchema={validationSchema}
      onSubmit={onLabelSave}
      onChange={() => {}}
    >
      <Div
        sx={{
          display: 'flex',
          flex: 1,
          minWidth: 0,
          alignItems: 'flex-start',
          mb: 2,
        }}
      >
        <JumboInput
          fieldName='name'
          fullWidth
          size={'small'}
          variant={'outlined'}
          label='Name'
          sx={{
            mr: 1,
          }}
          defaultValue={label?.name}
        />
        <JumboColorPickerField fieldName='color' defaultValue={'#999999'} />
      </Div>
      <LoadingButton
        type='submit'
        variant='contained'
        size='large'
        disableElevation
        sx={{
          mb: 1,
        }}
      >
        Save
      </LoadingButton>
    </JumboForm>
  );
};
export { LabelForm };
