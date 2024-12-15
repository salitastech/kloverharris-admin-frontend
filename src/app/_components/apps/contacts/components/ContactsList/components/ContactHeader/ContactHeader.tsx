'use client';
import { AppPagination, SearchGlobal } from '@app/_components/_core';
import { labels } from '@app/_components/apps/contacts/fake-datas';
import { LabelPopover } from '@app/_components/popovers/LabelPopover';
import { useJumboDialog } from '@jumbo/components/JumboDialog/hooks/useJumboDialog';
import { Div } from '@jumbo/shared';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ListIcon from '@mui/icons-material/List';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import {
  Button,
  ButtonGroup,
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

const ContactHeader = ({
  view,
  onView,
}: {
  view: string;
  onView: (view: string) => void;
}) => {
  const { showDialog, hideDialog } = useJumboDialog();
  const [selectContact, setSelectContact] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleBulkDelete = () => {
    showDialog({
      variant: 'confirm',
      title: 'Are you sure?',
      onYes: () => {
        hideDialog();
        enqueueSnackbar('Contact has been deleted successfully.', {
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
              /**bulk actions */
              <Zoom in={selectContact}>
                <Div>
                  <Stack
                    direction={'row'}
                    sx={{ backgroundColor: 'transparent', ml: -2 }}
                  >
                    <Tooltip title={'Delete'}>
                      <IconButton onClick={handleBulkDelete}>
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Tooltip>
                    <LabelPopover labels={labels} />
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
      <Stack direction={'row'} alignItems={'center'}>
        <AppPagination />
        <Div sx={{ padding: 1 }}>
          <ButtonGroup
            variant='outlined'
            disableElevation
            sx={{
              '& .MuiButton-root': {
                px: 1,
              },
            }}
          >
            <Button
              variant={view === 'list' ? 'contained' : 'outlined'}
              onClick={() => onView('list')}
            >
              <ListIcon />
            </Button>
            <Button
              variant={view === 'grid' ? 'contained' : 'outlined'}
              onClick={() => onView('grid')}
            >
              <ViewComfyIcon />
            </Button>
          </ButtonGroup>
        </Div>
      </Stack>
    </ListItem>
  );
};

export { ContactHeader };
