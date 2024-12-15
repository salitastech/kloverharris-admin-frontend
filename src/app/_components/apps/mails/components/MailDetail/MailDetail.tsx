'use client';
import { JumboScrollbar } from '@jumbo/components';
import { Div, Span } from '@jumbo/shared';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import moment from 'moment';
import { useParams, useRouter } from 'next/navigation';
import { mails } from '../../fake-data';
import { Conversations } from './components';
const MailDetail = () => {
  const { folder } = useParams();
  const router = useRouter();
  const mailItem = mails?.find((item) => item.id === folder[1]);
  const handleNavigateItem = () => {
    return router.back();
  };

  if (!mailItem) return null;
  return (
    <Card>
      <CardHeader
        title={
          <IconButton onClick={handleNavigateItem} sx={{ ml: -1.25 }}>
            <ArrowBackIcon />
          </IconButton>
        }
        action={
          <Stack direction={'row'} sx={{ backgroundColor: 'transparent' }}>
            <Tooltip title={'Report Spam'}>
              <IconButton>
                <ReportGmailerrorredIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={'Archive'}>
              <IconButton>
                <ArchiveOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={'Archive'}>
              <IconButton>
                <LabelOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={'Delete'}>
              <IconButton>
                <DeleteOutlineIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        }
      />
      <CardContent sx={{ p: 0 }}>
        <JumboScrollbar
          style={{ minHeight: 380 }}
          autoHide
          autoHideDuration={200}
          autoHideTimeout={500}
          autoHeightMin={30}
        >
          <Div
            sx={{
              px: 3,
              display: 'flex',
              minHeight: '100%',
              flexDirection: 'column',
              minWidth: 0,
            }}
          >
            <Div sx={{ mb: 1 }}>
              <Typography variant={'h2'} mb={2}>
                {mailItem?.subject}
              </Typography>
              <Div
                sx={{
                  display: 'flex',
                }}
              >
                <Avatar
                  src={mailItem?.from.profile_pic}
                  sx={{ width: 44, height: 44 }}
                />
                <Div sx={{ ml: 2, flex: 1 }}>
                  <Typography
                    variant={'body1'}
                    fontSize={16}
                    sx={{
                      display: 'flex',
                      minWidth: 0,
                      alignItems: 'center',
                    }}
                  >
                    {mailItem?.from.name}
                    <Span sx={{ ml: 1, fontSize: 13, color: 'text.secondary' }}>
                      {`<${mailItem?.from.email}>`}
                    </Span>
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}>
                    to me
                  </Typography>
                </Div>
              </Div>
            </Div>
            <Div sx={{ flex: 1 }}>
              <Div
                sx={{
                  position: 'relative',
                  textAlign: 'center',
                  mb: 2,
                  '&:after': {
                    display: 'inline-block',
                    content: "''",
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '1px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'divider',
                  },
                }}
              >
                <Chip
                  label={moment(mailItem?.date).format('DD MMMM')}
                  variant='outlined'
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    bgcolor: (theme) => theme.palette.background.paper,
                    borderColor: 'divider',
                    borderRadius: 2,
                  }}
                />
              </Div>
              <Typography>{mailItem?.message}</Typography>
            </Div>
            <Div sx={{ mt: 1 }}>
              <Conversations />
            </Div>
          </Div>
        </JumboScrollbar>
      </CardContent>
    </Card>
  );
};

export { MailDetail };
