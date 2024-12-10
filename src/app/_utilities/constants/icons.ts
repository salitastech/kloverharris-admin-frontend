import { SvgIconComponent } from '@mui/icons-material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { SxProps, Theme } from '@mui/material';

type Icon = {
  name: string;
  Component: SvgIconComponent;
  props?: {
    sx?: SxProps<Theme>;
  };
};

const APP_ICONS: Icon[] = [
  {
    name: 'sample',
    Component: EditOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
];

export { APP_ICONS, type Icon };
