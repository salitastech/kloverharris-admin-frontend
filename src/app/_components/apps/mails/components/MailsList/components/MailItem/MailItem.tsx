'use client';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {
  Checkbox,
  Collapse,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React from 'react';

import { LabelChips } from '@app/_components/apps/common_components';
import { useJumboDialog } from '@jumbo/components/JumboDialog/hooks/useJumboDialog';
import { useJumboTheme } from '@jumbo/components/JumboTheme/hooks';
import { Div, Span } from '@jumbo/shared';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplyIcon from '@mui/icons-material/Reply';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { ComposeForm } from '../../../MailAppSidebar';
import { MailDetail } from '../../../MailDetail';

const MailItem = ({ mailItem }: any) => {
  const { theme } = useJumboTheme();
  const { showDialog } = useJumboDialog();
  const router = useRouter();
  const [favoriteMail, setFavoriteMail] = React.useState<boolean>(
    mailItem.favorite
  );
  const [showMessage, setShowMessage] = React.useState<boolean>(false);

  const handleConversationClick = () => {
    setShowMessage(!showMessage);
    router.push(`/apps/mail/messages/${mailItem.id}`);
  };

  const handleComposeForm = (mailItem: any) => {
    showDialog({
      title: 'Compose Message',
      content: <ComposeForm mailItem={mailItem} />,
    });
  };
  return (
    <React.Fragment>
      {showMessage && (
        <Collapse in={showMessage}>
          <MailDetail />
        </Collapse>
      )}
      {
        <ListItem
          sx={{
            cursor: 'pointer',
            borderTop: 1,
            borderTopColor: 'divider',

            '&:hover': {
              bgcolor: 'action.hover',

              '& .ListAction': {
                width: { sm: '100%' },
                opacity: { sm: 1 },
              },

              '& .ListTextExtra': {
                visibility: { sm: 'hidden' },
                opacity: { sm: 0 },
              },
            },

            '& .MuiListItemIcon-root': {
              minWidth: 48,
            },

            [theme.breakpoints.down('sm')]: {
              flexWrap: 'wrap',
            },
          }}
        >
          <Checkbox sx={{ my: -0.5 }} />
          <ListItemIcon sx={{ display: { xs: 'none', md: 'block' } }}>
            {favoriteMail ? (
              <Tooltip title={'Starred'}>
                <StarIcon
                  fontSize={'small'}
                  sx={{ color: 'warning.main' }}
                  onClick={() => setFavoriteMail(!favoriteMail)}
                />
              </Tooltip>
            ) : (
              <Tooltip title={'Not starred'}>
                <StarBorderIcon
                  fontSize={'small'}
                  sx={{ color: 'text.secondary' }}
                  onClick={() => setFavoriteMail(!favoriteMail)}
                />
              </Tooltip>
            )}
          </ListItemIcon>
          <ListItemAvatar
            onClick={handleConversationClick}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <Avatar
              alt={mailItem?.from?.name}
              src={mailItem?.from?.profile_pic}
            />
          </ListItemAvatar>
          <ListItemText
            onClick={handleConversationClick}
            primary={
              <Typography variant={'body1'} component={'div'}>
                <Typography variant={'h6'}>{mailItem?.from?.name}</Typography>
                <Typography variant={'body1'} color={'text.secondary'} noWrap>
                  {mailItem?.subject}
                </Typography>
              </Typography>
            }
            sx={{ flex: 1 }}
          />
          <Div
            sx={{
              width: 160,
              display: 'flex',
              flexShrink: '0',
              position: 'relative',
              justifyContent: 'flex-end',

              [theme.breakpoints.down('sm')]: {
                width: '100%',
                justifyContent: 'space-between',
              },
            }}
          >
            <Div
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                flex: 1,
                transition: 'all 0.5s ease',

                [theme.breakpoints.down('sm')]: {
                  justifyContent: 'flex-start',
                  ml: 6,
                },
              }}
              className={'ListTextExtra'}
            >
              <LabelChips
                labelsArray={mailItem?.labels}
                mapKeys={{ label: 'name' }}
                spacing={1}
                size={'small'}
                max={1}
              />
              <Typography variant={'body1'} color={'text.secondary'} ml={1}>
                {moment(mailItem?.date).format('MMMM DD')}
              </Typography>
            </Div>
            <Div
              className='ListAction'
              sx={{
                display: 'flex',

                [theme.breakpoints.up('sm')]: {
                  position: 'absolute',
                  top: '50%',
                  width: 0,
                  opacity: 0,
                  overflow: 'hidden',
                  transition: 'all 0.5s ease',
                  justifyContent: 'flex-end',
                  transform: 'translateY(-50%)',
                },
              }}
            >
              <Span sx={{ height: 36, overflow: 'hidden' }}>
                <Tooltip title='Delete'>
                  <IconButton>
                    <DeleteIcon fontSize={'small'} />
                  </IconButton>
                </Tooltip>
                <Tooltip title={'Archive'}>
                  <IconButton>
                    <ArchiveIcon fontSize={'small'} />
                  </IconButton>
                </Tooltip>
                <Tooltip title={'Forward'}>
                  <IconButton onClick={() => handleComposeForm(mailItem)}>
                    <ReplyIcon fontSize={'small'} />
                  </IconButton>
                </Tooltip>
              </Span>
            </Div>
          </Div>
        </ListItem>
      }
    </React.Fragment>
  );
};

export { MailItem };
