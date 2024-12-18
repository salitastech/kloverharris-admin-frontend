import { ContentHeader } from '@app/_components/_core';
import { ASSET_AVATARS } from '@app/_utilities/constants/paths';
import { getAssetPath } from '@app/_utilities/helpers';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Avatar,
  Button,
  Divider,
  List,
  MenuItem,
  Stack,
  styled,
  Typography,
} from '@mui/material';

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: theme.spacing(0, 1),

  '&:hover': {
    backgroundColor: 'transparent',
  },

  '& .MuiTouchRipple-root': {
    display: 'none',
  },
}));

const Item = styled('div')({
  textAlign: 'center',
});

const ProfileHeader = () => {
  return (
    <ContentHeader
      avatar={
        <Avatar
          sx={{ width: { xs: 48, sm: 72 }, height: { xs: 48, sm: 72 } }}
          alt={'Remy Sharp'}
          src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, '72x72')}
        />
      }
      title={
        <Typography fontSize={18} variant={'body1'} color={'inherit'}>
          Kiley Brown
        </Typography>
      }
      subheader={
        <Typography fontSize={12} variant={'body1'} color={'inherit'} mt={0.5}>
          Florida, USA
        </Typography>
      }
      tabs={
        <List
          disablePadding
          sx={{
            display: 'flex',
            minWidth: 0,
          }}
        >
          <StyledMenuItem>Timeline</StyledMenuItem>
          <StyledMenuItem>About</StyledMenuItem>
          <StyledMenuItem>Photos</StyledMenuItem>
          <StyledMenuItem>Friends</StyledMenuItem>
          <StyledMenuItem>More</StyledMenuItem>
        </List>
      }
      action={
        <Button
          disableRipple
          variant='text'
          startIcon={<SettingsIcon />}
          sx={{
            color: 'inherit',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          Settings
        </Button>
      }
      sx={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 1320,
        marginInline: 'auto',

        '& .MuiCardHeader-action': {
          alignSelf: 'center',
          margin: 0,
        },
      }}
    >
      <Stack
        direction={'row'}
        justifyContent={'space-evenly'}
        divider={<Divider orientation='vertical' flexItem />}
        spacing={2}
        sx={{
          mx: 1,
        }}
      >
        <Item>
          <Typography variant={'h6'} color={'inherit'} mb={0}>
            457
          </Typography>
          <Typography variant={'body1'} fontSize={12}>
            Followers
          </Typography>
        </Item>
        <Item>
          <Typography variant={'h6'} color={'inherit'} mb={0}>
            689
          </Typography>
          <Typography variant={'body1'} fontSize={12}>
            Friends
          </Typography>
        </Item>
        <Item>
          <Typography variant={'h6'} color={'inherit'} mb={0}>
            283
          </Typography>
          <Typography variant={'body1'} fontSize={12}>
            Following
          </Typography>
        </Item>
      </Stack>
    </ContentHeader>
  );
};

export { ProfileHeader };
