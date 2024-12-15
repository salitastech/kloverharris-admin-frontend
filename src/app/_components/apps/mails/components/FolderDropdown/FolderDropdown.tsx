'use client';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { foldersList } from '../../fake-data';

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
        {foldersList.map((folder, index) => (
          <MenuItem
            key={index}
            value={folder.name}
            onClick={() => router.push(`/apps/mail/${folder.slug}`)}
          >
            {folder.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export { FolderDropdown };
