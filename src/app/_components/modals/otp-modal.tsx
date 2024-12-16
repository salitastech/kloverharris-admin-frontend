import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { useEffect, useState } from 'react';

type Props = {
  title?: string;
  open: boolean;
  loading?: boolean;
  onClose: () => void;
  onSubmit: (otp: string) => void;
};

const OtpModal = ({ loading, open, title, onClose, onSubmit }: Props) => {
  const [otp, setOtp] = useState<string>('');

  const handleOtpSubmit = () => {
    if (otp.trim().length === 6) {
      onSubmit(otp);
      // setOtp('');
    }
  };

  useEffect(() => {
    if (otp.trim().length === 6) onSubmit(otp);
  }, [otp]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ fontWeight: '600' }}>
        {title || 'Enter OTP'}
      </DialogTitle>
      <DialogContent
        sx={{
          width: '33em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <MuiOtpInput
          width={'100%'}
          autoFocus
          length={6}
          value={otp}
          onChange={(val) => setOtp(val)}
        />
      </DialogContent>
      <DialogActions>
        <Button disabled={loading} onClick={onClose} color='secondary'>
          Cancel
        </Button>
        {loading ? (
          <CircularProgress size={20} />
        ) : (
          <Button
            onClick={handleOtpSubmit}
            variant='contained'
            color='primary'
            disabled={!otp || loading}
          >
            Verify OTP
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default OtpModal;
