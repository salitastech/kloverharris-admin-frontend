import { useJumboTheme } from '@jumbo/components/JumboTheme/hooks';
import { MenuItems } from '@jumbo/types';
import { List, Theme } from '@mui/material';
import { JumboNavIdentifier } from '..';
import { JumboNavbarContext } from './JumboNavbarContext';
import { isNavSection } from '@jumbo/utilities/helpers';

type JumboNavbarProviderProps = {
  items: MenuItems;
  mini?: boolean;
  open?: boolean;
  theme?: Theme;
  groupBehaviour?: 'collapsible' | 'popover';
};
function JumboNavbarProvider({
  items = [],
  mini = false,
  open = true,
  groupBehaviour = 'collapsible',
  theme,
}: JumboNavbarProviderProps) {
  const miniAndClosed: boolean = !!mini && !open;
  const { theme: jumboTheme } = useJumboTheme();
  const contextValue = {
    items,
    miniAndClosed,
    theme: theme || jumboTheme,
    groupBehaviour,
    mini,
    open,
  };

  let isFirstSection = true;
  return (
    <JumboNavbarContext.Provider value={contextValue}>
      <List
        disablePadding
        sx={{
          mr: miniAndClosed ? 0 : 2,
          pb: 2,
        }}
      >
        {items.map((item, index) => {
          if(isNavSection(item) && isFirstSection === true) {
            isFirstSection = false;
            return (<JumboNavIdentifier item={item} key={index} isFirstSection={true} />)
          }
          return (<JumboNavIdentifier item={item} key={index} />)
        })}
      </List>
    </JumboNavbarContext.Provider>
  );
}

export { JumboNavbarProvider };
