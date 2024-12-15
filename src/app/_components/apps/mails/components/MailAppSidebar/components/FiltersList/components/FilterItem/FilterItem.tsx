'use client';
import { Link, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';

const FilterItem = ({ name, icon, slug, selected }: any) => {
  const router = useRouter();
  const handleFilterItem = () => {
    router.push(`/apps/mail/${slug}`);
  };
  return (
    <MenuItem disableRipple sx={{ p: 0, mb: 2 }} selected={selected}>
      <Link underline={'none'} onClick={handleFilterItem}>
        {icon && <ListItemIcon sx={{ color: 'inherit' }}>{icon}</ListItemIcon>}
        <ListItemText>{name}</ListItemText>
      </Link>
    </MenuItem>
  );
};
export { FilterItem };
