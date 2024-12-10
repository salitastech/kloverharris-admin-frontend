
import { Link } from '@jumbo/shared';
import { NavbarItem } from '@jumbo/types';
import CircleIcon from '@mui/icons-material/Circle';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
  Theme,
} from '@mui/material';
import { useJumboNavItemSx, useJumboNavbar } from '../../hooks';
import { Icon } from '@jumbo/components/Icon';
type JumboNavItemProps = {
  item: NavbarItem | undefined;
  isNested: boolean;
};

function JumboNavItem({ item, isNested }: JumboNavItemProps) {
  const navSx: SxProps<Theme> = useJumboNavItemSx(item?.path ?? '');
  const { miniAndClosed } = useJumboNavbar();

  //TODO: this component depends on this useTranslations

  if (!item) return null;

  return (
    <ListItemButton component={'li'} sx={{ ...navSx }}>
      <Link
        underline={'none'}
        href={item.path}
        {...(item.target ? { target: item.target } : {})}
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
          color: 'inherit',
          p: (theme: Theme) =>
            !miniAndClosed
              ? typeof theme.spacing === 'function'
                ? theme.spacing(1, 3.75)
                : 0
              : 0,
          ...(miniAndClosed ? { justifyContent: 'center' } : {}),
        }}
      >
        <ListItemIcon
          sx={{ minWidth: miniAndClosed ? 20 : 32, color: 'inherit' }}
        >
          {isNested ? (
            <CircleIcon sx={{ fontSize: 6, ml: 1 }} />
          ) : (
            <Icon name={item.icon} sx={{ fontSize: 20 }} />
          )}
        </ListItemIcon>
        {!miniAndClosed && (
          <ListItemText
            primary={item.label}
            sx={{
              m: 0,
              '& .MuiTypography-root': {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
            }}
          />
        )}
      </Link>
    </ListItemButton>
  );
}

export { JumboNavItem };
