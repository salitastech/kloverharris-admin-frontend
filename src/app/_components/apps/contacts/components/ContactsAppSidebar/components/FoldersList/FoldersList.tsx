'use client';
import { StyledMenu } from '@app/_components/_core';
import { FolderProps } from '@app/_components/apps/_types/ContactTypes';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContactsIcon from '@mui/icons-material/Contacts';
import DeleteIcon from '@mui/icons-material/Delete';
import StarsIcon from '@mui/icons-material/Stars';
import { useParams } from 'next/navigation';
import { FolderItem } from '../FolderItem';

const folders: FolderProps[] = [
  {
    icon: <ContactsIcon fontSize={'small'} />,
    label: 'All Contacts',
    slug: 'all',
    path: '/apps/contact/all',
  },
  {
    icon: <StarsIcon fontSize={'small'} />,
    label: 'Starred',
    slug: 'starred',
    path: '/apps/contact/starred',
  },
  {
    icon: <AccessTimeIcon fontSize={'small'} />,
    label: 'Frequently Used',
    slug: 'frequent',
    path: '/apps/contact/frequent',
  },
  {
    icon: <DeleteIcon fontSize={'small'} />,
    label: 'Trash',
    slug: 'trash',
    path: '/apps/contact/trash',
  },
];

const FoldersList = () => {
  const { category } = useParams();
  return (
    <StyledMenu sx={{ mb: 2 }}>
      {folders.map((folder) => (
        <FolderItem
          key={folder.slug}
          path={folder.path}
          label={folder.label}
          icon={folder.icon}
          selected={Array.isArray(category) && folder.slug === category[0]}
        />
      ))}
    </StyledMenu>
  );
};

export { FoldersList };
