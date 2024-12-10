import { MenuItems } from '@jumbo/types';
import { Collapse, CollapseProps } from '@mui/material';
import { SubMenus } from '..';

type SubMenusCollapsibleProps = CollapseProps & {
  items: MenuItems;
  open: boolean;
  miniAndClosed: boolean;
};

function SubMenusCollapsible({
  items,
  open,
  miniAndClosed,
}: SubMenusCollapsibleProps) {
  return (
    <Collapse component={'li'} in={open} timeout='auto' unmountOnExit>
      <SubMenus items={items} miniAndClosed={miniAndClosed} />
    </Collapse>
  );
}

export { SubMenusCollapsible };
