'use client';
import { AppPagination, SearchGlobal } from '@app/_components/_core';
import { labelsList } from '@app/_components/apps/mails/fake-data';
import { LabelPopover } from '@app/_components/popovers/LabelPopover';
import { useJumboDialog } from '@jumbo/components/JumboDialog/hooks/useJumboDialog';
import { Div } from '@jumbo/shared';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  Stack,
  Tooltip,
  Zoom,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import React from 'react';
const MailHeader = () => {
  const { showDialog, hideDialog } = useJumboDialog();
  const [selectContact, setSelectContact] = React.useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const onMoveFolder = (message: string) => {
    showDialog({
      variant: 'confirm',
      title: 'Are you sure?',
      onYes: () => {
        hideDialog();
        enqueueSnackbar(message, {
          variant: 'success',
        });
      },
      onNo: hideDialog,
    });
  };
  return (
    <ListItem component='div'>
      <ListItemText
        primary={
          <Stack direction={'row'} spacing={2}>
            <Div>
              <Checkbox
                color='primary'
                checked={selectContact}
                onChange={() => setSelectContact(!selectContact)}
              />
            </Div>

            {selectContact && (
              <Zoom in={selectContact}>
                <Div>
                  <Stack
                    direction={'row'}
                    sx={{ backgroundColor: 'transparent', ml: -2 }}
                  >
                    <Tooltip title={'Report Spam'}>
                      <IconButton
                        onClick={() =>
                          onMoveFolder('Mail have move to spam successfully.')
                        }
                      >
                        <ReportGmailerrorredIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={'Archive'}>
                      <IconButton
                        onClick={() => {
                          onMoveFolder(
                            'Mail have move to archive successfully.'
                          );
                        }}
                      >
                        <ArchiveOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={'Archive'}>
                      <LabelPopover labels={labelsList} />
                    </Tooltip>
                    <Tooltip title={'Delete'}>
                      <IconButton
                        onClick={() =>
                          onMoveFolder('Mails have been deleted successfully.')
                        }
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Div>
              </Zoom>
            )}
            <Div>
              <SearchGlobal
                wrapperSx={{
                  display: { xs: 'none', md: 'block' },
                  '& .MuiInputBase-root': {
                    boxShadow: 0,
                    border: 1,
                    borderColor: 'divider',
                  },
                }}
              />
            </Div>
          </Stack>
        }
      />
      <AppPagination />
    </ListItem>
  );
};

export { MailHeader };
