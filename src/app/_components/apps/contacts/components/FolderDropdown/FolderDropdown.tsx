'use client';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContactsIcon from '@mui/icons-material/Contacts';
import DeleteIcon from '@mui/icons-material/Delete';
import StarsIcon from '@mui/icons-material/Stars';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

const folders = [
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
    label: 'Frequently',
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
const FolderDropdown = () => {
  const router = useRouter();
  const [folder, setFolder] = React.useState('');
  return (
    <FormControl sx={{ width: 120 }} size={'small'}>
      <InputLabel>Folder</InputLabel>
      <Select
        value={folder}
        label='Folder'
        onChange={(event) => setFolder(event.target.value)}
      >
        <MenuItem value=''>
          <em>Select Folder</em>
        </MenuItem>
        {folders.map((folder, index) => (
          <MenuItem
            key={index}
            value={folder.label}
            onClick={() => router.push(`/apps/contact/${folder.slug}`)}
          >
            {folder.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export { FolderDropdown };
