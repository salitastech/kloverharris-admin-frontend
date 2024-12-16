import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';
import OtpInput from 'react18-input-otp';

type Props = {
  title?: string;
  open: boolean;
  loading?: boolean;
  onClose: () => void;
  onSubmit: (otp: string) => void;
};

const OtpModal = ({ loading, open, onClose, onSubmit }: Props) => {
  const [otp, setOtp] = useState<string>('');

  const handleOtpSubmit = () => {
    if (otp.trim().length === 6) {
      onSubmit(otp);
      setOtp('');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ fontWeight: '600' }}>Enter OTP</DialogTitle>
      <DialogContent
        sx={{
          width: '20em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <OtpInput
          isDisabled={loading}
          inputStyle='bg-[#FAFAFA] dark:bg-mentorfy-dark1 dark:text-white mx-[5px] rounded-[5px] !w-[300px] h-[36px]'
          isInputNum
          focusStyle='border border-mentorfy-primary'
          value={otp}
          onChange={setOtp}
          numInputs={6}
        />
      </DialogContent>
      <DialogActions>
        <Button disabled={loading} onClick={onClose} color='secondary'>
          Cancel
        </Button>
        <Button
          onClick={handleOtpSubmit}
          variant='contained'
          color='primary'
          disabled={!otp || loading}
        >
          Verify OTP
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OtpModal;
