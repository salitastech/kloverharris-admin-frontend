'use client';
import { Div } from '@jumbo/shared';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import styled from '@mui/material/styles/styled';
import React from 'react';
import { UserProps } from '../..';

type ItemType = {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};
const Item = ({ children, sx }: ItemType) => (
  <Div
    sx={{
      textAlign: 'center',
      flexBasis: '33.33%',
      p: (theme) => theme.spacing(1, 2),
      ...sx,
    }}
  >
    {children}
  </Div>
);

const ActionButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  borderBottom: 'none',
  borderRadius: 0,
  textTransform: 'none',
  letterSpacing: 0,
  borderColor: theme.palette.divider,
  color: theme.palette.text.secondary,

  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderBottom: 'none',
  },
}));

const UserItem = ({ item }: { item: UserProps }) => {
  const [bookmark, setBookmark] = React.useState<boolean>(item?.isFavorite);

  const handleClick = React.useCallback(() => {
    setBookmark(!bookmark);
  }, [bookmark]);

  return (
    <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
      <Card>
        <CardHeader
          avatar={
            <IconButton onClick={handleClick} sx={{ verticalAlign: 'middle' }}>
              {bookmark ? (
                <StarIcon fontSize={'small'} color={'warning'} />
              ) : (
                <StarBorderIcon fontSize={'small'} />
              )}
            </IconButton>
            // <JumboBookmark value={user.isFavorite} sx={{verticalAlign: 'middle', fontSize: 'small'}}/>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreHorizIcon />
            </IconButton>
          }
          sx={{ pb: 0 }}
        ></CardHeader>
        <CardContent
          sx={{
            pt: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Div sx={{ mb: 3 }}>
            <Badge
              overlap='circular'
              variant='dot'
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              sx={{
                '.MuiBadge-badge': {
                  border: '2px solid #FFF',
                  height: '14px',
                  width: '14px',
                  borderRadius: '50%',
                  bgcolor: item.isOnline ? 'success.main' : '#757575',
                },
              }}
            >
              <Avatar
                sx={{ width: 72, height: 72 }}
                alt={`${item.firstName} ${item.lastName}`}
                src={item.profilePic}
              />
            </Badge>
          </Div>
          <Typography
            variant={'h5'}
            mb={0.75}
          >{`${item.firstName} ${item.lastName}`}</Typography>
          <Typography variant={'h6'} color='text.secondary' mb={0.5}>
            {item.title}
          </Typography>
          <Typography
            fontSize={'12px'}
            variant={'body1'}
            color='text.secondary'
            mb={2}
          >
            {item.handle}
          </Typography>
          <Stack direction={'row'} color={'text.secondary'} mb={1}>
            <IconButton color='inherit' aria-label='Facebook'>
              <FacebookIcon fontSize={'small'} />
            </IconButton>
            <IconButton color='inherit' aria-label='Twitter'>
              <TwitterIcon fontSize={'small'} />
            </IconButton>
            <IconButton color='inherit' aria-label='LinkedIn'>
              <LinkedInIcon fontSize={'small'} />
            </IconButton>
          </Stack>
          <Stack direction={'row'} alignSelf='stretch'>
            <Item>
              <Typography variant={'h6'} mb={0.5}>
                {item.summary.views}
              </Typography>
              <Typography
                variant={'body1'}
                color='text.secondary'
                fontSize={13}
              >
                Views
              </Typography>
            </Item>
            <Item>
              <Typography variant={'h6'} mb={0.5}>
                {item.summary.projects}
              </Typography>
              <Typography
                variant={'body1'}
                color='text.secondary'
                fontSize={13}
              >
                Project
              </Typography>
            </Item>
            <Item>
              <Typography variant={'h6'} mb={0.5}>
                {item.summary.followers}
              </Typography>
              <Typography
                variant={'body1'}
                color='text.secondary'
                fontSize={13}
              >
                Followers
              </Typography>
            </Item>
          </Stack>
        </CardContent>
        <CardActions sx={{ p: 0, mx: '-1px' }}>
          <ButtonGroup size='large' fullWidth variant='outlined'>
            <ActionButton>Follow</ActionButton>
            <ActionButton>View Profile</ActionButton>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Grid>
  );
};

export { UserItem };
