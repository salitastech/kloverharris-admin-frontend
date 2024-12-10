type MenuItemProps = {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  slug?: React.ReactNode;
  action?: React.ReactNode;
};
type JumboDdMenuProps = {
  icon?: React.ReactNode;
  menuItems?: MenuItemProps[];
  onClickCallback?: (option: MenuItemProps) => void;
};

export { type JumboDdMenuProps, type MenuItemProps };
