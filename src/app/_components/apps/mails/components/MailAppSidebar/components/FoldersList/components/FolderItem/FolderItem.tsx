'use client';
import { Link, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';

const FolderItem = ({ icon, name, selected, slug }: any) => {
  const router = useRouter();
  const handleFolderItem = () => {
    router.push(`/apps/mail/${slug}`);
  };
  return (
    <MenuItem disableRipple sx={{ p: 0, mb: 2 }} selected={selected}>
      <Link underline={'none'} onClick={handleFolderItem}>
        {icon && <ListItemIcon sx={{ color: 'inherit' }}>{icon}</ListItemIcon>}
        <ListItemText>{name}</ListItemText>
      </Link>
    </MenuItem>
  );
};
export { FolderItem };
