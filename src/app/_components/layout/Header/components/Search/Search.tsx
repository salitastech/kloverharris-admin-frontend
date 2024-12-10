import { SearchGlobal } from '@app/_components/_core';
import { useSmallScreen } from '@app/_hooks';
import { Div } from '@jumbo/shared';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Slide } from '@mui/material';

type SearchProps = {
  show: boolean;
  onClose: (value: boolean) => void;
};

function Search(
  props: SearchProps = { show: true, onClose: (value: boolean) => value }
) {
  const smallScreen = useSmallScreen();
  const { show, onClose } = props;
  if (!smallScreen) {
    return (
      <SearchGlobal
        sx={{
          maxWidth: { xs: 240, md: 320 },
        }}
      />
    );
  }

  return (
    <Slide in={show}>
      <Div
        sx={{
          zIndex: 5,
          left: 0,
          right: 0,
          position: 'absolute',
          height: '100%',
        }}
      >
        <SearchGlobal
          sx={{
            maxWidth: 'none',
            height: '100%',
            display: 'flex',

            '& .MuiInputBase-root': {
              flex: 1,
              borderRadius: 0,
              background: (theme) => theme.palette.background.default,
            },
            '& .MuiInputBase-input': {
              pr: 6,
            },
          }}
        />
        <IconButton
          sx={{
            position: 'absolute',
            right: 15,
            top: '50%',
            color: 'inherit',
            transform: 'translateY(-50%)',
          }}
          onClick={() => onClose(false)}
        >
          <CloseIcon />
        </IconButton>
      </Div>
    </Slide>
  );
}

export { Search };
