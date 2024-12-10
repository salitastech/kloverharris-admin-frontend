import { MenuItems } from '@jumbo/types';
import { Popover } from '@mui/material';
import { SubMenus } from '..';

type SubMenusPopoverProps = {
  items: MenuItems;
  anchorEl: HTMLLIElement | null;
  miniAndClosed: boolean;
  onClose: () => void;
};
function SubMenusPopover({
  items,
  anchorEl,
  onClose,
  miniAndClosed,
}: SubMenusPopoverProps) {
  const open = Boolean(anchorEl);

  return (
    <Popover
      id='mouse-over-popover'
      sx={{
        pointerEvents: 'none',
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      onClose={onClose}
      disableRestoreFocus
    >
      <SubMenus items={items} miniAndClosed={miniAndClosed} />
    </Popover>
  );
}

export { SubMenusPopover };
