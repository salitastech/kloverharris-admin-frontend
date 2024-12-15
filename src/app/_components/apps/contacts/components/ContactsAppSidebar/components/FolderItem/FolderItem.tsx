'use client';
import { FolderProps } from '@app/_components/apps/_types/ContactTypes';
import { Link } from '@jumbo/shared';
import { Chip, ListItemIcon, ListItemText, MenuItem } from '@mui/material';

const FolderItem = ({ icon, label, path, count, selected }: FolderProps) => {
  return (
    <MenuItem disableRipple sx={{ p: 0, mb: 2 }} selected={selected}>
      <Link underline={'none'} href={path}>
        {icon && <ListItemIcon sx={{ color: 'inherit' }}>{icon}</ListItemIcon>}
        <ListItemText>{label}</ListItemText>
        {count! > 0 && <Chip size={'small'} label={count} />}
      </Link>
    </MenuItem>
  );
};
export { FolderItem };
