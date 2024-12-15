'use client';
import { ContactProps } from '@app/_components/apps/_types/ContactTypes';
import styled from '@emotion/styled';
import { JumboDdMenu } from '@jumbo/components';
import { useJumboDialog } from '@jumbo/components/JumboDialog/hooks/useJumboDialog';
import { Div } from '@jumbo/shared';
import { MenuItemProps } from '@jumbo/types';
import useSwalWrapper from '@jumbo/vendors/sweetalert2/hooks';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {
  Avatar,
  Checkbox,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import { LabelChips } from '../../../../../common_components/LabelChips';
import { ContactForm } from '../../../ContactsAppSidebar/components';
import { ContactDetail } from '../ContactDetail';

const Item = styled(Div)(({ theme }) => ({
  minWidth: 0,
  flexGrow: 0,
  padding: theme.spacing(0, 1),
}));

const ContactListItem = ({ contact }: { contact: ContactProps }) => {
  const [favorite, setFavorite] = React.useState(contact?.starred);
  const { showDialog, hideDialog } = useJumboDialog();
  const Swal = useSwalWrapper();

  const handleItemAction = (menuItem: MenuItemProps) => {
    switch (menuItem.action) {
      case 'edit':
        showDialog({
          title: 'Update contact detail',
          content: <ContactForm contact={contact} />,
        });
        break;
      case 'delete':
        showDialog({
          variant: 'confirm',
          title: 'Are you sure about deleting this contact?',
          content: "You won't be able to recover this contact later",
          onYes: () => {
            hideDialog();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Contact has been deleted successfully.',
              showConfirmButton: false,
              timer: 1500,
            });
          },
          onNo: hideDialog,
        });
    }
  };
  const showContactDetail = React.useCallback(() => {
    showDialog({
      content: <ContactDetail contact={contact} onClose={hideDialog} />,
    });
  }, [showDialog, hideDialog, contact]);

  return (
    <ListItem
      sx={{
        cursor: 'pointer',
        borderTop: 1,
        borderColor: 'divider',
        '&:hover': {
          bgcolor: 'action.hover',
        },
      }}
      secondaryAction={
        <JumboDdMenu
          icon={<MoreHorizIcon />}
          menuItems={[
            { icon: <EditIcon />, title: 'Edit', action: 'edit' },
            { icon: <DeleteIcon />, title: 'Delete', action: 'delete' },
          ]}
          onClickCallback={handleItemAction}
        />
      }
    >
      <Checkbox sx={{ my: -0.5 }} />
      <ListItemIcon sx={{ minWidth: 40 }}>
        {favorite ? (
          <Tooltip title={'Starred'}>
            <StarIcon
              fontSize={'small'}
              sx={{ color: 'warning.main' }}
              onClick={() => setFavorite(!favorite)}
            />
          </Tooltip>
        ) : (
          <Tooltip title={'Not starred'}>
            <StarBorderIcon
              fontSize={'small'}
              sx={{ color: 'text.secondary' }}
              onClick={() => setFavorite(!favorite)}
            />
          </Tooltip>
        )}
      </ListItemIcon>
      <ListItemAvatar onClick={showContactDetail}>
        <Avatar alt={contact.name} src={contact.profile_pic} />
      </ListItemAvatar>
      <ListItemText
        onClick={showContactDetail}
        primary={
          <Typography variant={'body1'} component={'div'}>
            <Stack direction={'row'} alignItems={'center'} sx={{ minWidth: 0 }}>
              <Item
                sx={{
                  flexBasis: { xs: '100%', sm: '50%', md: '25%' },
                }}
              >
                <Typography
                  variant={'h5'}
                  fontSize={14}
                  lineHeight={1.25}
                  mb={0}
                  noWrap
                >
                  {contact.name}
                </Typography>
                <Typography
                  variant={'body1'}
                  noWrap
                  color={'text.secondary'}
                  sx={{
                    display: { sm: 'none' },
                  }}
                >
                  {contact.email}
                </Typography>
              </Item>
              <Item
                sx={{
                  flexBasis: { sm: '50%', md: '28%' },
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                <Typography variant={'body1'} noWrap>
                  {contact.email}
                </Typography>
              </Item>
              <Item
                sx={{
                  flexBasis: { md: '25%' },
                  display: { xs: 'none', md: 'block' },
                }}
              >
                <Typography variant={'body1'} noWrap>
                  {contact.phone}
                </Typography>
              </Item>
              <Item
                sx={{
                  flexBasis: { md: '22%' },
                  display: { xs: 'none', md: 'block' },
                }}
              >
                <LabelChips
                  labelsArray={contact?.labels}
                  mapKeys={{ label: 'name' }}
                  spacing={1}
                  size={'small'}
                  max={1}
                />
              </Item>
            </Stack>
          </Typography>
        }
      />
    </ListItem>
  );
};

export { ContactListItem };
